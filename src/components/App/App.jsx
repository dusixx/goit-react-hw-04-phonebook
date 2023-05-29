import { useState, useMemo } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Container } from './App.styled';
import { ContactEditor } from 'components/ContactEditor/ContactEditor';
import { Filter } from 'components/Filter';
import { formatNumber, getId } from 'components/utils';
import { Block } from 'styles/shared';
import { ContactList } from 'components/ContactList/ContactList';
import { initialContacts } from 'data/contacts';

const ERR_ALREADY_EXISTS = `The contact with the same name or number already exists`;
const WARN_ACTION_NOT_SUPPORTED = 'Action not supported';
const MSG_ADDED_SUCCESS = `The contact was added successfully`;

export const App = props => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(initialContacts);

  //
  // contacts interface
  //
  const contactList = useMemo(
    () => ({
      isExists({ name, number }) {
        return contacts.find(
          itm =>
            itm.name.toLocaleLowerCase() === name.toLocaleLowerCase() ||
            itm.number === number
        );
      },

      filter() {
        const searchStr = filter.trim().toLocaleLowerCase();

        return searchStr
          ? contacts.filter(
              ({ name, number }) =>
                name.toLocaleLowerCase().includes(searchStr) ||
                number.includes(searchStr)
            )
          : contacts;
      },

      add(data) {
        setContacts(cur => [...cur, { ...data, id: getId() }]);
        return true;
      },

      delete(id) {
        return setContacts(cur => cur.filter(itm => itm.id !== id));
      },
    }),
    [contacts, filter]
  );

  const handleContactEditorSubmit = ({ name, number }) => {
    const data = { name, number: formatNumber(number) };

    if (!contactList.isExists(data)) {
      contactList.add(data);
      return toast.success(MSG_ADDED_SUCCESS);
    }

    toast.error(ERR_ALREADY_EXISTS);
  };

  const handleControlClick = (id, controlName) => {
    switch (controlName) {
      case 'delete':
        return contactList.delete(id);
      case 'edit':
        return toast.warn(WARN_ACTION_NOT_SUPPORTED);
      default:
    }
  };

  const filtered = useMemo(() => contactList.filter(), [contactList]);

  return (
    <Container>
      <Block style={{ padding: '15px' }}>
        <ContactEditor onSubmit={handleContactEditorSubmit} />
      </Block>

      {contacts.length > 0 && (
        <Block style={{ padding: '10px' }}>
          <Filter
            value={filter}
            onChange={e => setFilter(e?.target.value || '')}
          />
        </Block>
      )}

      {filtered.length > 0 && (
        <Block maxHeight="70%">
          <ContactList
            value={filtered}
            controlsHeight="75%"
            onControlClick={handleControlClick}
          />
        </Block>
      )}

      <ToastContainer autoClose={1500} />
    </Container>
  );
};
