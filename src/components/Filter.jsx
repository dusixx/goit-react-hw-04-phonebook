import { IconSearch } from 'styles/icons';
import { TextField } from 'components/TextField';

export const Filter = props => (
  <TextField
    icon={IconSearch}
    height="30px"
    name="filter"
    placeholder="Filter"
    autoComplete="off"
    {...props}
  />
);
