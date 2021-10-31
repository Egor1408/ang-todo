import { Component, ViewEncapsulation } from '@angular/core';

export interface TodoItem {
  id: number,
  desc: string,
  checked: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  uncompletedTask = 0

  todoList: TodoItem[] = [
    {id: 1, desc: 'todo 1', checked: false},
    {id: 2, desc: 'todo 2', checked: false},
    {id: 3, desc: 'todo 3', checked: false}
  ];

  ngOnInit(): void {
    this.checkCompleted()
  }

  updateList(todo: TodoItem) {
    console.log(todo);
    this.todoList.unshift(todo)
  }

  delId(id:number) {
    this.todoList = this.todoList.filter(item => item.id !== id)
  }
  checkCompleted() {
    this.uncompletedTask = 0
    this.todoList.map(item => {
      if(!item.checked) {
        this.uncompletedTask++
      }
    })
  }

  checkId(id:number) {
    this.todoList.map(item => {
      if(item.id === id) {
        item.checked = !item.checked
      }
    })    
    this.checkCompleted()
  }
}
