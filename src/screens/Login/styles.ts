import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #1c2331;
    justify-content: center;
    align-items: center;
`;

export const H1 = styled.Text`
    font-size: 28px;
    font-family: 'Nunito-Black';
    color: #fff9c4;
    margin: 10px;
`;

export const FormControl = styled.View`
    padding: 0px 10px;
    margin: 10px 40px;
    border-radius: 5px;
    align-self: stretch;
    background-color: rgba(0, 0, 0, 0.1);
`;

export const FormInput = styled.TextInput`
    font-size: 16px;
    font-family: 'Nunito-Regular';
    color: #fff9c4;
`;

export const ActionButton = styled.TouchableOpacity`
    padding: 15px;
    margin: 30px 40px;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    background-color: #fff9c4;
`;

export const TextButton = styled.Text`
    font-size: 16px;
    font-family: 'Nunito-Bold';
    color: #1c2331;
`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 30px;
`;

export const LinkText = styled.Text`
    color: #fff9c4;
    font-size: 14px;
    font-family: 'Nunito-Regular';
`;

export const ErrorMessage = styled.Text`
    color: #c62828;
    font-size: 12px;
    font-family: 'Nunito-SemiBold';
`;
