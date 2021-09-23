import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteModule } from '$site'; // Site modules
import { AccordionModule } from 'primeng/accordion';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TabViewModule } from 'primeng/tabview';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { NtsFormsModule } from '@ntersol/forms';
import { NtsFileUploaderModule } from '../../libs/file-uploader/file-uploader.module';
// Routing
import { routing } from './home.routes';

// Components
import { HomeComponent } from './home.component';

// Route State Management
import { RouteUiStateQuery, RouteUiStateService, RouteUiStateStore } from './shared/state/ui';
import { RouteDomainStateService } from './shared/state/domain';
import { UploadComponent } from './components/modals/upload/upload.component';

@NgModule({
  imports: [
    CommonModule,
    NtsFormsModule,
    NtsFileUploaderModule,
    AutoCompleteModule,
    SiteModule,
    routing,
    AccordionModule,
    SplitButtonModule,
    TabViewModule,
    DynamicDialogModule,
  ],
  declarations: [HomeComponent, UploadComponent],
  providers: [RouteUiStateService, RouteUiStateStore, RouteUiStateQuery, RouteDomainStateService],
  exports: [],
  entryComponents: [UploadComponent],
})
export class HomeModule {}
