import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const Content = styled.View`
    padding: 20px;
`;

export const Title = styled.Text`
    font-size: 20px;
    font-family: 'Nunito-SemiBold';
    color: #1c2331;
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
    width: 20px;
    height: 20px;
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

export const JustifiedItemsCenter = styled.View`
    justify-content: center;
`;

export const ButtonSeeAll = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
`;

export const TextButtonSeeAll = styled.Text`
    font-size: 14px;
    font-family: 'Nunito-Regular';
    color: #1c2331;
`;
