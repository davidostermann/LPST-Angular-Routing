import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  constructor() {}

  editing = false;
  @Input() todo: Todo;
  @Output() deleteTodo = new EventEmitter<number>();

  ngOnInit() {}

  delete() {
    this.deleteTodo.emit(this.todo.id);
  }
}
