import styled from 'styled-components';
import { devices } from '../../styles/variables.styles';

export const Layout = styled.div`
  padding: 0 16px;

  @media ${devices.tablet} {
    max-width: 800px;
    margin: 0 auto;
    padding: 0;
  }
`;
