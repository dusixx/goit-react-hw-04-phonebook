import { useState } from 'react';
import { func } from 'prop-types';
import { TextField } from 'components/TextField';
import { Form, Button } from './ContactEditor.styled';
import { IconUserPlus } from 'styles/icons';
import { fieldData } from './fieldData';

export const ContactEditor = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const success =
      onSubmit && onSubmit({ name: name.trim(), number: number.trim() });
    if (success) resetForm();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        name="name"
        placeholder="name"
        height="var(--field-height)"
        autoComplete="off"
        value={name}
        onChange={e => setName(e?.currentTarget.value || '')}
        pattern={fieldData.name.pattern}
        title={fieldData.name.title}
        icon={fieldData.name.icon}
        required
      />

      <TextField
        name="number"
        placeholder="number"
        height="var(--field-height)"
        type="tel"
        autoComplete="off"
        value={number}
        onChange={e => setNumber(e?.target.value || '')}
        pattern={fieldData.number.pattern}
        title={fieldData.number.title}
        icon={fieldData.number.icon}
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
