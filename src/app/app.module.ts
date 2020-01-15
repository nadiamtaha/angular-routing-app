import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {FormsModule} from '@angular/forms'
import { UsersService } from './users.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    GalleryComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    //RouterModule.forRoot(appRoutes)
    AppRoutingModule,
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
