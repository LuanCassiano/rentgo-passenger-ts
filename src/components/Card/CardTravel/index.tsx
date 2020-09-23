import React, { ReactElement } from 'react';
import IPassengerTrips from 'src/interfaces/IPassengerTrips';
import ICardTravel from './interfaces/ICardTravel';

import * as Styled from './styles';

export default function CardTravel({
    data,
    action,
}: ICardTravel<IPassengerTrips>): ReactElement {
    return (
        <Styled.CardTravelContainer>
            <Styled.CardTravel onPress={(): void => action(data.id)}>
                <Styled.CardTravelLabel>Origem</Styled.CardTravelLabel>
                <Styled.CardTravelTitle numberOfLines={1}>
                    {data.origin}
                </Styled.CardTravelTitle>

                <Styled.CardTravelLabel>Destino</Styled.CardTravelLabel>
                <Styled.CardTravelTitle numberOfLines={1}>
                    {data.destination}
                </Styled.CardTravelTitle>
            </Styled.CardTravel>
        </Styled.CardTravelContainer>
    );
}
