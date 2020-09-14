import React, { ReactElement, useEffect, useState } from 'react';
import { FlatList, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import IPassengerTrips from 'src/interfaces/IPassengerTrips';
import IDriver from 'src/interfaces/IDriver';

import * as Styled from './styles';

import Header from '../../components/Header';
import Loading from '../../components/Loading';
import CardTravels from './Card/CardTravel';
import ListFavorites from './List/ListFavorites';

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

    const { travelFinished } = useSelector(
        (state: RootState) => state.passengerTrip,
    );

    const { listFavorites, loading } = useSelector(
        (state: RootState) => state.driver,
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

    const getFavoritesDrivers = (): void => {
        dispatch(DriverActions.getDriverFavoritesRequest(passenger_id));
    };

    useEffect(() => {
        getTripsScheduled();

        getTripsFinished();

        getFavoritesDrivers();
    }, []);

    return (
        <Styled.Container>
            <Header title="RentGo" onDrawer={toggleDrawer} />

            {loading ? (
                <Loading />
            ) : (
                <>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1 }}
                    >
                        <Styled.Content>
                            <Styled.Title>Minhas informações</Styled.Title>

                            <Styled.Row>
                                <Styled.CardContainer>
                                    <Styled.CardMedia
                                        source={IconTripScheduled}
                                    />
                                    <Styled.CardTitle>
                                        {scheduledTripsTotal}
                                    </Styled.CardTitle>
                                    <Styled.CardParagraph>
                                        Viagens agendadas
                                    </Styled.CardParagraph>
                                </Styled.CardContainer>

                                <Styled.CardContainer>
                                    <Styled.CardMedia
                                        source={IconTripFinished}
                                    />
                                    <Styled.CardTitle>
                                        {finishedTripsTotal}
                                    </Styled.CardTitle>
                                    <Styled.CardParagraph>
                                        Viagens realizadas
                                    </Styled.CardParagraph>
                                </Styled.CardContainer>
                            </Styled.Row>
                        </Styled.Content>

                        <Styled.Content>
                            <Styled.Row>
                                <Styled.Title>
                                    Motoristas favoritos
                                </Styled.Title>

                                <Styled.JustifiedItemsCenter>
                                    <Styled.ButtonSeeAll>
                                        <Styled.TextButtonSeeAll>
                                            Ver todos
                                        </Styled.TextButtonSeeAll>
                                    </Styled.ButtonSeeAll>
                                </Styled.JustifiedItemsCenter>
                            </Styled.Row>

                            <FlatList
                                keyExtractor={(item: IDriver): string =>
                                    String(item.id)
                                }
                                data={listFavorites}
                                renderItem={({ item }): ReactElement => (
                                    <ListFavorites data={item} />
                                )}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            />
                        </Styled.Content>

                        <Styled.Content>
                            <Styled.Row>
                                <Styled.Title>Últimas viagens</Styled.Title>

                                <Styled.JustifiedItemsCenter>
                                    <Styled.ButtonSeeAll>
                                        <Styled.TextButtonSeeAll>
                                            Ver todos
                                        </Styled.TextButtonSeeAll>
                                    </Styled.ButtonSeeAll>
                                </Styled.JustifiedItemsCenter>
                            </Styled.Row>

                            <FlatList
                                keyExtractor={(item: IPassengerTrips): string =>
                                    String(item.id)
                                }
                                data={travelFinished}
                                renderItem={({ item }): ReactElement => (
                                    <CardTravels data={item} />
                                )}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            />
                        </Styled.Content>
                    </ScrollView>
                    <Styled.SectionActions>
                        <Styled.FAB>
                            <Styled.FABIcon source={IconPlus} />
                        </Styled.FAB>
                    </Styled.SectionActions>
                </>
            )}
        </Styled.Container>
    );
}
