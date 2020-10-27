import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import * as Styled from './styles';

const SideBar: React.FC = (props: any) => {

    const onNavigation = (screen: string): void => {
        props.navigation.navigate(screen);
    }

    return (
        <Styled.Container>
            <DrawerContentScrollView showsVerticalScrollIndicator={false} {...props}>
                <Styled.Header>
                    <Styled.Avatar />
                </Styled.Header>

                <DrawerItem
                    label="Home"
                    labelStyle={{ color: '#fff9c4', fontSize: 20 }}
                    onPress={() => onNavigation('Main')}
                />

                <DrawerItem
                    label="Minhas viagens"
                    labelStyle={{ color: '#fff9c4', fontSize: 20 }}
                    onPress={() => onNavigation('Travels')}
                />

                <DrawerItem
                    label="Pagamento"
                    labelStyle={{ color: '#fff9c4', fontSize: 20 }}
                    onPress={() => { }}
                />

                <DrawerItem
                    label="Ajuda"
                    labelStyle={{ color: '#fff9c4', fontSize: 20 }}
                    onPress={() => { }}
                />

                <DrawerItem
                    label="Termos de uso"
                    labelStyle={{ color: '#fff9c4', fontSize: 20 }}
                    onPress={() => { }}
                />

                <Styled.Footer>
                    <TouchableOpacity style={{ backgroundColor: 'red', borderRadius: 5, padding: 15, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>Sair</Text>
                    </TouchableOpacity>
                </Styled.Footer>
            </DrawerContentScrollView>
        </Styled.Container>
    );
}

export default SideBar;
