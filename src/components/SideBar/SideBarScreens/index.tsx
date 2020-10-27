import React from 'react';
import Animated from 'react-native-reanimated';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import styles from './RNStyle';

import HomeScreen from '../../../screens/Home';
import TravelScreen from '../../../screens/Travels';

const Stack = createStackNavigator();

const SideBarScreens = ({ animation }: { animation: any }, props: any) => {
    return (
        <Animated.View style={[styles.animatedView, animation]}>
            <Stack.Navigator headerMode="none" initialRouteName="Main">
                <Stack.Screen name="Main" component={HomeScreen} />
                <Stack.Screen name="Travels" component={TravelScreen} />
            </Stack.Navigator>
        </Animated.View>
    );
}

export default SideBarScreens;
