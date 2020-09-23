/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable indent */
import { produce } from 'immer';
import { PassengerTripsTypes } from './types';
import { IPassengerTripReducer } from './state';

const INITIAL_STATE: IPassengerTripReducer = {
    data: [],
    loading: false,
    page: 0,
    totalFinished: '',
    totalScheduled: '',
    travelFinished: [],
    travelWaitingDriver: [],
    travelInProgress: [],
    travelCanceled: [],
};

export default function passengerTrip(
    state = INITIAL_STATE,
    action: any,
): IPassengerTripReducer {
    return produce(state, (draft) => {
        switch (action.type) {
            case PassengerTripsTypes.GET_PASSENGER_TRIPS_REQUEST: {
                draft.loading = true;
                break;
            }

            case PassengerTripsTypes.GET_PASSENGER_TRIPS_SUCCESS: {
                draft.loading = false;
                draft.page = action.payload.page;
                draft.totalScheduled = action.payload.total;
                draft.travelWaitingDriver = action.payload.data;
                break;
            }

            case PassengerTripsTypes.GET_PASSENGER_TRIPS_FINISHED_REQUEST: {
                draft.loading = true;
                break;
            }

            case PassengerTripsTypes.GET_PASSENGER_TRIPS_FINISHED_SUCCESS: {
                draft.loading = false;
                draft.page = action.payload.page;
                draft.totalFinished = action.payload.total;
                draft.travelFinished = action.payload.data;
                break;
            }

            case PassengerTripsTypes.GET_PASSENGER_TRIPS_IN_PROGRESS_REQUEST: {
                draft.loading = true;
                break;
            }

            case PassengerTripsTypes.GET_PASSENGER_TRIPS_IN_PROGRESS_SUCCESS: {
                draft.loading = false;
                draft.travelInProgress = action.payload.data;
                break;
            }

            case PassengerTripsTypes.GET_PASSENGER_TRIPS_CANCELED_REQUEST: {
                draft.loading = true;
                break;
            }

            case PassengerTripsTypes.GET_PASSENGER_TRIPS_CANCELED_SUCCESS: {
                draft.loading = false;
                draft.travelFinished = action.payload.data;
                break;
            }

            default:
                break;
        }
    });
}
