// import { AnyAction } from 'redux';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { DriverTypes } from './types';

import { getDriversSuccess } from './actions';

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

export default all([takeLatest(DriverTypes.GET_DRIVERS_REQUEST, getDrivers)]);
