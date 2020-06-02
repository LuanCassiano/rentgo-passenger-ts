import { combineReducers } from 'redux';

import login from './Login/reducer';
import driver from './Driver/reducer';
import passengerTrip from './PassengerTrips/reducer';
import favoriteList from './FavoriteList/reducer';

export const rootReducer = combineReducers({
    login,
    driver,
    passengerTrip,
    favoriteList,
});

export type RootState = ReturnType<typeof rootReducer>;
