import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { LancamentoService } from '../lancamentos/lancamento.service';
import { ErrorHandlerService } from './error-handler.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavbarComponent
  ],
  providers: [
    LancamentoService,
    ErrorHandlerService
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
