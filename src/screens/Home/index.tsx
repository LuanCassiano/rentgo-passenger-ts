/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
import React, { ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    Content,
    FAB,
    FABIcon,
    SectionActions,
    CardContainer,
    Row,
    CardMedia,
    CardParagraph,
    CardTitle,
    Title,
} from './styles';

import Header from '../../components/Header';

import { DrawerProps } from '../../routes/types/DrawerTypes';

import { RootState } from '../../store/module/rootReducer';

import * as DriverActions from '../../store/module/Driver/actions';
import * as PassengerTripsActions from '../../store/module/PassengerTrips/actions';

import IconPlus from '../../assets/icons/plus.png';
import IconTripScheduled from '../../assets/icons/schedule-trip.png';
import IconTripFinished from '../../assets/icons/destination.png';

export default function Home(): ReactElement {
    const navigation = useNavigation<DrawerProps>();

    const scheduledTripsTotal = useSelector(
        (state: RootState) => state.passengerTrip.totalScheduled,
    );
    const finishedTripsTotal = useSelector(
        (state: RootState) => state.passengerTrip.totalFinished,
    );

    const dispatch = useDispatch();

    const [page] = useState(1);
    const [passenger_id] = useState(1);

    const toggleDrawer = (): void => {
        navigation.toggleDrawer();
    };

    const getTripsScheduled = (): void => {
        dispatch(
            PassengerTripsActions.getPassengerTripsRequest(page, passenger_id),
        );
    };

    const getTripsFinished = (): void => {
        dispatch(
            PassengerTripsActions.getPassengerTripsFinishedRequest(
                page,
                passenger_id,
            ),
        );
    };

    useEffect(() => {
        dispatch(DriverActions.getDriversRequest());

        getTripsScheduled();

        getTripsFinished();
    }, [dispatch]);

    return (
        <Container>
            <Header title="RentGo" onDrawer={toggleDrawer} />

            <Content>
                <Title>Minhas informações</Title>

                <Row>
                    <CardContainer>
                        <CardMedia source={IconTripScheduled} />
                        <CardTitle>{scheduledTripsTotal}</CardTitle>
                        <CardParagraph>Viagens agendadas</CardParagraph>
                    </CardContainer>

                    <CardContainer>
                        <CardMedia source={IconTripFinished} />
                        <CardTitle>{finishedTripsTotal}</CardTitle>
                        <CardParagraph>Viagens realizadas</CardParagraph>
                    </CardContainer>
                </Row>
            </Content>
            <SectionActions>
                <FAB>
                    <FABIcon source={IconPlus} />
                </FAB>
            </SectionActions>
        </Container>
    );
}
