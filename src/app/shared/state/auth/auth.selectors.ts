import {createSelector} from "@ngrx/store";


export const userData = (state: any) => state;
export const userSelector = createSelector(
  userData,
  (userData) => userData
)
