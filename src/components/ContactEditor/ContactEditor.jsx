import { useState } from 'react';
import { func } from 'prop-types';
import { TextField } from 'components/TextField';
import { Form, Button } from './ContactEditor.styled';
import { IconPhone, IconUser, IconUserPlus } from 'styles/icons';

const FIELD_HEIGHT = '35px';

export const ContactEditor = props => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = props;
    const success = onSubmit && onSubmit({ name, number });
    if (success) resetForm();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        name="name"
        placeholder="name"
        height={FIELD_HEIGHT}
        icon={IconUser}
        value={name}
        autoComplete="off"
        onChange={e => setName(e?.currentTarget.value || '')}
        pattern="^\s*[A-ZА-Я\u0406ЇЄa-zа-яіїє]{2,}\s*(\s+[A-ZА-Я\u0406ЇЄa-zа-яіїє]{2,})?\s*$"
        title="First and last name(optional) must contain only letters and be at least 2 characters long"
        required
      />

      <TextField
        name="number"
        placeholder="number"
        height={FIELD_HEIGHT}
        icon={IconPhone}
        type="tel"
        value={number}
        autoComplete="off"
        onChange={e => setNumber(e?.target.value || '')}
        pattern="^([\s-]*\d[\s-]*){7}$"
        title="Number must be 7 digits"
        required
      />

      <Button type="submit">
        <IconUserPlus size="20px" /> Add
      </Button>
    </Form>
  );
};

ContactEditor.propTypes = {
  onSubmit: func,
};
