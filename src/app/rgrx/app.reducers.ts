import { ActionReducerMap } from '@ngrx/store';
import { User } from './model/user.model';
import * as fromUser from './reducer/user.reducer';

export interface AppState {
    user: User;
}

export const appReducers: ActionReducerMap<AppState> = {
     user : fromUser.UserReducer,
};




