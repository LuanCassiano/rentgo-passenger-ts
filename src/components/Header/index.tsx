import React, { ReactElement } from 'react';
import { View } from 'react-native';

import MDIcon from 'react-native-vector-icons/MaterialIcons';

import MDCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, HeaderActionButton, Content, Title } from './styles';

import IHeader from './interfaces/IHeader';

export default function Header({
    title,
    action,
    iconName,
    iconType,
}: IHeader): ReactElement {
    console.tron.log('icon name', iconName);
    console.tron.log('conType', iconType);

    const _renderActionButtonIcon = (
        type?: string,
        name?: string,
    ): ReactElement => {
        switch (type) {
            case 'MaterialCommunityIcons':
                return <MDCIcon name={name} size={30} color="#fff9c4" />;

            case 'MaterialIcons':
                return <MDIcon name={name} size={30} color="#fff9c4" />;

            default:
                return <View />;
        }
    };

    return (
        <Container>
            <Content>
                <HeaderActionButton onPress={action}>
                    {_renderActionButtonIcon(iconType, iconName)}
                </HeaderActionButton>
                <Title>{title}</Title>
            </Content>
        </Container>
    );
}
