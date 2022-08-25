import React from 'react';
import * as S from './heading.styles';

type Props = {
    content: string;
}

export const Heading: React.FC<Props> = ({ content }) => (
  <S.Heading>{content}</S.Heading>
);
