import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  taskList: Task[] = [];

  constructor(private api: ApiService) {
    this.api.getActiveTask().subscribe(data => this.taskList=data);
  }

  ngOnInit(): void {
  }

  // taskDone(task: Task) {
  //   this.api.taskDone(task).subscribe(response => console.log(response));
  // }

  taskDone(task: Task) {
    this.api.taskDone(task).subscribe(b => {
      if (!b) {
        prompt('errore nel backend');
      }
    });
  }

}
