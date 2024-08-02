import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';

import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http'; // import

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    GifsModule,
    SharedModule
  ],
  providers: [
    provideHttpClient() //usage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
