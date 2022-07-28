import React from 'react';
import * as S from './link.styles';

type Props = {
    content: string;
    link: string;
}

export const Link: React.FC<Props> = ({ content }) => (
    <S.Link>{content}</S.Link>
);
