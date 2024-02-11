import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainHeaderComponent } from './header/main-header/main-header.component';
import { MainComponent } from './main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Legionmain1Component } from './main/legionmain1/legionmain1.component';
import { Legionmain2Component } from './main/legionmain2/legionmain2.component';
import { LegionreviewComponent } from './main/legionreview/legionreview.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainHeaderComponent,
    MainComponent,
    Legionmain1Component,
    Legionmain2Component,
    LegionreviewComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
