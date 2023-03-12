import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoCollection: Array<Todo> = [
    new Todo('Pierwsze zadanie', false),
    new Todo('Drugie zadanie', false),
    new Todo('Trzecie zadanie', true),
  ];

  public getTodoCollection(): Array<Todo>
  {
    return this.todoCollection;
  }

  public addTodoItem(todo: Todo): void
  {
    this.todoCollection.push(todo);
  }
}
