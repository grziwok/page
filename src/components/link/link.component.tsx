import React from 'react';
import * as S from './link.styles';

type Props = {
    content: string;
    href: string;
    newTab?: boolean;
}

export const Link: React.FC<Props> = ({ content, href, newTab }) => {
    const target = newTab ? '_blank' : '_self';

    return (
        <S.Link href={href} target={target}>{content}</S.Link>
    );
};
