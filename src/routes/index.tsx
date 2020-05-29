import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';

interface INavigationProps {
    signed: boolean;
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeNavigator(): ReactElement {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="HomePage" component={HomeScreen} />
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
