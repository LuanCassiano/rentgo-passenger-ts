import ITrip from './ITrip';
import IPassenger from './IPassenger';
import IDriver from './IDriver';

export default interface IPassengerTrips {
    id: string;
    passenger: IPassenger;
    trip: ITrip;
    driver?: IDriver;
}
