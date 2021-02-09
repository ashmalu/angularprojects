import { Observable } from 'rxjs';
import { Admin } from './models/admin.model';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }
 
 
  onGet(): Observable<User> 
  {
      return this.http.get<User>("http://localhost:8081/loans/getloan");
  }
}