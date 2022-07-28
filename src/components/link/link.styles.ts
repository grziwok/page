import styled from 'styled-components';

export const Link = styled.a`
  display: inline-block;
  font-size: 20px;
  font-weight: var(--font-regular);
  margin: 0;
  border-bottom: 2px solid transparent;
  
  &:hover {
    cursor: pointer;
    border-bottom-color: white;
  }
`;
