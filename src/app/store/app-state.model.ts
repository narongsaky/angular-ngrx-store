import { UserItem } from './user.actions';

export interface AppState {
  readonly user: Array<UserItem>;
}