import React, { useEffect, ReactElement } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import IPassengerTrips from 'src/interfaces/IPassengerTrips';

import { RootState } from 'src/store/module/rootReducer';

import * as Styled from './styles';

import Header from '../../../components/Header';
import Loading from '../../../components/Loading';
import CardTravel from '../../../components/Card/CardTravel';

import * as TravelActions from '../../../store/module/PassengerTrips/actions';

const Finished: React.FC = () => {
    const dispatch = useDispatch();

    const { travelFinished, loading } = useSelector(
        (state: RootState) => state.passengerTrip,
    );

    useEffect(() => {
        dispatch(
            TravelActions.getPassengerTripsFinishedRequest({
                page: 1,
                passenger_id: 1,
            }),
        );
    }, [dispatch]);

    return (
        <Styled.Container>
            <Header title="Minhas viagens" onDrawer={(): void => {}} />

            {loading ? (
                <Loading />
            ) : (
                <FlatList
                    keyExtractor={(item: IPassengerTrips): string =>
                        String(item.id)
                    }
                    data={travelFinished}
                    renderItem={({ item }): ReactElement => (
                        <CardTravel data={item} />
                    )}
                    contentContainerStyle={{ padding: 20 }}
                />
            )}
        </Styled.Container>
    );
};

export default Finished;
