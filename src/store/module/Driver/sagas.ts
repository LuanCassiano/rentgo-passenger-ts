import { AnyAction } from 'redux';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { DriverTypes } from './types';

import { getDriversSuccess, getDriverFavoritesSuccess } from './actions';
import { IApiResponse } from '../interfaces/IApiResponse';
import IDriver from '../../../interfaces/IDriver';

export function* getDrivers(): unknown {
    try {
        const response = yield call(
            api.get,
            '/api/driver?dist_max=250&page=1&status=available',
        );

        yield put(getDriversSuccess(response.data.drivers));
    } catch (error) {
        console.tron.log('error', error);
    }
}

export function* getFavoriteDrivers({
    payload: { passengerId },
}: AnyAction): Generator {
    try {
        const response = (yield call(api.get, '/api/favoriteDriver', {
            params: {
                passenger_id: passengerId,
            },
        })) as IApiResponse<IDriver[]>;

        yield put(getDriverFavoritesSuccess(response.data.result));
    } catch (error) {
        console.tron.log('error', error.response);
    }
}

export default all([
    takeLatest(DriverTypes.GET_DRIVERS_REQUEST, getDrivers),
    takeLatest(DriverTypes.GET_DRIVERS_FAVORITES_REQUEST, getFavoriteDrivers),
]);
