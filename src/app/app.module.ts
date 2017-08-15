import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ToastyModule } from 'ng2-toasty';

import { CoreModule } from './core/core.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { LacamentosModule } from './lancamentos/lacamentos.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,

    ToastyModule.forRoot(),

    CoreModule,
    PessoasModule,
    LacamentosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
