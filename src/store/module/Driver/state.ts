import IDriver from '../../../interfaces/IDriver';

export interface IDriverStateReducer {
    readonly data: IDriver[];
    readonly listFavorites: IDriver[];
    readonly loading: boolean;
    readonly error: boolean;
}
