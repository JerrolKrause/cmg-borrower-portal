import { Component, OnInit, ChangeDetectionStrategy, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
interface Result {
  label: string;
  value: string;
}
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UploadComponent implements OnInit {
  @Input() showSubmit = true;
  @Input() styles = { 'min-height': '250px' };
  @Input() canSelectBorrower = true;
  @Output() filesAdded = new EventEmitter();
  public success = false;
  public files: any;
  public text: string[] = [];
  public resultsSrc: Result[] = [
    { label: 'W-2 forms', value: 'W-2 forms' },
    { label: 'Pay stubs', value: 'Pay stubs' },
    { label: 'Income tax returns', value: 'Income tax returns' },
    { label: 'Alimony or child support documents', value: 'Alimony or child support documents' },
    { label: 'Bank Statements', value: 'Bank Statements' },
    { label: 'Drivers License', value: 'Drivers License' },
    { label: 'Retirement and investment accounts', value: 'Retirement and investment accounts' },
    { label: 'Gift Letter', value: 'Gift Letter' },
  ];

  public borrower = 0;
  public borrowers = [
    { name: 'John Borrower', code: 0 },
    { name: 'Jane Borrower', code: 1 },
  ];

  public results: Result[] = [...this.resultsSrc];
  constructor() {}

  ngOnInit(): void {}

  public search(e: any) {
    this.results = this.resultsSrc.filter(r =>
      r.label
        .toLowerCase()
        .replace(/[^a-zA-Z ]/g, '')
        .includes(e.query.toLowerCase().replace(/[^a-zA-Z ]/g, '')),
    );
    console.log(e);
  }

  public filesAddedSrc(e: any) {
    console.log(e);
    this.filesAdded.emit(e);
    this.files = e;
  }

  public cancel() {
    console.log('Cancel');
    this.files = null;
    this.filesAdded.emit(null);
    console.log('Cancel', this);
  }

  public submit() {}
}
