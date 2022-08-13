import {createAction, props} from '@ngrx/store';

export const login = createAction(
  '[Login Page] Login',
  props<{ accessToken: any, email: any, uid: any }>()
);
