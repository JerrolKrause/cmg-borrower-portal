import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteModule } from '$site'; // Site modules
import { NtsFileUploaderModule } from '../../libs/file-uploader/file-uploader.module';
import { AutoCompleteModule } from 'primeng/autocomplete';
// Routing
import { routing } from './routes';

// Components
import { UploadComponent } from './upload.component';
import { RouteUiStateService, RouteUiStateStore, RouteUiStateQuery } from './shared/state/ui/route-ui-state.service';

@NgModule({
  imports: [CommonModule, SiteModule, routing, NtsFileUploaderModule, AutoCompleteModule],
  declarations: [UploadComponent],
  providers: [RouteUiStateService, RouteUiStateStore, RouteUiStateQuery],
  exports: [],
  entryComponents: [],
})
export class UploadModule {}
