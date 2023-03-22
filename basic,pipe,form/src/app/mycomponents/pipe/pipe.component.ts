import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  myText = 'This is a text.';
  todayDate = Date();
  myText1 = "Hello Developers!";
  myList: any[] = [{name:'Sandeep',age:23,address:'Gangtok, Sikkim'}];
}
