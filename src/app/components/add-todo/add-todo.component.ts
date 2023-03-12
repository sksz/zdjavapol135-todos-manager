import { Component } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  public title: string = '';

  public constructor(
    private todoService: TodoService
  ) { }

  public addTodo(): void
  {
    let todo: Todo;

    todo = new Todo(this.title, false);

    this.todoService.addTodoItem(todo);
  }
}
