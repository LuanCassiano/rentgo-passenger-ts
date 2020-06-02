/* eslint-disable camelcase */
import { PassengerTripsTypes } from './types';
import IAction from '../interfaces/IAction';
import IPassengerTrips from '../../../interfaces/IPassengerTrips';

export function getPassengerTripsRequest(
    page: number,
    passenger_id: number,
): IAction<unknown, string> {
    return {
        type: PassengerTripsTypes.GET_PASSENGER_TRIPS_REQUEST,
        payload: { page, passenger_id },
    };
}

export function getPassengerTripsSuccess(
    data: IPassengerTrips,
): IAction<unknown, string> {
    return {
        type: PassengerTripsTypes.GET_PASSENGER_TRIPS_SUCCESS,
        payload: { data },
    };
}

export function getPassengerTripsFinishedRequest(
    page: number,
    passenger_id: number,
): IAction<unknown, string> {
    return {
        type: PassengerTripsTypes.GET_PASSENGER_TRIPS_FINISHED_REQUEST,
        payload: { page, passenger_id },
    };
}

export function getPassengerTripsFinishedSuccess(
    data: IPassengerTrips,
): IAction<unknown, string> {
    return {
        type: PassengerTripsTypes.GET_PASSENGER_TRIPS_FINISHED_SUCCESS,
        payload: { data },
    };
}
