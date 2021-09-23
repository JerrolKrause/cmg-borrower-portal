import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
interface Result {
  label: string;
  value: string;
}
@Component({
  selector: 'app-upload2',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadComponent implements OnInit {
  public text = '';
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

  public files: any;

  constructor(public config: DynamicDialogConfig, public ref: DynamicDialogRef) {}

  ngOnInit(): void {
    console.log(this.config);
  }

  public search(e: any) {
    this.results = this.resultsSrc.filter(r =>
      r.label
        .toLowerCase()
        .replace(/[^a-zA-Z ]/g, '')
        .includes(e.query.toLowerCase().replace(/[^a-zA-Z ]/g, '')),
    );
    console.log(e);
  }

  public filesAdded(e: any) {
    console.log(e);
    this.files = e;
  }

  public submit() {
    this.ref.close();
  }
}
