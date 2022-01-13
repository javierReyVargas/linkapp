import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateWithDashboard } from '../../store/reducers';

@Component({
  selector: 'list-url',
  templateUrl: './list-url.component.html',
  styleUrls: ['./list-url.component.sass']
})
export class ListUrlComponent implements OnInit {

  @Input() dataLink?: any;
  @Output() deleteLink = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  delete(id: string) {
    this.deleteLink.emit(id);
  }

}
