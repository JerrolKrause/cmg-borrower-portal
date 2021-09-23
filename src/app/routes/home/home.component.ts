import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ViewEncapsulation } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { UploadComponent } from './components/modals/upload/upload.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DialogService],
})
export class HomeComponent implements OnInit, OnDestroy {
  public borrowers = [
    {
      label: 'John Borrower',
      docs: [{ label: 'Bank Statements', hint: 'Most recent 2 months' }, { label: 'W2' }, { label: 'Drivers License' }],
    },
    {
      label: 'Jane Borrower',
      docs: [{ label: 'Drivers License' }],
    },
  ];

  public completed = [{ label: 'Drivers License' }, { label: 'Bank Statements' }];

  public totalDocs = this.borrowers.map(b => b.docs.length).reduce((a, b) => a + b, 0);

  public items = [{ label: 'Wet Sign' }];
  constructor(public dialogService: DialogService) {}

  ngOnInit() {}

  public openUploadModal(doc?: any | null) {
    const ref = this.dialogService.open(UploadComponent, {
      header: 'Upload ' + (doc ? doc.label : 'Other Document'),
      width: '70%',
      data: doc,
    });
    ref.onClose.subscribe(x => {
      console.log(x);
    });
  }

  /** Must be present even if not used for autounsub */
  ngOnDestroy() {}
}
