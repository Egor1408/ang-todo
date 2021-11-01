import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Filter } from '../app.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() uncompletedTask:number
  @Input() filterList: Filter[]
  @Output() changeFilter: EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  filterClick(item: string) {
    this.changeFilter.emit(item)
  }
}
