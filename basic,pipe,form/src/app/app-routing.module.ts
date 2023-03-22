import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipeComponent } from './mycomponents/pipe/pipe.component';
import { BasicsComponent } from './mycomponents/basics/basics.component';
import { NotfoundComponent } from './mycomponents/notfound/notfound.component';
import { FormComponent } from './mycomponents/form/form.component';

const routes: Routes = [
  { component:BasicsComponent, path:'basics' },
  {path:'', redirectTo:'/basics', pathMatch:'full'},
  { component:PipeComponent, path:'pipe' },
  { component:FormComponent, path:'form' },
  { component:NotfoundComponent, path:'**'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
