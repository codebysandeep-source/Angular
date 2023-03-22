import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Form
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeComponent } from './mycomponents/pipe/pipe.component';
import { BasicsComponent } from './mycomponents/basics/basics.component';
import { NotfoundComponent } from './mycomponents/notfound/notfound.component';
import { FormComponent } from './mycomponents/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    BasicsComponent,
    NotfoundComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //Form
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
