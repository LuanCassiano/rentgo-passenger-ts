import styled from 'styled-components/native';

export const CardTravelContainer = styled.View`
    margin-top: 20px;
`;

export const CardTravel = styled.TouchableOpacity`
    width: 300px;
    padding: 20px;
    background-color: #1c2331;
    margin-right: 10px;
    elevation: 2;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 2px;
    border-top-right-radius: 40px;
    border-top-left-radius: 2px;
`;

export const CardTravelLabel = styled.Text`
    font-size: 10px;
    font-family: 'Nunito-Regular';
    color: #fff9c4;
`;

export const CardTravelTitle = styled.Text`
    font-size: 16px;
    font-family: 'Ninuto-SemiBold';
    color: #fff9c4;
    margin-bottom: 10px;
    flex-wrap: wrap;
`;
