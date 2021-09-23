import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploaderComponent } from './components/file-uploader.component';



@NgModule({
  declarations: [FileUploaderComponent],
  imports: [
    CommonModule
  ],
  exports: [FileUploaderComponent]
})
export class NtsFileUploaderModule { }
