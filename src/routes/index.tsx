import React, { ReactElement, useState } from 'react';
import Animated from 'react-native-reanimated';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from '../screens/Login';

import DrawerContent from '../components/SideBar';
import DrawerScreens from '../components/SideBar/SideBarScreens';

interface INavigationProps {
    signed: boolean;
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeNavigator(): ReactElement {
    const [progress, setProgress] = useState(new Animated.Value(0));

    const scale = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.8],
    });

    const borderRadius = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [0, 30],
    });

    const screensStyles = { borderRadius, transform: [{ scale }] };

    return (
        <Drawer.Navigator
            drawerType="slide"
            overlayColor="transparent"
            sceneContainerStyle={{ backgroundColor: '#1c2331' }}
            drawerStyle={{ width: '60%', backgroundColor: '#1c2331' }}
            drawerContent={(props: any) => {
                setProgress(props.progress);
                return <DrawerContent {...props} />
            }}
        >
            <Drawer.Screen name="Screens">
                {(props) => <DrawerScreens {...props} animation={screensStyles} />}
            </Drawer.Screen>
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
