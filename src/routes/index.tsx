import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
    createDrawerNavigator,
    DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';
import TravelsFinishedScreen from '../screens/Travels/Finished';
import TravelsInProgressScreen from '../screens/Travels/InProgress';
import TravelsScheduledScreen from '../screens/Travels/Scheduled';
import TravelsCanceledScreen from '../screens/Travels/Canceled';
import TravelDetailScreen from '../screens/TravelDetail';

import SideBar from '../components/SideBar';

interface INavigationProps {
    signed: boolean;
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function TravelScheduledNavigator({ navigation, route }): ReactElement {
    if (route.state && route.state.index > 0) {
        navigation.setOptions({ tabBarVisible: false });
    } else {
        navigation.setOptions({ tabBarVisible: true });
    }

    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="schedule" component={TravelsScheduledScreen} />
            <Stack.Screen name="detail" component={TravelDetailScreen} />
        </Stack.Navigator>
    );
}

function TravelsNavigator(): ReactElement {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#fff9c4',
                inactiveTintColor: '#384662',
                labelStyle: {
                    fontFamily: 'Nunito-Regular',
                },
                tabStyle: {
                    backgroundColor: '#1c2331',
                },
            }}
        >
            <Tab.Screen
                name="scheduled"
                component={TravelScheduledNavigator}
                options={{
                    tabBarLabel: 'Agendadas',
                    tabBarIcon: ({ color }) => (
                        <MCIcon name="calendar-clock" size={25} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="inProgress"
                component={TravelsInProgressScreen}
                options={{
                    tabBarLabel: 'Em andamento',
                    tabBarIcon: ({ color }) => (
                        <MCIcon name="calendar" size={25} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="finished"
                component={TravelsFinishedScreen}
                options={{
                    tabBarLabel: 'Finalizadas',
                    tabBarIcon: ({ color }) => (
                        <MCIcon name="calendar-check" size={25} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="canceled"
                component={TravelsCanceledScreen}
                options={{
                    tabBarLabel: 'Canceladas',
                    tabBarIcon: ({ color }) => (
                        <MCIcon
                            name="calendar-remove"
                            size={25}
                            color={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

function HomeNavigator(): ReactElement {
    return (
        <Drawer.Navigator
            drawerContent={(
                props: DrawerContentComponentProps,
            ): ReactElement => <SideBar props={props} />}
        >
            <Drawer.Screen
                name="HomePage"
                component={HomeScreen}
                options={{
                    drawerLabel: 'Home',
                    drawerIcon: ({ color }) => (
                        <MCIcon name="home" size={30} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="Travels"
                component={TravelsNavigator}
                options={{
                    drawerLabel: 'Minhas viagens',
                    drawerIcon: ({ color }) => (
                        <MCIcon name="airplane" size={30} color={color} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

const getInitialRoute = (signed: boolean): string => {
    if (signed) {
        return 'Home';
    }

    return 'Login';
};

export default function RootNavigator({
    signed,
}: INavigationProps): ReactElement {
    function RootStack(): ReactElement {
        return (
            <Stack.Navigator
                headerMode="none"
                initialRouteName={getInitialRoute(signed)}
            >
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeNavigator} />
            </Stack.Navigator>
        );
    }

    return <RootStack />;
}
