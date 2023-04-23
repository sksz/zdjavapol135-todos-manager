import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  public addTodoItem(todo: Todo): void
  {

  }
}
