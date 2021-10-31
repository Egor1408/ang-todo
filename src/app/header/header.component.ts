import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  inputValue:string = '';
  initialId:number = 100500;

  @Output() newTodo: EventEmitter<TodoItem> = new EventEmitter<TodoItem>()

  constructor() { }

  ngOnInit(): void {
  }

  addTodo() {
    if (this.inputValue.trim()) {
      const todo: TodoItem = {
        id: this.initialId,
        desc: this.inputValue,
        checked: false
      }     

      this.newTodo.emit(todo)

      this.inputValue = ''
      this.initialId ++
    }
  }
}
