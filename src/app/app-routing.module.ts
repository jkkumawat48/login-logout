import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { LogComponent } from './log/log.component';
import { LoginComponent } from './login/login.component';
import { LogregisterComponent } from './logregister/logregister.component';
import { NavbarComponent } from './newsform/navbar/navbar.component';
import { NewsformComponent } from './newsform/newsform.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [
  {path:'',redirectTo:'log',pathMatch:"full"},
  {path:'',component:TopheadingComponent}, // home
  {path:'tech',component:TechnewsComponent}, // tech news
  {path:'business',component:BusinessnewsComponent},// business news
  {path:'form',component:NewsformComponent}, //newsForms
  {path: 'register',component:RegisterformComponent}, // register component
  {path: 'login',component:LoginComponent} ,// login component
  {path: 'logregister',component:LogregisterComponent},
  {path:'log',component:LogComponent},
  {path:'navbar',component:NavbarComponent, children:[
    {path:'',component:TopheadingComponent}, // home
    {path:'tech',component:TechnewsComponent}, // tech news
    {path:'business',component:BusinessnewsComponent},// business news
    {path:'form',component:NewsformComponent}, //newsForms
    {path: 'register',component:RegisterformComponent}, // register component
    {path: 'login',component:LoginComponent} ,// login component
    {path: 'logregister',component:LogregisterComponent},
    {path:'log',component:LogComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
