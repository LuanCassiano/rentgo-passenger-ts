import React, { ReactElement } from 'react';

import {
    Container,
    HeaderActionButton,
    HeaderActionButtonIcon,
    Content,
    Title,
    ViewCenter,
} from './styles';

import IconMenu from '../../assets/icons/menu.png';

interface IHeaderProps {
    title: string;
    onDrawer(): void;
}

export default function Header({
    title,
    onDrawer,
}: IHeaderProps): ReactElement {
    return (
        <Container>
            <Content>
                <HeaderActionButton onPress={onDrawer}>
                    <HeaderActionButtonIcon source={IconMenu} />
                </HeaderActionButton>
                <ViewCenter>
                    <Title>{title}</Title>
                </ViewCenter>
            </Content>
        </Container>
    );
}
