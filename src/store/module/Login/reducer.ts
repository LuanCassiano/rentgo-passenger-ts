/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable indent */
import { produce } from 'immer';
import { LoginTypes } from './types';
import { ILoginStateReducer } from './state';

const INITIAL_STATE: ILoginStateReducer = {
    data: {
        email: '',
        password: '',
    },
    loading: false,
    error: false,
    signed: false,
    token: '',
};

export default function login(
    state = INITIAL_STATE,
    action: any,
): ILoginStateReducer {
    return produce(state, (draft) => {
        switch (action.type) {
            case LoginTypes.SIGN_IN_REQUEST: {
                draft.loading = true;
                break;
            }

            case LoginTypes.SIGN_IN_SUCCESS: {
                draft.loading = false;
                draft.signed = true;
                draft.token = action.payload.token;
                break;
            }

            case LoginTypes.SIGN_OUT_REQUEST: {
                draft.token = '';
                draft.signed = false;
                draft.loading = false;
                break;
            }
            default:
                break;
        }
    });
}
