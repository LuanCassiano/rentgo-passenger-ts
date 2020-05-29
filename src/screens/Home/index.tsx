/* eslint-disable no-underscore-dangle */
import React, { ReactElement, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import IDriver from 'src/interfaces/IDriver';

import { Container, Content } from './styles';

import Header from '../../components/Header';

import { DrawerProps } from '../../routes/types/DrawerTypes';

import { RootState } from '../../store/module/rootReducer';

import * as DriverActions from '../../store/module/Driver/actions';

export default function Home(): ReactElement {
    const navigation = useNavigation<DrawerProps>();

    const listDrivers = useSelector((state: RootState) => state.driver.data);

    const dispatch = useDispatch();

    const toggleDrawer = (): void => {
        navigation.toggleDrawer();
    };

    const _renderItem = (item: IDriver): ReactElement => {
        return (
            <View>
                <Text>{item.fullname}</Text>
            </View>
        );
    };

    useEffect(() => {
        dispatch(DriverActions.getDriversRequest());
    }, [dispatch]);

    return (
        <Container>
            <Header title="RentGo" onDrawer={toggleDrawer} />

            <Content>
                <FlatList
                    keyExtractor={(item): string => String(item.id)}
                    data={listDrivers}
                    renderItem={({ item }) => _renderItem(item)}
                />
            </Content>
        </Container>
    );
}
