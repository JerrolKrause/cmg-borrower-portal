import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadComponent } from './upload.component';
import { UploadModule } from './upload.module';

const routes: Routes = [
  {
    path: ':type/:id',
    component: UploadComponent,
    data: { title: 'Upload Files' },
  },

  {
    path: '',
    component: UploadComponent,
    data: { title: 'Upload Files' },
  },
];

export const routing: ModuleWithProviders<UploadModule> = RouterModule.forChild(routes);
