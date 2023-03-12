import { Component } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  public todoCollection: Array<Todo> = [
    new Todo('Pierwsze zadanie', false),
    new Todo('Drugie zadanie', false),
    new Todo('Trzecie zadanie', true),
  ];

}
