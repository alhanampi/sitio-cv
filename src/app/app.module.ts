import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { PhotosComponent } from './components/photos/photos.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReposComponent } from './components/repos/repos.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: MainComponent },
  { path: "photos", component: PhotosComponent },
  { path: "contact", component: ContactComponent },
  { path: "github", component: ReposComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    MainComponent,
    PhotosComponent,
    ContactComponent,
    ReposComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      routes, { enableTracing: !true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
