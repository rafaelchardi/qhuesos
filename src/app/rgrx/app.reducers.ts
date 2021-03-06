import { ActionReducerMap } from '@ngrx/store';
import { User } from './model/user.model';
import { BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';


import * as fromUser from './reducer/user.reducer';
import * as fromLoading from './reducer/loading.reducer';
import * as fromlocalizacion from './reducer/localizacion.reducer';



export interface AppState {
    user: User;
    loading: boolean;
    localizacion: BackgroundGeolocationResponse;
}

export const appReducers: ActionReducerMap<AppState> = {
     user : fromUser.UserReducer,
     loading : fromLoading.LoadingReducer,
     localizacion: fromlocalizacion.LoadingReducer,
};




