import { IconContactsBook, IconRefresh } from 'styles/icons';
import { ButtonSecondary } from 'styles/shared';
import { Container, Logo } from './Header.styled';

export const Header = ({ onResetClick }) => {
  return (
    <Container>
      <Logo href="./">
        <IconContactsBook size={22} />
        PhoneBook
      </Logo>
      <ButtonSecondary title="Reset to initial" onClick={onResetClick}>
        <IconRefresh size={20} />
      </ButtonSecondary>
    </Container>
  );
};
