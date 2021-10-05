import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, AfterViewInit, OnDestroy, Output, Input, EventEmitter } from '@angular/core';
import { fromEvent, merge, BehaviorSubject, Subscription } from 'rxjs'; //
import { map, distinctUntilChanged, filter, tap } from 'rxjs/operators';

export interface NtsFileUpload {
  file: File;
  formData: FormData;
  fileReader: FileReader;
  objectUrl: string;
}

@Component({
  selector: 'nts-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploaderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() placeholder = 'Click or drag and drop to <strong>upload files</strong>';
  @Input() subtext: string | null = null;
  @Input() multiple = false;
  @Input() styles: Record<string, string> = {};
  @Output() filesAdded = new EventEmitter<NtsFileUpload[]>();
  @ViewChild('label', { static: false }) label!: ElementRef;
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;

  public dragEvent$!: Subscription;
  public dropEvent$!: Subscription;
  public domEvents$ = new BehaviorSubject<string | null>(null);
  public uniqueId = 'nts-file-upload-' + Math.floor(Math.random() * 1000000);

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    // Stop drag events, set highlight
    this.dragEvent$ = merge(fromEvent<DragEvent>(this.label.nativeElement, 'dragleave'), fromEvent<DragEvent>(this.label.nativeElement, 'dragover'))
      .pipe(
        map(e => {
          e.preventDefault();
          e.stopPropagation();
          return e.type;
        }),
        distinctUntilChanged(),
        // debounceTime(100),
        tap(type => this.domEvents$.next(type)),
      )
      .subscribe();

    // Capture drop event
    this.dropEvent$ = fromEvent<DragEvent>(this.label.nativeElement, 'drop')
      .pipe(
        map(e => {
          e.preventDefault();
          e.stopPropagation();
          return e;
        }),
        tap(e => this.domEvents$.next(e.type)),
        filter(e => !!e.dataTransfer),
      )
      .subscribe(e => {
        if (e.dataTransfer) {
          this.filesAdd(e.dataTransfer.files);
        }
      });
  }

  /**
   * Create a filelist
   * @param fileList
   */
  public filesAdd(fileList?: FileList | null) {
    if (!fileList) {
      return;
    }
    const files: NtsFileUpload[] = Object.keys(fileList).map(key => {
      const file: File = (<any>fileList)[key];
      return {
        file: file,
        get formData() {
          const formData: FormData = new FormData();
          formData.append('file', file, file.name);
          return formData;
        },
        get fileReader() {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          // reader.onload = function() {};
          // reader.onerror = function() {};
          return reader;
        },
        get objectUrl() {
          return URL.createObjectURL(file);
        },
      };
    });
    this.filesAdded.emit(files);
  }

  ngOnDestroy() {
    this.dragEvent$.unsubscribe();
    this.dropEvent$.unsubscribe();
  }
}
