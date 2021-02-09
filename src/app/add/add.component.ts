import { AdminService } from './../admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Admin } from 'src/app/models/admin.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  admin:Admin = new Admin();
  //loanNumber: number; 
  //header: string;
  //admins: any;
  // admins: Admin ={
  //   firstName:'',
  //   lastName:'',
  //   loanNumber:0,
  //   address:'',
  //   loanAmount:0,
  //   loanType:'',
  //   loanTerm:0

  // };
  constructor(private router:Router, private adminService: AdminService) { }

  ngOnInit(): void {
    //  this.loanNumber = +this.route.snapshot.paramMap.get('loanNumber');
    //  this.header = this.loanNumber === 0?'Add User': 'Edit User';

    // if(this.loanNumber != 0)
    // {
    //   this.admin = this.adminService.onGetAdmin(this.loanNumber);
    // }

  }


 
 //public onSubmit(form: NgForm)
onSubmit()
  {
    var ad= new Admin();
    //ad.loanNumber=11;
   
    

    console.log("inside componnt");

    this.adminService.onAdd(this.admin).subscribe(
     
      
      data =>{
        console.log('respon  data');
        
        console.log(data);
        
        this.router.navigateByUrl('/admin');  
      }
    )
  }
}

    //  console.log(form.value);
    // let admin: Admin = {
    //   firstName: form.value.firstName,
    //   lastName: form.value.lastName,
    //   loanNumber: form.value.loanNumber,
    //   address: form.value.address,
    //   loanAmount: form.value.loanAmount,
    //   loanType: form.value.loanType,
    //   loanTerm:form.value.loanTerm,

    //}
   // console.log(admin);
      //  let resp=this.adminService.onAdd(this.admins).subscribe(
      //    (data:Admin) => {
      //      console.log("inside admin");
           
      //    }
      //  )
      // resp.subscribe((data) => {
      //   console.log(data)
      // })
      
      //   this.router.navigateByUrl('/admin');
        
      // }
     // this.router.navigateByUrl('/admin');
  
  //console.log("done");
  
    
   // }
  //}