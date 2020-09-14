import React from 'react';
import IDriver from 'src/interfaces/IDriver';
import IListFavorites from './interfaces/IListFavorites';

import * as Styled from './styles';

const ListFavorites: React.FC<IListFavorites<IDriver>> = ({
    data,
}: IListFavorites<IDriver>) => {
    return (
        <Styled.ListContainer>
            <Styled.ListContent>
                <Styled.ListMedia source={{ uri: `${data.profile_image}` }} />

                <Styled.ListLabel>{data.fullname}</Styled.ListLabel>
            </Styled.ListContent>
        </Styled.ListContainer>
    );
};

export default ListFavorites;
