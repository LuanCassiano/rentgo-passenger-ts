import { DriverTypes } from './types';
import IAction from '../interfaces/IAction';
import IDriver from '../../../interfaces/IDriver';

export function getDriversRequest(): IAction<unknown, string> {
    return {
        type: DriverTypes.GET_DRIVERS_REQUEST,
    };
}

export function getDriversSuccess(data: IDriver[]): IAction<unknown, string> {
    return {
        type: DriverTypes.GET_DRIVERS_SUCCESS,
        payload: { data },
    };
}

export function getDriverFavoritesRequest(
    passengerId: number,
): IAction<unknown, string> {
    return {
        type: DriverTypes.GET_DRIVERS_FAVORITES_REQUEST,
        payload: { passengerId },
    };
}

export function getDriverFavoritesSuccess(
    data: IDriver[],
): IAction<unknown, string> {
    return {
        type: DriverTypes.GET_DRIVERS_FAVORITES_SUCCESS,
        payload: { data },
    };
}
