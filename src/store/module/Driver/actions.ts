import { DriverTypes } from './types';
import IAction from '../interfaces/IAction';
import IDriver from '../../../interfaces/IDriver';

export function getDriversRequest(): IAction<unknown, string> {
    return {
        type: DriverTypes.GET_DRIVERS_REQUEST,
    };
}

export function getDriversSuccess(data: IDriver): IAction<unknown, string> {
    return {
        type: DriverTypes.GET_DRIVERS_SUCCESS,
        payload: { data },
    };
}
