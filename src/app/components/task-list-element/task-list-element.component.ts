import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-task-list-element',
  templateUrl: './task-list-element.component.html',
  styleUrls: ['./task-list-element.component.scss']
})
export class TaskListElementComponent implements OnInit {

  @Input() task?: Task;

  constructor() {
  }

  ngOnInit(): void {
  }

}
