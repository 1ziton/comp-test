import { Component, OnInit } from '@angular/core';
import { Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input()
  taskList: any[] = [];

  @Output()
  signClick: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  targetTask: any = {};

  @Output()
  targetTaskChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  _signClick($event) {
    console.log($event)

    this.signClick.emit($event);

    this.targetTaskChange.emit($event);
  }
}
