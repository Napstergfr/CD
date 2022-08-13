import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Store} from "@ngrx/store";
import {login} from "../state/auth/auth.action";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth : AngularFireAuth, private store: Store) { }
  login(email : string, password : string) {
    return this.fireAuth.signInWithEmailAndPassword(email,password).then( (res: any) => {
      this.store.dispatch(login({
        accessToken: res.user._delegate.accessToken,
        email: res.user._delegate.email,
        uid: res.user._delegate.uid
      }));
    }, err => {
      console.log(err.message);
    });
  }

  register(email : string, password : string) {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then( res => {
      console.log(res)
    }, err => {
      console.log(err.message);
    })
  }
  logout() {
    this.fireAuth.signOut().then( () => {
      localStorage.removeItem('token');
    }, err => {
      console.log(err.message)
    })
  }

}
