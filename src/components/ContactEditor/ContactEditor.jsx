import { useState } from 'react';
import { func } from 'prop-types';
import { TextField } from 'components/TextField';
import { Form, Button } from './ContactEditor.styled';
import { IconPhone, IconUser, IconUserPlus } from 'styles/icons';

export const ContactEditor = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const success = onSubmit && onSubmit({ name, number });
    if (success) resetForm();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        name="name"
        placeholder="name"
        height="var(--field-height)"
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
        height="var(--field-height)"
        icon={IconPhone}
        type="tel"
        value={number}
        autoComplete="off"
        onChange={e => setNumber(e?.target.value || '')}
        pattern="^([\s-]*\d[\s-]*){7}$"
        title="The number must be 7 digits long and may contain spaces and hyphens"
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
