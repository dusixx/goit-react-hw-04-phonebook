import { IconSearch } from 'styles/icons';
import { TextField } from 'components/TextField';

export const Filter = props => (
  <TextField
    icon={IconSearch}
    height="35px"
    name="filter"
    placeholder="Filter"
    autoComplete="off"
    {...props}
  />
);
