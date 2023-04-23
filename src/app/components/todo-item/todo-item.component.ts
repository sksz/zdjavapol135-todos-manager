import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input()
  public todo!: Todo;

  @Output()
  public change: EventEmitter<Todo> = new EventEmitter();

  public setClass(): string
  {
    return this.todo.completed ? 'completed' : '';
  }

  public onChange(): void
  {
    this.change.emit(this.todo);
  }
}
