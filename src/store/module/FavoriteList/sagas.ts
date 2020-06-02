import { AnyAction } from 'redux';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { FavoriteListTypes } from './types';

import { getFavoriteListSuccess } from './actions';

export function* getFavoriteList({
    payload: { page, passenger_id },
}: AnyAction): unknown {
    try {
        const response = yield call(
            api.get,
            `/api/favoriteDriver?page=${page}&passenger_id=${passenger_id}`,
        );

        yield put(getFavoriteListSuccess(response.data.result));
    } catch (error) {
        throw new Error('erro ao buscar lista de favoritos');
    }
}

export default all([
    takeLatest(FavoriteListTypes.GET_FAVORITE_LIST_REQUEST, getFavoriteList),
]);
