import {createReducer, on} from '@ngrx/store';
import * as AuthActions from '../auth/auth.action';

export interface User {
  accessToken: any, email: any, uid: any
}

export const initialState: User = {
  accessToken: '', email: '', uid: ''
};
export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, state => ({...state, userState: 'LoggedIn'})),
);
