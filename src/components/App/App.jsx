import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Container } from './App.styled';
import { Block } from 'styles/shared';
import { initialContacts } from 'data/contacts';
import { formatNumber, getId } from 'utils';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { ContactEditor } from 'components/ContactEditor';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Header } from 'components/Header';

//
// Options
//

const LS_KEY_CONTACTS = 'contacts';

const message = {
  ALREADY_EXISTS: `The contact with the same name or number already exists`,
  ACTION_NOT_SUPPORTED: 'Action not supported',
  ADDED_SUCCESS: `The contact was added successfully`,
};

//
// App
//

export const App = () => {
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
    const searchStr = filter.toLocaleLowerCase();

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

  // вернет true - форма очистится
  const handleEditorSubmit = ({ name, number }) => {
    const data = { name, number: formatNumber(number) };

    if (!isContactExists(data)) {
      addContact(data);
      toast.success(message.ADDED_SUCCESS);
      return true;
    }

    toast.error(message.ALREADY_EXISTS);
  };

  const handleControlClick = (id, controlName) => {
    switch (controlName) {
      case 'delete':
        return deleteContact(id);
      case 'edit':
        return toast.warn(message.ACTION_NOT_SUPPORTED);
      default:
    }
  };

  const filtered = filterContacts();

  return (
    <Container>
      <Header onResetClick={() => setContacts(initialContacts)} />

      {/* Contact editor */}
      <Block style={{ padding: '15px' }}>
        <ContactEditor onSubmit={handleEditorSubmit} />
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
        <Block maxHeight="70vh">
          <ContactList
            value={filtered}
            itemHeight="40px"
            controlsHeight="60%"
            onControlClick={handleControlClick}
          />
        </Block>
      )}

      <ToastContainer
        autoClose={1500}
        position="top-center"
        progressStyle={{ height: '3px' }}
      />
    </Container>
  );
};
