import { string, exact, arrayOf, oneOfType, number } from 'prop-types';
import { Controls } from './Controls';
import { IconDelete, IconEdit } from 'styles/icons';
import { List, Item, Column } from './ContactList.styled';

const controlsData = {
  edit: IconEdit,
  delete: IconDelete,
};

export const ContactList = ({
  value,
  controlsHeight,
  itemHeight,
  ...restProps
}) => {
  return (
    <List>
      {value.map(({ id, name, number }) => {
        return (
          <Item key={id} height={itemHeight}>
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
  itemHeight: oneOfType([string, number]),
  value: arrayOf(
    exact({
      name: string.isRequired,
      id: string.isRequired,
      number: string.isRequired,
    })
  ),
};
