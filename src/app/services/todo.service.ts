import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url: string = 'http://localhost:3000/todos';
  private limit: string = '?_limit=15';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  public getTodoCollection(): Observable<Todo[]>
  {
    return this.httpClient.get<Todo[]>(`${this.url}${this.limit}`);
  }

  public addTodoItem(todo: Todo): Observable<Todo>
  {
    return this.httpClient.post<Todo>(`${this.url}`, todo, HEADERS);
  }

  public updateTodoItem(todo: Todo): Observable<Todo>
  {
    console.log(`${this.url}/${todo.id}`);
    return this.httpClient.put<Todo>(`${this.url}/${todo.id}`, todo, HEADERS);
  }

  public deleteTodoItem(todo: Todo): Observable<Todo>
  {
    return this.httpClient.delete<Todo>(`${this.url}/${todo.id}`, HEADERS);
  }
}
