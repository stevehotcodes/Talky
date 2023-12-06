import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { MyPostsComponent } from './components/my-posts/my-posts.component';
import { TalkiesComponent } from './components/talkies/talkies.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'reset',component:ResetPasswordComponent},
  {path:'all',component:AllPostsComponent},
  {path:'myposts',component:MyPostsComponent},
  {path:'talkies',component:TalkiesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
