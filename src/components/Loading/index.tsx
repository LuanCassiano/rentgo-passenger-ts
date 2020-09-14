import React from 'react';
import { ActivityIndicator } from 'react-native';

import * as Styled from './styles';

const Loading: React.FC = () => {
    return (
        <Styled.Container>
            <ActivityIndicator size="large" color="#1c2331" />
        </Styled.Container>
    );
};

export default Loading;
