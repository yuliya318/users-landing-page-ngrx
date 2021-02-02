import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtitleModule } from '@shared/components/subtitle/subtitle.module';
import { TitleModule } from '@shared/components/title/title.module';
import { UserCardModule } from '@users-page/components/user-card/user-card.module';
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
