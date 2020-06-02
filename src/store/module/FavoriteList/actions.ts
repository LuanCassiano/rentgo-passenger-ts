import { FavoriteListTypes } from './types';
import IAction from '../interfaces/IAction';
import IListFavorite from '../../../interfaces/IListFavorite';

export function getFavoriteListRequest(
    page: number,
    passenger_id: number,
): IAction<unknown, string> {
    return {
        type: FavoriteListTypes.GET_FAVORITE_LIST_REQUEST,
        payload: { page, passenger_id },
    };
}

export function getFavoriteListSuccess(
    data: IListFavorite,
): IAction<unknown, string> {
    return {
        type: FavoriteListTypes.GET_FAVORITE_LIST_SUCCESS,
        payload: { data },
    };
}
