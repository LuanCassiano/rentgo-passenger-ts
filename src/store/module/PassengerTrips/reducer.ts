/* eslint-disable no-param-reassign */
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
                draft.totalScheduled = action.payload.data.total;
                break;
            }

            case PassengerTripsTypes.GET_PASSENGER_TRIPS_FINISHED_REQUEST: {
                draft.loading = true;
                break;
            }

            case PassengerTripsTypes.GET_PASSENGER_TRIPS_FINISHED_SUCCESS: {
                draft.loading = false;
                draft.page = action.payload.page;
                draft.totalFinished = action.payload.data.total;
                break;
            }

            default:
                break;
        }
    });
}
