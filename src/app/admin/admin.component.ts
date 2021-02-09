import { TokenStorageService } from './../token-storage-service';

import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  admins:any
  filterTerm: any;
 
  constructor(private router: Router,
    private adminService: AdminService,private tokenStorageService: TokenStorageService) { }



  ngOnInit(): void {

    if(localStorage.getItem('token') === null )
    {
      alert("Please fill valid information");
      this.router.navigate(['/login']);
    }
  
  let resp = this.adminService.onGet();
  resp.subscribe((data) => this.admins=data);
  }

  onDelete(loanNumber: Number)
  {
    let resp = this.adminService.onDelete(loanNumber);
    resp.subscribe((data) => this.admins=data)
    

  }
  OnLogOut()
  {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  }
 
  