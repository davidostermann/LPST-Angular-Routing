import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public listService: ListService) {}

  ngOnInit() {}

  // updateTodo(todo: Todo) {
  //   this.listService.updateTodo(todo);
  // }

  deleteTodo(id: number) {
    this.listService.deleteTodo(id);
  }
}
