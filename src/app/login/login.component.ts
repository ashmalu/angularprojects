import { Login } from './../models/login.model';
import { Credentials } from './../models/credentials.model';
import { LoginService } from './../login.service';
import { TokenStorageService } from '../token-storage-service';
import { Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  roles:String
  isLoggedIn:boolean;
  form:any={};
  constructor(private router: Router,private tokenStorage:TokenStorageService,private loginService:LoginService) { }

  ngOnInit():void {
   
  }
  
  
  
  logIn(form: NgForm):void {
    console.log("inside lfuntn");
    let name=form.value.uname;
   let pass =form.value.password;
    
   let x =new Credentials(name,pass);
    this.loginService.login(x).subscribe(
       (data:Login) => {
         console.log("inside subs");
         console.log(data);
         localStorage.setItem('token',data.authToken.toString());

         
         if(data.role === 'admin')
         {
          
          this.router.navigate(['/admin']);

         }
         else{
          this.router.navigate(['/user']);
         }
    //   this.tokenStorage.saveToken(data.accessToken);
    //   this.tokenStorage.saveUser(data);
    //   this.roles = this.tokenStorage.getUser().roles;     
       

     }
    );
  }
  
}