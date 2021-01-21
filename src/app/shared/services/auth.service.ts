import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { Token } from '@shared/interfaces/token.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private token = '';

  constructor(private http: HttpClient) {}

  // loadToken(): Observable<any> {
  //   return this.http.get<any>(`${environment.apiUrl}/token`).pipe(
  //     tap(({ token }) => this.setToken(token))
  //   );
  // }

  // setToken(token: string): void {
  //   this.token = token;
  // }

  // getToken(): string {
  //   return this.token;
  // }

  getToken(): Observable<string> {
    return this.http.get<Token>(`${environment.apiUrl}/token`)
    .pipe(map((response) => response.token));
  }
}
