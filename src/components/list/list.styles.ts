import styled from 'styled-components';
import { devices, fontWeights } from '../../styles/variables.styles';

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 24px;
  padding: 40px 0 0 0;

  @media ${devices.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ListItem = styled.div`
  background: rgba(255, 255, 255, 0.2);
  display: block;
  border-radius: 20px;
  padding: 16px;

  @media ${devices.tablet} {
    padding: 26px;
  }
`;

export const ListName = styled.p`
  font-size: 1.375rem;
  font-weight: ${fontWeights.bold};
  margin: 0 0 12px 0;
`;

export const ListDescription = styled.p`
  font-size: 1.25rem;
  margin: 0;
  opacity: 0.8;
`;
