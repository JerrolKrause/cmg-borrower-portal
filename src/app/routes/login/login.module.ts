import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteModule } from '$site'; // Site modules
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { LoginComponent } from './login.component';
import { routing } from './login.routes';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [CommonModule, SiteModule, CardModule, MessageModule, routing, DropdownModule, InputTextModule],
  declarations: [LoginComponent],
  providers: [],
  exports: [],
  entryComponents: [],
})
export class LoginModule {}
