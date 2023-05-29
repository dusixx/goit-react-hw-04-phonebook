import styled from '@emotion/styled';
import { FlexCentered } from 'styles/shared';

export const List = styled.ul`
  & > li:nth-of-type(odd) {
    background-color: #f0f0f0;
  }
`;

export const Item = styled.li`
  ${FlexCentered('justify-content: space-between')};
  height: 30px;
`;

export const Column = styled.span`
  ${FlexCentered()};
  flex-basis: 33.33%;
  height: 100%;
`;
