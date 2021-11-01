import { Component, ViewEncapsulation } from '@angular/core';

export interface TodoItem {
  id: number,
  desc: string,
  checked: boolean
}
export interface Filter {
  name: string,
  active: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent {
  uncompletedTask = 0
  activeFilter = "all"
  filterList: Filter[] = [
    {name: 'all', active: true},
    {name: 'checked', active: false},
    {name: 'unchecked', active: false}
  ]

  todoList: TodoItem[] = [
    {id: 1, desc: 'todo 1', checked: false},
    {id: 2, desc: 'todo 2', checked: false},
    {id: 3, desc: 'todo 3', checked: false}
  ];
  viewList: TodoItem[] = []

  ngOnInit(): void {
    this.checkCompleted()
    this.checkViewList()
  }

  updateList(todo: TodoItem) {
    console.log(todo);
    this.todoList.unshift(todo)
    this.checkCompleted()
    this.checkViewList()
  }

  delId(id:number) {
    this.todoList = this.todoList.filter(item => item.id !== id)
    this.checkCompleted()
    this.checkViewList()
  }
  checkCompleted() {
    this.uncompletedTask = 0
    this.todoList.map(item => {
      if(!item.checked) {
        this.uncompletedTask++
      }
    })
  }

  checkViewList() {  
    console.log(this.activeFilter);
     
    if (this.activeFilter === 'checked') {
      this.viewList = this.todoList.filter(item => item.checked === true)
    } else if (this.activeFilter === 'unchecked') {
      this.viewList = this.todoList.filter(item => item.checked === false)
    } else {
      this.viewList = this.todoList
    }
  }

  checkId(id:number) {
    this.todoList.map(item => {
      if(item.id === id) {
        item.checked = !item.checked
      }
    })    
    this.checkCompleted()
    this.checkViewList()
  }

  changeFilter(filter: string) {
    this.activeFilter = filter
    
    this.filterList.map(item => {
      if (item.name === filter) {
        item.active = true
      } else {
        item.active = false
      }   
    })
    this.checkViewList()
  }
}
