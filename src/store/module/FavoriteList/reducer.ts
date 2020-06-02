/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable indent */
import { produce } from 'immer';
import { FavoriteListTypes } from './types';
import { IFavoriteListReducer } from './state';

const INITIAL_STATE: IFavoriteListReducer = {
    data: [
        {
            id: 0,
            driver_id: 0,
            passenger_id: 0,
            passenger: {
                fullname: '',
                profile_image: '',
            },
            driver: {
                fullname: '',
                profile_image: '',
            },
        },
    ],
    loading: false,
    page: 0,
    total: '',
};

export default function favoriteList(
    state = INITIAL_STATE,
    action: any,
): IFavoriteListReducer {
    return produce(state, (draft) => {
        switch (action.type) {
            case FavoriteListTypes.GET_FAVORITE_LIST_REQUEST: {
                draft.loading = true;
                break;
            }

            case FavoriteListTypes.GET_FAVORITE_LIST_SUCCESS: {
                draft.loading = false;
                draft.data = action.payload.data.data;
                draft.page = action.payload.data.page;
                draft.total = action.payload.data.total;
                break;
            }

            default:
                break;
        }
    });
}
