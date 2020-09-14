import IDriver from './IDriver';

export default interface IPassengerTrips {
    id?: string;
    origin: string;
    destination: string;
    travel_date: string;
    number_passengers: number;
    travel_price: number;
    travel_status: string;
    travel_distance: number;
    driver?: IDriver;
}
