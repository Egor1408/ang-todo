import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../../app.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem:TodoItem
  @Output() transDelId: EventEmitter<number> = new EventEmitter<number>()
  @Output() transLabelId: EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void { 
  }

  delItem(id:number) {
    this.transDelId.emit(id)
  }

  labelClick(id: number) {
    this.transLabelId.emit(id)
  }
}
