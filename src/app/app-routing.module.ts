import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { MediaComponent } from './pages/media/media.component';
import { MediaDetailsComponent } from './pages/media-details/media-details.component';

//guarding
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['Login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['']);

const routes: Routes = [
  {
    path: 'Login',
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToHome },
  },
 
  {
    path: '',
    component: HomeComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    
  },
  {
    path: 'media',
    component: MediaComponent,
    // children:[
    //   {
    //     path:'s1',
    //     component:MediaDetilsComponent
    //   }
    // ]
  },
  {
    path: 'mediadetails',
    component: MediaDetailsComponent,
    // children:[
    //   {
    //     path:'s1',
    //     component:MediaDetilsComponent
    //   }
    // ]
  },
 
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
