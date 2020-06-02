import IPassenger from './IPassenger';
import IDriver from './IDriver';

export default interface IListFavorite {
    id: number;
    passenger_id: number;
    driver_id: number;
    passenger: IPassenger;
    driver: IDriver;
}
