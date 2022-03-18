import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { ApiService } from 'src/app/services/api.service';
import { Api2Service } from 'src/app/services/api2.service';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss']
})
export class DoneListComponent implements OnInit {

  doneList: Task[] = [];

  constructor(private api: ApiService, private api2: Api2Service) {
    
  }

  ngOnInit(): void {
  }

  taskDeleted(task: Task) {
    this.api.deleteTask(task.id).subscribe(b => {
      if (!b) {
        prompt('errore nel backend');
      }
    });
  }

}
