import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, filter, first, map, Observable, of } from 'rxjs';
import { Task } from '../model/task';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Api2Service {

  private readonly API_URL = 'https://62334515a3d0e4ac0bde7bd0.mockapi.io/task';

  public activeTasks$ = new BehaviorSubject<Task[]>([]);
  public doneTasks$ = new BehaviorSubject<Task[]>([]);

  constructor(private http: HttpClient) { 
    this.getActiveTask();
    this.getDoneTask();
  }

  getActiveTask() {
    return this.http.get<any[]>(this.API_URL + '?doneDate=Undefined').pipe(
      //map(tasks => tasks.filter(t => t.doneDate === undefined)),
      map(tasks => this.createTaskArray(tasks))
    ).subscribe(tasks => console.log('SERVICE: active', tasks));
  }

  getDoneTask() {
    return this.http.get<any[]>(this.API_URL).pipe(
      map(tasks => tasks.filter(t => t.doneDate !== undefined)),
      map(tasks => this.createTaskArray(tasks))
    ).subscribe(tasks => console.log('SERVICE: done', tasks));
  }

  getSingleTask(taskId: string): Observable<Task | undefined> { // GET con id, per il singolo.
    return this.http.get<any>(this.API_URL + '/' + taskId).pipe(
      
    )
  }

  createNewTask(task: Task): Observable<Task> { // POST
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Task>(this.API_URL, task, httpOptions);
  } 

  deleteTask(taskId: string): Observable<any> { // DELETE
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.delete<any>(this.API_URL + '/' + taskId, httpOptions);
  } 

  completeDone(task: Task): Observable<Task> { // PUT per spostare un task tra i fatti.
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    task.doneDate = new Date();
    return this.http.put<Task>(this.API_URL + '/' + task.id, task.toDatabaseModel(), httpOptions);
  }

  createTaskArray(array:any[]): Task[] {
    const tempArray : Task[] = [];
    for (const element of array) {
     if (element.doneDate) {
      const newTask = new Task(element.id,element.name,element.priority,element.creationDate);
      newTask.doneDate = new Date(element.doneDate);
      tempArray.push(newTask);
     }
     else {
      const newTask = new Task(element.id,element.name,element.priority,element.creationDate);
      tempArray.push(newTask);
     }
    }
    return tempArray;
  }
}
