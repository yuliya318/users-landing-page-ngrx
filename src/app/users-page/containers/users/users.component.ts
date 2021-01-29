import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@shared/interfaces/user.interface';
import { select, Store } from '@ngrx/store';
import * as fromUsers from '@users-page/store';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  public usersList$: Observable<User[]>;
  public pageCounter$: Observable<number>;
  public totalPagesCount$: Observable<number>;
  public isLoading$: Observable<boolean>;

  private usersCount = 9;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initValues();
    this.getUsersList();
  }

  initValues(): void {
    this.usersList$ = this.store.pipe(select(fromUsers.selectUsersList));
    this.pageCounter$ = this.store.pipe(select(fromUsers.selectPageCounter));
    this.totalPagesCount$ = this.store.pipe(select(fromUsers.selectTotalPages));
    this.isLoading$ = this.store.pipe(select(fromUsers.selectIsLoading));
  }

  trackByFn(index, item): number {
    return item.id;
  }

  getUsersList(): void {
    this.store.dispatch(fromUsers.loadUsers({ count: this.usersCount }));
  }

}
