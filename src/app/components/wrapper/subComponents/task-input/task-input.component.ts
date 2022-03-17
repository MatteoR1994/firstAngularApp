import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Task } from 'src/app/model/task';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent implements OnInit {

  @ViewChild('newTaskNameValor') newTaskNameValor: ElementRef | undefined;
  @ViewChild('newTaskPriorityValor') newTaskPriorityValor: ElementRef | undefined;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  saveNewTask(): void {
    if (this.newTaskNameValor && this.newTaskPriorityValor) {
      const newTaskName = this.newTaskNameValor.nativeElement.value;
      const newTaskPriority = this.newTaskPriorityValor.nativeElement.value;
      const newTask = new Task('rand', newTaskName, newTaskPriority, new Date().getTime());
      this.api.createNewTask(newTask).subscribe(response => console.log(response));
    }
  }

}
