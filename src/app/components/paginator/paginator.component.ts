import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input()
  total : Number;

  @Output()
  pageEvent : EventEmitter<Number> = new EventEmitter();
  page : Number;

  constructor() { }

  ngOnInit() {
  }

  changePage(page : Number){
    this.page = page;
    this.pageEvent.emit(this.page);
  }

}
