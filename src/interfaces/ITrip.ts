/* eslint-disable camelcase */
export default interface ITrip {
    origin: string;
    destination: string;
    travel_date: Date;
    return_date: Date;
    number_passengers: number;
    travel_price: number;
    travel_status: string;
    travel_distance: number;
}
