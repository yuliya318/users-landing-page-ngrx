import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { Token } from '@shared/interfaces/token.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  getToken(): Observable<string> {
    return this.http.get<Token>(`${environment.apiUrl}/token`)
    .pipe(map((response) => response.token));
  }
}
