import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { ContactEditor } from 'components/ContactEditor';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Container, Header, Logo } from './App.styled';
import { ButtonSecondary, Block } from 'styles/shared';
import { IconContactsBook, IconRefresh } from 'styles/icons';
import { initialContacts } from 'data/contacts';
import { formatNumber, getId } from 'components/utils';
import { useLocalStorage } from 'hooks/useLocalStorage';

const LS_KEY_CONTACTS = 'contacts';
const ERR_ALREADY_EXISTS = `The contact with the same name or number already exists`;
const WARN_ACTION_NOT_SUPPORTED = 'Action not supported';
const MSG_ADDED_SUCCESS = `The contact was added successfully`;

//
// App
//

export const App = props => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useLocalStorage(
    LS_KEY_CONTACTS,
    initialContacts
  );

  const isContactExists = ({ name, number }) =>
    contacts.find(
      itm =>
        itm.name.toLocaleLowerCase() === name.toLocaleLowerCase() ||
        itm.number === number
    );

  const filterContacts = () => {
    const searchStr = filter.trim().toLocaleLowerCase();

    return searchStr
      ? contacts.filter(
          ({ name, number }) =>
            name.toLocaleLowerCase().includes(searchStr) ||
            number.includes(searchStr)
        )
      : contacts;
  };

  const addContact = data => {
    setContacts(cur => [...cur, { ...data, id: getId() }]);
    return true;
  };

  const deleteContact = id => {
    setContacts(cur => cur.filter(itm => itm.id !== id));
    return true;
  };

  // вернет true - форма очищается
  const handleContactEditorSubmit = ({ name, number }) => {
    const data = { name, number: formatNumber(number) };

    if (!isContactExists(data)) {
      addContact(data);
      toast.success(MSG_ADDED_SUCCESS);
      return addContact(data);
    }

    toast.error(ERR_ALREADY_EXISTS);
  };

  const handleControlClick = (id, controlName) => {
    switch (controlName) {
      case 'delete':
        return deleteContact(id);
      case 'edit':
        return toast.warn(WARN_ACTION_NOT_SUPPORTED);
      default:
    }
  };

  const filtered = filterContacts();

  return (
    <Container>
      <Header>
        <Logo>
          <IconContactsBook size={22} />
          PhoneBook
        </Logo>
        <ButtonSecondary
          title="Reset to initial"
          onClick={() => setContacts(initialContacts)}
        >
          <IconRefresh size={20} />
        </ButtonSecondary>
      </Header>

      {/* Contact editor */}
      <Block style={{ padding: '15px' }}>
        <ContactEditor onSubmit={handleContactEditorSubmit} />
      </Block>

      {/* Filter */}
      {contacts.length > 0 && (
        <Block style={{ padding: '10px' }}>
          <Filter
            value={filter}
            onChange={e => setFilter(e?.target.value || '')}
          />
        </Block>
      )}

      {/* Contact list */}
      {filtered.length > 0 && (
        <Block maxHeight="70%">
          <ContactList
            value={filtered}
            itemHeight="40px"
            controlsHeight="60%"
            onControlClick={handleControlClick}
          />
        </Block>
      )}

      <ToastContainer autoClose={1500} />
    </Container>
  );
};
