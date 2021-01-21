import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent } from './containers/users-page/users-page.component';
import { BannerModule } from '@users-page/components/banner/banner.module';
import { AboutMeModule } from '@users-page/components/about-me/about-me.module';
import { UsersModule } from '@users-page/containers/users/users.module';
import { RegisterFormModule } from './containers/register-form/register-form.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUsers from '@users-page/store';

@NgModule({
  declarations: [UsersPageComponent],
  imports: [
    CommonModule,
    BannerModule,
    AboutMeModule,
    UsersModule,
    RegisterFormModule,
    StoreModule.forFeature(fromUsers.usersFeatureKey, fromUsers.reducers),
    EffectsModule.forFeature([
      fromUsers.UsersListEffect,
      fromUsers.PositionsListEffect,
      fromUsers.RegisterUserEffect,
    ]),
  ],
  exports: [UsersPageComponent],
})
export class UsersPageModule {}
