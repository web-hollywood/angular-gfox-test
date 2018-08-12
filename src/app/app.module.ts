import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// library import
import { ToastrModule } from 'ngx-toastr';
// app routing
import { AppRoutingModule } from './app-routing.module';
// submodules
import { BeerModule } from './pages/beer/beer.module';
// services
import { PunkService } from './core/services/punk.service';
// components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    BeerModule
  ],
  providers: [
    PunkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
