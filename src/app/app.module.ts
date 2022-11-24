import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';
import {HttpClientModule} from '@angular/common/http';
import {NewsapiserviceService} from './service/newsapiservice.service';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component'
// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { NewsformComponent } from './newsform/newsform.component';
import {ReactiveFormsModule,FormsModule} from  '@angular/forms';
import { RegisterformComponent } from './registerform/registerform.component';
import { LoginComponent } from './login/login.component'
import { NgxPaginationModule } from 'ngx-pagination';
import { LogComponent } from './log/log.component';
import { LogregisterComponent } from './logregister/logregister.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './newsform/navbar/navbar.component';
import { FoodComponent } from './food/food.component';
@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent,
    BusinessnewsComponent,
    NewsformComponent,
    RegisterformComponent,
    LoginComponent,
    LogComponent,
    LogregisterComponent,
    HomeComponent,
    NavbarComponent,
    FoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [NewsapiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
