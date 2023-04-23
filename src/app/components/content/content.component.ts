import { Component } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  public newTodo!: Todo;

  public onAdd(todo: Todo):void {
    this.newTodo = todo;
  }
}
