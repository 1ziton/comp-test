import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  taskData: any[] = [
    {id:'123123123',name:'ggggg'},
    {id:'22222222222',name:'shdfksdh'},
    {id:'333333333',name:'撒大声地'},
    {id:'44444444444',name:'vvddddd'},
  ];
}
