import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Task } from '../model/task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getActiveTask():Observable<Task[]>{
    return this.http.get<any[]>('https://6229de55be12fc4538aa6c8e.mockapi.io/task').pipe(
      map(datas => datas.filter( data => !data.doneDate)),
      map(this.createTask)
    );
  }

  getDoneTask():Observable<Task[]>{
    return this.http.get<any[]>('https://6229de55be12fc4538aa6c8e.mockapi.io/task').pipe(
      map(datas => datas.filter( data => data.doneDate)),
      map(this.createTask)
    );
  }

  createTask(array:any[]):Task[]{
    const tempArray : Task[] =[];
    for (const element of array) {
     if(element.doneDate){
      const newTask = new Task(element.id,element.name,element.priority,element.creationDate);
      newTask.doneDate = new Date(element.doneDate);
      tempArray.push(newTask);
     }
     else{
      const newTask = new Task(element.id,element.name,element.priority,element.creationDate);
      tempArray.push(newTask);
     }
    }
    return tempArray;
  }
}
