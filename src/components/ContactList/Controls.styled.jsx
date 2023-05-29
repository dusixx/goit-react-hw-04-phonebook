import styled from '@emotion/styled';
import { ButtonBase, FlexCentered } from 'styles/shared';
import { calcCSSValue } from 'components/utils';

export const ControlsList = styled.ul`
  ${FlexCentered('gap: 5px')};
  height: ${({ height }) => calcCSSValue(height) || '100%'};
  width: 100%;
`;

export const Control = styled.li`
  height: 100%;
`;

export const ControlBtn = styled(ButtonBase)`
  height: 100%;
  color: #c5c5c5;

  &:hover,
  &:focus-visible {
    color: var(--color-accent);
  }
`;
