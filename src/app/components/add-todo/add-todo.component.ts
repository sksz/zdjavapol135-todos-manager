import { Component } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  public title: string = '';

  public addTodo(): void
  {
    let todo: Todo;

    todo = new Todo(this.title, false);

    console.log(todo);
  }
}
