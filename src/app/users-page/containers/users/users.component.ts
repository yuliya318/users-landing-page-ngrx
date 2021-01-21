import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@shared/interfaces/user.interface';
import { select, Store } from '@ngrx/store';
// import * as UsersListSelectors from '@users-page/store/selectors/load-users.selectors';
// import * as LoadUsersActions from '@users-page/store/actions/load-users.actions';
import * as fromUsers from '@users-page/store';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  public usersList$: Observable<User[]>;
  public totalPagesCount$: Observable<number>;
  public isLoading$: Observable<boolean>;

  public pageCounter = 0;
  private usersCount = 9;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initValues();
    this.getUsersList();
  }

  initValues(): void {
    this.usersList$ = this.store.pipe(select(fromUsers.selectUsersList));
    this.totalPagesCount$ = this.store.pipe(select(fromUsers.selectTotalPages));
    this.isLoading$ = this.store.pipe(select(fromUsers.selectIsLoading));
  }

  trackByFn(index, item): number {
    return item.id;
  }

  getUsersList(): void {
    this.pageCounter++;
    this.store.dispatch(fromUsers.loadUsers({ page: this.pageCounter, count: this.usersCount }));
  }

}
