import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    padding-top: ${Platform.OS === 'ios' ? '20px' : '15px'};
    padding-left: ${Platform.OS === 'ios' ? '20px' : '15px'};
    padding-right: ${Platform.OS === 'ios' ? '20px' : '15px'};
    padding-bottom: ${Platform.OS === 'ios' ? '20px' : '15px'};
    background-color: #1c2331;
    elevation: 5;
`;

export const Content = styled.View`
    flex-direction: row;
`;

export const HeaderActionButton = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    margin-top: ${Platform.OS === 'ios' ? '25px' : '5px'};
    margin-bottom: 0px;
    margin-left: 10px;
`;

export const HeaderActionButtonIcon = styled.Image`
    width: 30px;
    height: 30px;
`;

export const Title = styled.Text`
    margin-top: ${Platform.OS === 'ios' ? '28px' : '5px'};
    margin-right: 50px;
    color: #fff9c4;
    font-family: 'Nunito-Black';
    text-align: center;
    font-size: 20px;
`;

export const ViewCenter = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
