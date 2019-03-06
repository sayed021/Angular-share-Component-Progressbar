import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProgressbarModule } from './progressbar/progressbar.module';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { AnotherComponent } from './another/another.component';

@NgModule({
  declarations: [
    AppComponent,
    AnotherComponent
  ],
  imports: [
    BrowserModule,
    ProgressbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
