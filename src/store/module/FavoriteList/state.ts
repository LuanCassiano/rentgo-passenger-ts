import IListFavorite from 'src/interfaces/IListFavorite';

export interface IFavoriteListReducer {
    readonly data: IListFavorite[];
    readonly total: string;
    readonly page: number;
    readonly loading: boolean;
}
