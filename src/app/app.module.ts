import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeReportModule } from './time-report/time-report.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.forRoot({}),
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    TimeReportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
