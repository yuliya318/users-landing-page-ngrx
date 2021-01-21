import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as getTokenActions from './store/actions/get-token.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'users-task-ngrx';

  constructor (private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getTokenActions.getToken());
  }
}
