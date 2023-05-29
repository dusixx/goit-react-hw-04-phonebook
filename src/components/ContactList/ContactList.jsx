import { string, exact, arrayOf } from 'prop-types';
import { IconDelete, IconEdit } from 'styles/icons';
import { List, Item, Column } from './ContactList.styled';
import { Controls } from './Controls';

const controlsData = {
  edit: IconEdit,
  delete: IconDelete,
};

export const ContactList = ({ value, controlsHeight, ...restProps }) => {
  return (
    <List>
      {value.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <Column>{name}</Column>
            <Column>{number}</Column>
            <Column>
              <Controls
                value={controlsData}
                height={controlsHeight}
                targetId={id}
                {...restProps}
              />
            </Column>
          </Item>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  value: arrayOf(
    exact({
      name: string.isRequired,
      id: string.isRequired,
      number: string.isRequired,
    })
  ),
};
