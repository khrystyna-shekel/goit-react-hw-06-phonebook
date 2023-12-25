import React, { useState } from 'react';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledBtn,
} from './ContactForm.styled';
import { nanoid } from 'nanoid';

export const ContactForm = ({ contacts, handleAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInput = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (contacts.some(contact => contact.name === name)) {
      alert(`Contact with name ${name} already exists!`);
      return;
    }

    handleAddContact(newContact);
    setName('');
    setNumber('');
  };

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <StyledLabel>
        Name
        <StyledInput
          onChange={handleInput}
          name="name"
          type="text"
          value={name}
          required
        />
      </StyledLabel>
      <StyledLabel>
        Number
        <StyledInput
          onChange={handleInput}
          name="number"
          type="tel"
          value={number}
          required
        />
      </StyledLabel>
      <StyledBtn type="submit">Add to contact</StyledBtn>
    </StyledForm>
  );
};
