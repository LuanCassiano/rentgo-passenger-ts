import { combineReducers } from 'redux';

import login from './Login/reducer';
import driver from './Driver/reducer';
import passengerTrip from './PassengerTrips/reducer';

export const rootReducer = combineReducers({
    login,
    driver,
    passengerTrip,
});

export type RootState = ReturnType<typeof rootReducer>;
