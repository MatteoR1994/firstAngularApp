import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getActiveTask(): Observable<Task[]> {

  }

  getDoneTask(): Observable<Task[]> {

  }

}
