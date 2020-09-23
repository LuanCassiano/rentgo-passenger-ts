import { PassengerTripsTypes } from './types';
import IAction from '../interfaces/IAction';
import IPassengerTrips from '../../../interfaces/IPassengerTrips';

interface IGetPassengerTripsRequest {
    page: number;
    passenger_id: number;
}

export function getPassengerTripsRequest({
    page,
    passenger_id,
}: IGetPassengerTripsRequest): IAction<IGetPassengerTripsRequest> {
    return {
        type: PassengerTripsTypes.GET_PASSENGER_TRIPS_REQUEST,
        payload: { page, passenger_id },
    };
}

export function getPassengerTripsSuccess(
    data: IPassengerTrips[],
): IAction<IPassengerTrips[]> {
    return {
        type: PassengerTripsTypes.GET_PASSENGER_TRIPS_SUCCESS,
        payload: data,
    };
}

export function getPassengerTripsFinishedRequest({
    page,
    passenger_id,
}: IGetPassengerTripsRequest): IAction<IGetPassengerTripsRequest> {
    return {
        type: PassengerTripsTypes.GET_PASSENGER_TRIPS_FINISHED_REQUEST,
        payload: { page, passenger_id },
    };
}

export function getPassengerTripsFinishedSuccess(
    data: IPassengerTrips[],
): IAction<IPassengerTrips[]> {
    return {
        type: PassengerTripsTypes.GET_PASSENGER_TRIPS_FINISHED_SUCCESS,
        payload: data,
    };
}

export function getPassengerTripsInProgressRequest({
    page,
    passenger_id,
}: IGetPassengerTripsRequest): IAction<IGetPassengerTripsRequest> {
    return {
        type: PassengerTripsTypes.GET_PASSENGER_TRIPS_IN_PROGRESS_REQUEST,
        payload: { page, passenger_id },
    };
}

export function getPassengerTripsInProgressSuccess(
    data: IPassengerTrips[],
): IAction<IPassengerTrips[]> {
    return {
        type: PassengerTripsTypes.GET_PASSENGER_TRIPS_IN_PROGRESS_SUCCESS,
        payload: data,
    };
}

export function getPassengerTripsCanceledRequest({
    page,
    passenger_id,
}: IGetPassengerTripsRequest): IAction<IGetPassengerTripsRequest> {
    return {
        type: PassengerTripsTypes.GET_PASSENGER_TRIPS_CANCELED_REQUEST,
        payload: { page, passenger_id },
    };
}

export function getPassengerTripsCanceledSuccess(
    data: IPassengerTrips[],
): IAction<IPassengerTrips[]> {
    return {
        type: PassengerTripsTypes.GET_PASSENGER_TRIPS_CANCELED_SUCCESS,
        payload: data,
    };
}
