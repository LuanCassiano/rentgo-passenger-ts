import { AnyAction } from 'redux';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../../services/api';
import { LoginTypes } from './types';

import { signInSuccess } from './actions';

function* getPassenger(): unknown {
    try {
        const response = yield call(api.get, '/api/passenger-auth');

        yield call(
            [AsyncStorage, 'setItem'],
            'RentGoUser',
            JSON.stringify(response.data.result[0]),
        );
    } catch (error) {
        throw new Error('Erro ao obter o passageiro autenticado');
    }
}

export function* init(): unknown {
    const token = yield call([AsyncStorage, 'getItem'], 'RentGoToken');

    if (token) {
        yield put(signInSuccess(token));
    }
}

export function* signIn({ payload: { email, password } }: AnyAction): unknown {
    try {
        const response = yield call(api.post, '/api/authentication', {
            email,
            password,
        });

        yield call(
            [AsyncStorage, 'setItem'],
            'RentGoToken',
            response.data.token,
        );

        yield getPassenger();
    } catch (error) {
        throw new Error('Erro ao tentar fazer login');
    }
}

export default all([init(), takeLatest(LoginTypes.SIGN_IN_REQUEST, signIn)]);
