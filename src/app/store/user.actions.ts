import { Action, createAction, props } from '@ngrx/store';

export interface UserItem {
    fullName: string;
    email: string;
  }

export enum UserActionType {
  ADD_ITEM = '[USER] Add User',
}

// export class AddItemAction implements Action {
//   readonly type = UserActionType.ADD_ITEM;

//   //add an optional payload

//   constructor(public payload: UserItem) {}
// }

// export type UserAction = AddItemAction;



export const AddItemAction = createAction(
  '[USER] Add User',
  props<{payload: UserItem}>()
);