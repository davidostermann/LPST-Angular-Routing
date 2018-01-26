import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  newTodo = '';

  constructor(public listService: ListService) {}

  ngOnInit() {}

  addTodo() {
    this.listService.addTodo(this.newTodo);
    setTimeout(() => this.newTodo = '', 0);
  }
}
