import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { environment } from '@environments/environment';

import { AppComponent } from './app.component';
import { HeaderModule } from '@shared/components/header/header.module';
import { FooterModule } from '@shared/components/footer/footer.module';
import { UsersPageModule } from '@users-page/users-page.module';

import * as fromToken from '@app/store/reducers/get-token.reducers';
import { GetTokenEffect } from '@app/store/effects/get-token.effects';
import { PersistanceService } from '@shared/services/persistence.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    FooterModule,
    UsersPageModule,
    StoreModule.forRoot({ token: fromToken.reducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([GetTokenEffect]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor,
    },
    PersistanceService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
