import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { AboutComponent } from './components/about/about.component';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { TitleComponent } from './components/title/title.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    AboutComponent,
    ContentComponent,
    AddTodoComponent,
    TodoListComponent,
    TodoItemComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
