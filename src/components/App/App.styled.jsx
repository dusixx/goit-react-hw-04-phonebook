import styled from '@emotion/styled';
import { FlexCentered } from 'styles/shared';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  margin: 0 auto 0 auto;
  padding: 20px;
  width: ${({ width }) => width || '95%'};
  min-width: 250px;

  @media screen and (min-width: 768px) {
    width: 90%;
  }

  @media screen and (min-width: 1200px) {
    width: 50%;
  }
`;

export const Header = styled.div`
  ${FlexCentered(`justify-content: space-between`)}
  width: ${({ width }) => width || '100%'};
`;

export const Logo = styled.h1`
  ${FlexCentered(`gap: 10px`)}
  font-size: 24px;
  letter-spacing: -1px;

  & svg {
    color: var(--color-accent);
  }
`;
