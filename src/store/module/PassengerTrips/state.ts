import IPassengerTrips from '../../../interfaces/IPassengerTrips';

export interface IPassengerTripReducer {
    readonly data: IPassengerTrips[];
    readonly loading: boolean;
    readonly totalScheduled: string;
    readonly totalFinished: string;
    readonly page: number;
    readonly travelFinished: IPassengerTrips[];
    readonly travelWaitingDriver: IPassengerTrips[];
    readonly travelInProgress: IPassengerTrips[];
    readonly travelCanceled: IPassengerTrips[];
}
