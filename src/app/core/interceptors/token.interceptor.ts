import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersistanceService } from '@shared/services/persistence.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private persistenceService: PersistanceService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.persistenceService.get('accessToken');
    request = request.clone({
      setHeaders: {
        Token: token ? token : '',
      },
    });

    return next.handle(request);
  }
}
