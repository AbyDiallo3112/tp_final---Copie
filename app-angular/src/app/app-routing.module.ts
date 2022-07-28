import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { ViewNoteComponent } from './note/view-note/view-note.component';

const routes: Routes = [
  {path:'',redirectTo:'/acceuil',pathMatch:'full'},
  {path:'acceuil',component:ViewNoteComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'inscription',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
