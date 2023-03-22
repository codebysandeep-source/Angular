import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent {
  myColor = 'green';
  myList = [
    {name:'Sandeep Chauhan',address:'SK',age:23},
    {name:'Mukesh Shah',address:'WB',age:22},
    {name:'Jamil Nazeer',address:'UP',age:35}
  ]
}
