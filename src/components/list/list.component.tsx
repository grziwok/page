import React from 'react';
import * as S from './list.styles';

type Props = {
    items: { name: string; description: string }[];
}

export const List: React.FC<Props> = ({ items }) => (
    <S.List>
        {items.map((item, index) => (
            <S.ListItem key={index}>
                <S.ListName>{item.name}</S.ListName>
                <S.ListDescription>{item.description}</S.ListDescription>
            </S.ListItem>
        ))}
    </S.List>
);
