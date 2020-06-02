import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const Section = styled.View`
    padding: 20px;
`;

export const Title = styled.Text`
    font-size: 20px;
    font-family: 'Nunito-SemiBold';
    color: #1c2331;
    text-transform: uppercase;
`;

export const SectionActions = styled.View`
    right: 20px;
    bottom: 30px;
    justify-content: flex-end;
    position: absolute;
`;

export const FAB = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    border-radius: 35px;
    align-items: center;
    justify-content: center;
    elevation: 5;
    background-color: #1c2331;
`;

export const FABIcon = styled.Image`
    width: 25px;
    height: 25px;
`;

export const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const CardContainer = styled.TouchableOpacity`
    width: 45%;
    height: 150px;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    elevation: 5;
    margin-top: 20px;
    background-color: #1c2331;
`;

export const CardMedia = styled.Image`
    width: 45px;
    height: 45px;
    margin-bottom: 10px;
`;

export const CardTitle = styled.Text`
    font-size: 16px;
    font-family: 'Nunito-SemiBold';
    color: #fff9c4;
    margin-bottom: 5px;
`;

export const CardParagraph = styled.Text`
    font-size: 14px;
    font-family: 'Nunito-Regular';
    color: #fff9c4;
    text-align: center;
`;

export const ListFavoriteContainer = styled.TouchableOpacity`
    padding: 20px;
    background-color: #1c2331;
    margin: 10px 10px 0px 0px;
    border-radius: 10px;
`;

export const ListFavoriteContent = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ListFavoriteMedia = styled.Image`
    width: 40px;
    height: 40px;
    margin-right: 20px;
    border-radius: 20px;
`;

export const ListFavoriteText = styled.Text`
    font-size: 16px;
    font-family: 'Nunito-Bold';
    color: #fff9c4;
`;
