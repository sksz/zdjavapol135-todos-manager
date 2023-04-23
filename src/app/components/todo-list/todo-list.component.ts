import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnChanges {
  @Input()
  public newTodo!: Todo;

  public todoCollection: Array<Todo> = [];

  public constructor(
    private todoService: TodoService
  ) { }

  public ngOnInit(): void
  {
    this.todoService.getTodoCollection().subscribe((todos: Todo[]) => {
      this.todoCollection = todos;
    });
  }

  ngOnChanges(changes: SimpleChanges): void
  {
    if (
      changes['newTodo'] &&
      changes['newTodo']?.previousValue != changes['newTodo']?.currentValue
    ) {
      this.todoService.addTodoItem(changes['newTodo']?.currentValue);
      this.todoCollection.push(changes['newTodo']?.currentValue);
    }
  }

  public onChange(event: Todo) {
    console.log(event);
  }
}
