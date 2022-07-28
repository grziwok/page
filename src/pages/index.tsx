import type { NextPage } from 'next';
import { About, Heading, Layout, Link, List } from '../components';
import * as S from './index.styles';

const projectsList = [
    {
        name: 'STS',
        description: 'Mobile version of application for the largest betting company in Poland',
    },
    {
        name: 'cux.io',
        description: 'Startup for detecting user behavior in your applications',
    },
];

const Home: NextPage = () => {
  return (
      <Layout title="Krzysztof Grziwok">
        <div>
            <S.HomeAbout>
                <About />
            </S.HomeAbout>

            <Heading content="Projects I took part" />

            <div>
                <List items={projectsList} />
            </div>

            <S.HomeFooter>
                <S.HomeFooterLinks>
                    <Link content="Resume" link="/resume" />
                    <Link content="github.com/grziwok" link="github.com/grziwok" />
                </S.HomeFooterLinks>

                <S.HomeFooterEmail>
                    <Link content="krzysztof(at)grziwok.com" link="krzysztof(at)grziwok.com" />
                </S.HomeFooterEmail>
            </S.HomeFooter>
        </div>
      </Layout>
  );
};

export default Home;
