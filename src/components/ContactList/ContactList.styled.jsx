import styled from '@emotion/styled';
import { FlexCentered } from 'styles/shared';

export const List = styled.ul`
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }

  & > li:nth-of-type(odd) {
    background-color: #f0f0f0;
  }
`;

export const Item = styled.li`
  ${FlexCentered('justify-content: space-between')};
  height: ${({ height }) => height};
  padding-left: 10px;
`;

export const Column = styled.span`
  ${FlexCentered()};
  flex-basis: 33.33%;
  height: 100%;
  text-align: center;
`;
