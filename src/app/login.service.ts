import { Login } from './models/login.model';
import { Credentials } from './models/credentials.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const Auth_Api = 'http://localhost:8090/auth/';

// const httpOptions={
//   headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
// };

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
 


  login(credentials:Credentials): Observable<Login>{
    console.log("inside login service");
    return this.http.post<Login>(Auth_Api+'login', credentials);
      //uname: credentials.uname,
      //password: credentials.password
    //},httpOptions)
  }
}
