import { ActionReducerMap } from '@ngrx/store';
import { User } from './model/user.model';
import * as fromUser from './reducer/user.reducer';
import * as fromLoading from './reducer/loading.reducer';

export interface AppState {
    user: User;
    loading: boolean;
}

export const appReducers: ActionReducerMap<AppState> = {
     user : fromUser.UserReducer,
     loading : fromLoading.LoadingReducer,
};




