import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss']
})
export class DoneListComponent implements OnInit {

  doneList: Task[] = [];

  constructor(private api: ApiService) {
    this.api.getDoneTask().subscribe(data => this.doneList=data);
  }

  ngOnInit(): void {
  }

  taskDeleted(task: Task) {
    this.api.deleteTask(task.id).subscribe(response => console.log(response));
  }

}
