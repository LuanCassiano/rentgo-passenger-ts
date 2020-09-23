import React from 'react';
import { View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import Header from '../../components/Header';

// import { Container } from './styles';

const TravelDetail: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const goBack = (): void => {
        navigation.goBack();
    };

    console.tron.log('rouite', route);

    return (
        <View>
            <Header
                title="Detalhes"
                action={goBack}
                iconName="chevron-left"
                iconType="MaterialCommunityIcons"
            />
        </View>
    );
};

export default TravelDetail;
