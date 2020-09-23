import { AnyAction } from 'redux';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { PassengerTripsTypes } from './types';

import {
    getPassengerTripsSuccess,
    getPassengerTripsFinishedSuccess,
    getPassengerTripsInProgressSuccess,
} from './actions';
import { IApiResponse } from '../interfaces/IApiResponse';
import IPassengerTrips from '../../../interfaces/IPassengerTrips';

export function* getPassengerTripsWaitingDriver({
    payload: { page, passenger_id },
}: AnyAction): Generator {
    try {
        const response = (yield call(api.get, '/api/passenger-trips', {
            params: {
                page,
                passenger: passenger_id,
                status: 'waiting_driver',
            },
        })) as IApiResponse<IPassengerTrips[]>;

        yield put(getPassengerTripsSuccess(response.data.result));
    } catch (error) {
        throw new Error('Erro ao buscar viagens');
    }
}

export function* getPassengerTripsFinished({
    payload: { page, passenger_id },
}: AnyAction): Generator {
    try {
        const response = (yield call(api.get, '/api/passenger-trips', {
            params: {
                page,
                passenger: passenger_id,
                status: 'finished',
            },
        })) as IApiResponse<IPassengerTrips[]>;

        yield put(getPassengerTripsFinishedSuccess(response.data.result));
    } catch (error) {
        throw new Error('Erro ao buscar viagens');
    }
}

export function* getPassengerTripsInProgress({
    payload: { page, passenger_id },
}: AnyAction): Generator {
    try {
        const response = (yield call(api.get, '/api/passenger-trips', {
            params: {
                page,
                passenger: passenger_id,
                status: 'in_progress',
            },
        })) as IApiResponse<IPassengerTrips[]>;

        yield put(getPassengerTripsInProgressSuccess(response.data.result));
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
    takeLatest(
        PassengerTripsTypes.GET_PASSENGER_TRIPS_IN_PROGRESS_REQUEST,
        getPassengerTripsInProgress,
    ),
]);
