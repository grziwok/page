import React from 'react';
import Head from 'next/head';
import * as S from './layout.styles';
import { CONFIGURATION } from '../../shared';

type Props = {
    title: string;
    children: JSX.Element;
}

export const Layout: React.FC<Props> = ({ title, children }) => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
      <meta name="description" content={CONFIGURATION.description} />
    </Head>

    <S.Layout>
      {children}
    </S.Layout>
  </React.Fragment>
);
