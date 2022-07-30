import type { NextPage } from 'next';
import { About, Heading, Layout, Link, List } from '../components';
import * as S from '../styles/index.styles';
import { CONFIGURATION } from '../shared';

const Home: NextPage = () => {
  return (
      <Layout title={CONFIGURATION.title}>
        <div>
            <S.HomeAbout>
                <About />
            </S.HomeAbout>

            <Heading content="Projects I took part" />

            <div>
                <List items={CONFIGURATION.projects} />
            </div>

            <S.HomeFooter>
                <S.HomeFooterLinks>
                    {CONFIGURATION.footer.links.map((item, index) => (
                        <Link
                            key={index}
                            content={item.name}
                            href={item.href}
                            newTab={item.newTab}
                        />
                    ))}
                </S.HomeFooterLinks>
            </S.HomeFooter>
        </div>
      </Layout>
  );
};

export default Home;
