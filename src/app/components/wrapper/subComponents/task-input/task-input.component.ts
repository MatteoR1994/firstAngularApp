import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Task } from 'src/app/model/task';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent implements OnInit {

  public taskModel = { name: '', priority: 0 };

  // @ViewChild('newTaskNameValor') newTaskNameValor: ElementRef | undefined;
  // @ViewChild('newTaskPriorityValor') newTaskPriorityValor: ElementRef | undefined;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  // saveNewTask(): void {
  //   if (this.newTaskNameValor && this.newTaskPriorityValor) {
  //     const newTaskName = this.newTaskNameValor.nativeElement.value;
  //     const newTaskPriority = this.newTaskPriorityValor.nativeElement.value;
  //     const newTask = new Task('rand', newTaskName, newTaskPriority, new Date().getTime());
  //     this.api.createNewTask(newTask).subscribe(response => console.log(response));
  //   }
  // }

  saveNewTask() {
    const newTask = new Task('', this.taskModel.name, this.taskModel.priority);
    this.api.createNewTask(newTask.toDatabaseModel()).subscribe(b => {
      if (!b) {
        prompt('errore nel beckend');
      }
    })
  }

}
