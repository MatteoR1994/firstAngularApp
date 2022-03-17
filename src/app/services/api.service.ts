import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, filter, first, map, Observable, of } from 'rxjs';
import { Task } from '../model/task';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly API_URL = 'https://6229de55be12fc4538aa6c8e.mockapi.io/task';

  public allTasks$ = new BehaviorSubject<Task[]>([]);

  constructor(private http: HttpClient) { 
    this.getAllTasks();
  }

  getAllTasks(): void { // GET, per tutti.
    this.http.get<any[]>(this.API_URL).pipe(
      map(taskObjArray => this.createTask(taskObjArray))
    ).subscribe(task => this.allTasks$.next(task));
  }

  getActiveTask(): Observable<Task[]> {
    return this.allTasks$.pipe(
      map(allTask => allTask.filter(task => !task.doneDate))
    );
  }

  getDoneTask(): Observable<Task[]> {
    return this.allTasks$.pipe(
      map(allTask => allTask.filter(task => task.doneDate))
    );
  }

  getSingleTask(taskId: string): Observable<Task | undefined> { // GET con id, per il singolo.
    return this.allTasks$.pipe(
      map(taskArray => taskArray.find(task => task.id === taskId))
    );
  }

  createNewTask(task: Task): Observable<boolean> { // POST
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Task>(this.API_URL, task, httpOptions).pipe(
      map(task => {
        this.getAllTasks();
        return true;
      }),
      catchError(error => of(false))
    );
  } 

  deleteTask(taskId: string): Observable<boolean> { // DELETE
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.delete<any>(this.API_URL + '/' + taskId, httpOptions).pipe(
      map(response => {
        this.getAllTasks();
        return true;
      }),
      catchError(error => of(false))
    );
  } 

  taskDone(task: Task): Observable<boolean> { // PUT per spostare un task tra i fatti.
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    task.doneDate = new Date();
    return this.http.put<Task>(this.API_URL + '/' + task.id, httpOptions).pipe(
      map(task => {
        this.getAllTasks();
        return true;
      }),
      catchError(error => of(false))
    );
  }

  // getActiveTask():Observable<Task[]>{
  //   return this.http.get<any[]>(this.API_URL).pipe(
  //     map(datas => datas.filter( data => !data.doneDate)),
  //     map(this.createTask)
  //   );
  // }

  // getDoneTask():Observable<Task[]>{
  //   return this.http.get<any[]>(this.API_URL).pipe(
  //     map(datas => datas.filter( data => data.doneDate)),
  //     map(this.createTask)
  //   );
  // }

  createTask(array:any[]): Task[] {
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
