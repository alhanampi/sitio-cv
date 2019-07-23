import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { PhotosComponent } from './components/photos/photos.component';
import { ContactComponent } from './components/contact/contact.component';

const routes:Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: MainComponent},
  {path: "photos", component:  PhotosComponent},
  {path: "contact", component: ContactComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    MainComponent,
    PhotosComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes, {enableTracing: !true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
