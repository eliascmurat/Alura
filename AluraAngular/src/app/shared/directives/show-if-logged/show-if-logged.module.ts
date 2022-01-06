import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ShowIfLoggedDirective } from './show-if-logged.directive';

@NgModule({
  declarations: [
    ShowIfLoggedDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShowIfLoggedDirective
  ]
})
export class showIfLoggedModule { }
