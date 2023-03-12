import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todoCollection: Array<Todo> = [];

  public constructor(
    private todoService: TodoService
  ) { }

  public ngOnInit(): void
  {
    this.todoCollection = this.todoService.getTodoCollection();
  }

  public onChange(event: Todo) {
    console.log(event);
  }
}
