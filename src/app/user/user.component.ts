import { TokenStorageService } from './../token-storage-service';
import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  filterTerm: any;
  users: any;
  constructor(private router: Router,
    private adminService: UserService,private tokenStorageService: TokenStorageService) { }



  ngOnInit(): void {

    if(localStorage.getItem('token') === null )
    {
      this.router.navigate(['/login']);
    }
  
  let resp = this.adminService.onGet();
  resp.subscribe((data) => this.users=data);
  }

 
  OnLogOut()
  {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
