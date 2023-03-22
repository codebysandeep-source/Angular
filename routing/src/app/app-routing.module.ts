import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  { component:LoginComponent, path:'login' },
  { component:ForgetPasswordComponent, path:'forget-password' },
  { path:'', redirectTo:'/login', pathMatch:'full' },
  //dashboard path and import dashboard module
  { path:'admin',
  loadChildren: () => import('./modules/admin/admin.module').then((m)=> m.AdminModule)
  },
  // 404 page
{ component:NotFoundComponent, path:'**' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
