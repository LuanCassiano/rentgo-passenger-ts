import React, { useEffect, ReactElement } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import IPassengerTrips from 'src/interfaces/IPassengerTrips';

import { RootState } from 'src/store/module/rootReducer';

import * as Styled from './styles';

import Header from '../../../components/Header';
import Loading from '../../../components/Loading';
import CardTravel from '../../../components/Card/CardTravel';

import * as TravelActions from '../../../store/module/PassengerTrips/actions';

const Scheduled: React.FC = () => {
    const navigation = useNavigation();

    const dispatch = useDispatch();

    const { travelWaitingDriver, loading } = useSelector(
        (state: RootState) => state.passengerTrip,
    );

    const navigationToDetails = (tripId: string): void => {
        navigation.navigate('detail', {
            trip: tripId,
        });
    };

    useEffect(() => {
        dispatch(
            TravelActions.getPassengerTripsRequest({
                page: 1,
                passenger_id: 1,
            }),
        );
    }, [dispatch]);

    return (
        <Styled.Container>
            <Header
                title="Minhas viagens"
                action={(): void => {}}
                iconName="menu"
                iconType="MaterialCommunityIcons"
            />

            {loading ? (
                <Loading />
            ) : (
                <FlatList
                    keyExtractor={(item: IPassengerTrips): string =>
                        String(item.id)
                    }
                    data={travelWaitingDriver}
                    renderItem={({ item }): ReactElement => (
                        <CardTravel data={item} action={navigationToDetails} />
                    )}
                    contentContainerStyle={{ padding: 20 }}
                />
            )}
        </Styled.Container>
    );
};

export default Scheduled;
