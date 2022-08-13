import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../shared/service/auth.service";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: any = this.fb.group({});
  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }
  signUp(){
    this.authService.register(this.signUpForm.value.email, this.signUpForm.value.password);
    /*this.store.select('user').subscribe(res=>{
      console.log(res)
    })*/
  }
}
