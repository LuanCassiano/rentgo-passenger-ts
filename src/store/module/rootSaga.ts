import { all } from 'redux-saga/effects';

import login from './Login/sagas';
import driver from './Driver/sagas';
import passengerTrip from './PassengerTrips/sagas';
import favoriteList from './FavoriteList/sagas';

export default function* rootSaga(): Generator {
    yield all([login, driver, passengerTrip, favoriteList]);
}
