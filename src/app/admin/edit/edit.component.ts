import { Admin } from 'src/app/models/admin.model';
import { AdminService } from './../../admin.service';
//import { Admin } from './../../models/admin.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PipesModule } from 'pipes-module';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  admin:Admin
 loanNumber: number;

constructor(private router:Router,private route: ActivatedRoute, private adminService: AdminService) { }

ngOnInit(): void {
  const isLoanPresent = this.route.snapshot.paramMap.has('loanNumber');
  if(isLoanPresent)
  { 

     this.loanNumber = +this.route.snapshot.paramMap.get('loanNumber');
     console.log(this.loanNumber);
     
    this.adminService.onGetAdmin(this.loanNumber).subscribe(
      data =>{console.log("mydatat");
      
        console.log(data);
        
        this.admin = data}
    )
  }

}
 onSubmit(form:NgForm)
  {
    var ad= new Admin();
    ad.firstName= form.value.firstName,
    ad.lastName= form.value.lastName,
       ad.loanNumber= form.value.loanNumber,
      // address: form.value.address,
      // loanAmount: form.value.loanAmount,
      // loanType: form.value.loanType,
      // loanTerm:form.value.loanTerm,

  //   ad.loanNumber=1;
  //  ad.loanTerm=17898;

    console.log("inside componnt");
console.log(form.value);

    this.adminService.modify(this.admin).subscribe(
     
      
      data =>{
        console.log('updated  data');
        
        console.log(data);
        
        this.router.navigateByUrl('/admin');  
      }
    )
    console.log("end");
    
  }
  }