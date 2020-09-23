/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable indent */
import { produce } from 'immer';
import { DriverTypes } from './types';
import { IDriverStateReducer } from './state';

const INITIAL_STATE: IDriverStateReducer = {
    data: [],
    listFavorites: [],
    loading: false,
    error: false,
};

export default function driver(
    state = INITIAL_STATE,
    action: any,
): IDriverStateReducer {
    return produce(state, (draft) => {
        switch (action.type) {
            case DriverTypes.GET_DRIVERS_REQUEST: {
                draft.loading = true;
                break;
            }

            case DriverTypes.GET_DRIVERS_SUCCESS: {
                draft.loading = false;
                draft.data = action.payload.data.data;
                break;
            }

            case DriverTypes.GET_DRIVERS_FAVORITES_REQUEST: {
                draft.loading = true;
                break;
            }

            case DriverTypes.GET_DRIVERS_FAVORITES_SUCCESS: {
                draft.loading = false;
                draft.listFavorites = action.payload.data;
                break;
            }

            default:
                break;
        }
    });
}
