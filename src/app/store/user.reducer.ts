// // import the interface

import { Action, createReducer, on } from '@ngrx/store';
import { AddItemAction, UserActionType } from './user.actions';
import { UserItem } from './user.actions';
// //create a dummy initial state

const initialState: Array<UserItem> = [];

const reducer = createReducer(
  initialState,
  on(AddItemAction, (state: any, action: any) => {
     return [...state, action.payload]
  })
);

export function UserReducer(
  state: Array<UserItem> | undefined = initialState,
  action: Action
) {
  return reducer(state, action)
}