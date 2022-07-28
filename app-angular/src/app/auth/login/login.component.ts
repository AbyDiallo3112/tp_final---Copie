import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,OnDestroy {
  hide = true;
  formGroup=new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
  });

  sub=new Subscription;

  constructor(
    private authService:AuthService
  ) { }
  ngOnDestroy(): void {
    if(!this.sub.closed){
      this.sub.unsubscribe();
    }
  }

  ngOnInit(): void {
  }


  onSubmit(){
    if(!this.formGroup.valid){
      return ;
    }
    if(this.formGroup.value.email && this.formGroup.value.password){
      this.sub=this.authService.login(this.formGroup.value.email,this.formGroup.value.password).subscribe((resultat)=>{
        console.log(resultat);
        
      },err=>{
        console.error(err);
        
      })
    }
    
  }

}
