import 'react-native-gesture-handler';

import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import NavigationService from './services/navigation';
import { RootState } from './store/module/rootReducer';

const App: React.FC = () => {
    const sign = useSelector((state: RootState) => state.login.signed);

    const registerService = (ref: unknown) => {
        NavigationService.setTopLevelNavigator(ref);
    };

    return (
        <NavigationContainer ref={registerService}>
            <Routes signed={sign} />
        </NavigationContainer>
    );
};

export default App;
