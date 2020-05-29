import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';

interface INavigationProps {
    signed: boolean;
}

const Stack = createStackNavigator();

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
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        );
    }

    return <RootStack />;
}
