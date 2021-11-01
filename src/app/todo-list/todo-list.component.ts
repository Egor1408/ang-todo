import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../app.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todoList: TodoItem[]
  @Output() delId: EventEmitter<number> = new EventEmitter<number>()
  @Output() checkId: EventEmitter<number> = new EventEmitter<number>()

  constructor() {}
  ngOnInit(): void {
    console.log(this.todoList);
    
  }

  transDelId(id: number) {
    this.delId.emit(id)
  }

  transLabelId(id: number) {
    this.checkId.emit(id)
  }
}
