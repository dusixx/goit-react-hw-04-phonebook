import { IconFilter } from 'styles/icons';
import { TextField } from 'components/TextField';

export const Filter = props => (
  <TextField
    icon={IconFilter}
    height="var(--field-height)"
    name="filter"
    placeholder="Filter"
    autoComplete="off"
    {...props}
  />
);
