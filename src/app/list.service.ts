import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class ListService {
  static nextId = 0;
  todos: Todo[] = [];

  constructor() {}

  addTodo(text: string) {
    this.todos.push({ id: ListService.nextId++, text });
  }

  // updateTodo(todo: Todo) {
  //   //const index = this.todos.findIndex(t => t.id === todo.id);
  //   //this.todos.splice(index, 1);
  // }

  deleteTodo(id: number) {
   const index = this.todos.findIndex( todo => todo.id === id );
   // const index = this.todos.indexOf(todo);
   this.todos.splice(index, 1);
  }

  private getNextId(arr: Todo[]): number {
    return arr.map(todo => todo.id).sort().pop() + 1;
  }
}
