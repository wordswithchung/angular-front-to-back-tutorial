import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SandboxComponent } from './components/sandbox/sandbox.component';
import { ManualComponent } from './components/manual/manual.component';

// SERVICES
import { DataService } from './services/data.service';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'user/:id', component: UserDetailsComponent}
];

@NgModule({
  declarations: [ // components go here
    AppComponent,
    SandboxComponent,
    ManualComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    DataService
  ], // services go here
  bootstrap: [AppComponent]
})

export class AppModule { 

}
