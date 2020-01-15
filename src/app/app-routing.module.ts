import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  //  {path:'',component:HomeComponent},
   {path:'',redirectTo:'/home',pathMatch:'full'},

   {path:'about',component:AboutComponent},
   {path:'contacts',component:ContactsComponent},
   {path:'gallery',component:GalleryComponent},
   {path:"**",component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
