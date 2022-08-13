import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/service/auth.service";
import {select, Store} from "@ngrx/store";
import {login} from "../../shared/state/auth/auth.action";
import {userSelector} from "../../shared/state/auth/auth.selectors";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginForm: any = this.fb.group({});

  constructor(private fb: FormBuilder, private authService: AuthService, private store: Store) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  signIn() {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
  }

}
