import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';

import { GlobalErrorHandler } from './global-error-handler/global-error-handler';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ]
})
export class ErrorsModule { }
