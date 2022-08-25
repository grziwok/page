import styled from 'styled-components';
import { devices } from './variables.styles';

export const HomeAbout = styled.div`
  padding: 16px 0 40px 0;

  @media ${devices.tablet} {
    padding: 100px 0;
  }
`;

export const HomeFooter = styled.div`
  padding: 100px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: flex-end;
`;

export const HomeFooterLinks = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  justify-items: flex-start;
`;
