import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {
    DrawerItemList,
    DrawerItem,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import ISideBar from './interfaces/ISideBar';
import IUser from '../../interfaces/IUser';

import * as Styled from './styles';

const SideBar: React.FC<ISideBar> = ({ props }) => {
    const [userInfo, setUserInfo] = useState<IUser>({
        username: '',
        email: '',
        fullname: '',
        mobile_phone: '',
        profile_image: '',
    });

    useEffect(() => {
        async function getDataStorage(): Promise<void> {
            const data: any = await AsyncStorage.getItem('RentGoUser');
            const info = JSON.parse(data);

            setUserInfo({
                email: info.email,
                fullname: info.fullname,
                mobile_phone: info.mobile_phone,
                profile_image: info.profile_image,
                username: info.username,
            });
        }

        getDataStorage();
    }, []);

    return (
        <Styled.Container>
            <Styled.SideBarHeader>
                <View style={{ padding: 20, flexDirection: 'row' }}>
                    <Image
                        source={{ uri: `${userInfo.profile_image}` }}
                        style={{ width: 80, height: 80, borderRadius: 40 }}
                    />

                    <View style={{ justifyContent: 'center', marginLeft: 20 }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontFamily: 'Nunito-Black',
                                color: '#fff9c4',
                            }}
                        >
                            {userInfo.fullname}
                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                                fontFamily: 'Nunito-Regular',
                                color: '#fff9c4',
                            }}
                        >
                            @{userInfo.username}
                        </Text>
                    </View>
                </View>
            </Styled.SideBarHeader>

            <Styled.SideBarBody>
                <DrawerItemList
                    {...props}
                    labelStyle={{
                        fontFamily: 'Nunito-Bold',
                        fontSize: 16,
                    }}
                    activeBackgroundColor="#fff9c4"
                    activeTintColor="#1c2331"
                    inactiveBackgroundColor="#1c2331"
                    inactiveTintColor="#fff9c4"
                />
            </Styled.SideBarBody>
        </Styled.Container>
    );
};

export default SideBar;
