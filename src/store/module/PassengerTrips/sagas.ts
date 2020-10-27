import { AnyAction } from 'redux';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { PassengerTripsTypes } from './types';

import {
    getPassengerTripsSuccess,
    getPassengerTripsFinishedSuccess,
} from './actions';
import { IApiResponse } from '../interfaces/IApiResponse';
import IPassengerTrips from '../../../interfaces/IPassengerTrips';

export function* getPassengerTripsWaitingDriver({
    payload: { page, passenger_id },
}: AnyAction): Generator {
    try {
        const response = (yield call(
            api.get,
            `/api/passenger-trips?page=${page}&status=waiting_driver&passenger=${passenger_id}`,
        )) as IApiResponse<IPassengerTrips>;

        yield put(getPassengerTripsSuccess(response.data.result));
    } catch (error) {
        console.tron.log('erorr', error.response);
        throw new Error('Erro ao buscar viagens');
    }
}

export function* getPassengerTripsFinished({
    payload: { page, passenger_id },
}: AnyAction): Generator {
    try {
        const response = (yield call(
            api.get,
            `/api/passenger-trips?page=${page}&status=finished&passenger=${passenger_id}`,
        )) as IApiResponse<IPassengerTrips>;

        yield put(getPassengerTripsFinishedSuccess(response.data.result));
    } catch (error) {
        throw new Error('Erro ao buscar viagens');
    }
}

export default all([
    takeLatest(
        PassengerTripsTypes.GET_PASSENGER_TRIPS_REQUEST,
        getPassengerTripsWaitingDriver,
    ),
    takeLatest(
        PassengerTripsTypes.GET_PASSENGER_TRIPS_FINISHED_REQUEST,
        getPassengerTripsFinished,
    ),
]);
