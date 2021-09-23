import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';

interface Result {
  label: string;
  value: string;
}
@Component({
  selector: 'app-upload-route',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadComponent implements OnInit, OnDestroy {
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

  public results: Result[] = [...this.resultsSrc];
  constructor() {} // public uiState: UiStateService, // Global UI state // private domainState: DomainService, // Global domain state

  ngOnInit() {}

  public search(e: any) {
    this.results = this.resultsSrc.filter(r =>
      r.label
        .toLowerCase()
        .replace(/[^a-zA-Z ]/g, '')
        .includes(e.query.toLowerCase().replace(/[^a-zA-Z ]/g, '')),
    );
  }

  public filesAdded(e: any) {
    this.files = e;
  }

  ngOnDestroy() {}
}
