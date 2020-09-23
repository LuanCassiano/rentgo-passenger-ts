import styled from 'styled-components/native';

export const CardTravelContainer = styled.View``;

export const CardTravel = styled.TouchableOpacity`
    width: 100%;
    padding: 20px;
    background-color: #1c2331;
    elevation: 5;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 40px;
    border-top-left-radius: 5px;
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
