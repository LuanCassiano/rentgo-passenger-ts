import { LoginTypes } from './types';
import IAction from '../interfaces/IAction';

export function signInRequest(
    email?: string,
    password?: string,
): IAction<unknown, string> {
    return {
        type: LoginTypes.SIGN_IN_REQUEST,
        payload: { email, password },
    };
}

export function signInSuccess(token: string): IAction<unknown, string> {
    return {
        type: LoginTypes.SIGN_IN_SUCCESS,
        payload: { token },
    };
}

export function signInError(): IAction<void, string> {
    return {
        type: LoginTypes.SIGN_IN_ERROR,
    };
}

export function signOutRequest(): IAction<unknown, void> {
    return {
        type: LoginTypes.SIGN_OUT_REQUEST,
    };
}
