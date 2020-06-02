/* eslint-disable camelcase */
import ITrip from './ITrip';

export default interface IDriver {
    id?: number;
    fullname?: string;
    mobile_phone?: string;
    profile_image?: string;
    dist_max?: number;
    driver_status?: string;
    observations?: string;
    value_per_kilometer?: number;
    alcoholic_beverages?: boolean;
    animals?: boolean;
    trip?: ITrip[];
}
