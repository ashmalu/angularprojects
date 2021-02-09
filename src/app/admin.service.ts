import { Admin } from 'src/app/models/admin.model';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
}) 
export class AdminService {
 
  constructor(private http:HttpClient) { }
 
 
  onGet(): Observable<Admin> 
  {
      return this.http.get<Admin>("http://localhost:8081/loans/getloan");
  }
  
  onAdd(admin: Admin):Observable<Admin>
  {
    console.log("service");
    
      return this.http.post<Admin>(
        "http://localhost:8081/loans/create"
        ,admin
  );
  }
  
  onDelete(loanNumber: Number):Observable<any>
  {
    return this.http.delete("http://localhost:8081/loans/delete/"+loanNumber);
  }
  onGetAdmin(loanNumber: Number):Observable<any>
  {
    console.log("inservce modify");
    
    return this.http.get("http://localhost:8081/loans/loanByNumber/"+loanNumber);

  }
  modify(admin: Admin):Observable<Admin>{
    console.log("in modifyservice");
    console.log(admin);
    return this.http.put<Admin>("http://localhost:8081/loans/update",admin);
 
  }
  
    
  
}
