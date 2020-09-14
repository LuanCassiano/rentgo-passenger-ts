import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 20px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    background-color: #1c2331;
    elevation: 5;
`;

export const Content = styled.View`
    flex-direction: row;
`;

export const HeaderActionButton = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    margin: 0px 20px 0px 10px;
    align-items: center;
    justify-content: center;
`;

export const HeaderActionButtonIcon = styled.Image`
    width: 25px;
    height: 25px;
`;

export const Title = styled.Text`
    margin-right: 50px;
    color: #fff9c4;
    font-family: 'Nunito-Black';
    font-size: 20px;
`;
