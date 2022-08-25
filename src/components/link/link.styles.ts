import styled from 'styled-components';
import { fontWeights } from '../../styles/variables.styles';

export const Link = styled.a`
  display: inline-block;
  font-size: 1.25rem;
  font-weight: ${fontWeights.regular};
  margin: 0;
  border-bottom: 2px solid transparent;
  
  &:hover {
    cursor: pointer;
    border-bottom-color: white;
  }
`;
