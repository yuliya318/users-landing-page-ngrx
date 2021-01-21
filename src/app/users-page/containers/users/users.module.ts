import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtitleModule } from '@shared/components/subtitle/subtitle.module';
import { TitleModule } from '@shared/components/title/title.module';
import { UserCardModule } from '@users-page/components/user-card/user-card.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import * as fromUsersList from '@users-page/store/reducers/load-users.reducers';
// import { UsersListEffect } from '@users-page/store/effects/load-users.effects';
import * as fromUsers from '@users-page/store';
import { UsersComponent } from './users.component';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    SubtitleModule,
    TitleModule,
    UserCardModule
  ],
  exports: [UsersComponent]
})
export class UsersModule { }
