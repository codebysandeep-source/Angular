import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  userList: any[] = [];
  loginUser(item:any){
    // console.log(item);
    this.userList.push(item);
  }

}
