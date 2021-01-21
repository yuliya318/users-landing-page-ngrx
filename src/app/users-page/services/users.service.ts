import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '@environments/environment';
import { UsersResponse } from '@users-page/interfaces/users-response.interface';
import { map } from 'rxjs/operators';
import { User } from '@shared/interfaces/user.interface';
import { Position } from '@users-page/interfaces/position.interface';
import { PositionsResponse } from '@users-page/interfaces/positions-response.interface';
import { RegisterRequest } from '@users-page/interfaces/register-request.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private clearFormSource = new Subject<boolean>();
  clearForm$ = this.clearFormSource.asObservable();
  
  constructor(private http: HttpClient) {}

  getUsersList(page: number, count: number): Observable<UsersResponse> {
    return this.http
      .get(`${environment.apiUrl}/users?page=${page}&count=${count}`)
      .pipe(map((response: UsersResponse) => response));
  }

  getPositionsList(): Observable<Position[]> {
    return this.http
      .get<PositionsResponse>(`${environment.apiUrl}/positions`)
      .pipe(map((data) => data.positions));
  }

  createUser(userData: RegisterRequest): Observable<any> {
    return this.http.post<RegisterRequest>(
      `${environment.apiUrl}/users`,
      this.createUserformData(userData)
    );
  }

  private createUserformData(userData: RegisterRequest): FormData {
    const formData = new FormData();
    Object.keys(userData).forEach((key: string) => formData.append(key, userData[key]));
    return formData;
  }

  clearForm() {
    this.clearFormSource.next(true);
  }
}
