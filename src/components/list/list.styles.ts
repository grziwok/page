import styled from 'styled-components';

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0 24px;
  padding: 40px 0 0 0;
`;

export const ListItem = styled.div`
  background: rgba(255, 255, 255, 0.2);
  display: block;
  border-radius: 20px;
  padding: 26px;
`;

export const ListName = styled.p`
  font-size: 22px;
  font-weight: var(--font-bold);
  margin: 0 0 12px 0;
`;

export const ListDescription = styled.p`
  font-size: 20px;
  margin: 0;
  opacity: 0.8;
`;
