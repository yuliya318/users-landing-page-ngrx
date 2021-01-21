import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersistanceService } from '@shared/services/persistence.service';
// import { select, Store } from '@ngrx/store';
// import * as fromToken from '@app/store/selectors/get-token.selectors';
// import { map, tap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    // private store: Store,
    private persistenceService: PersistanceService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.persistenceService.get('accessToken');
    request = request.clone({
      setHeaders: {
        Token: token ? token : '',
      },
    });

    return next.handle(request);
  }

  // getToken(): string {
  //   // this.store.pipe(select(fromToken.selectToken)).subscribe((token) => this.token = token);
  //   // this.store.pipe(select(fromToken.selectToken), tap((token) => this.token = token));
  //   return this.token;
  // }
}

