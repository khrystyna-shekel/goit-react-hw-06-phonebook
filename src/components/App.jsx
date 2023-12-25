import React, { useEffect, useState } from 'react';
import { StyledWrapper } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = JSON.parse(window.localStorage.getItem('contactsData'));
    if (contacts?.length) {
      setContacts(contacts);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('contactsData', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = id => {
    setContacts(prevState => contacts.filter(contact => contact.id !== id));
  };

  const handleAddContact = newContact => {
    setContacts(prevState => [...contacts, newContact]);
  };

  const handleFilterInput = e => {
    setFilter(e.target.value);
  };

  const getFilteredData = () => {
    if (filter) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return contacts;
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 50px',
        flexDirection: 'column',
        fontSize: 28,
        color: '#010101',
      }}
    >
      <StyledWrapper>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} handleAddContact={handleAddContact} />
        <h2>Contacts</h2>
        <Filter filterState={filter} onFilter={handleFilterInput} />
        <ContactList
          contacts={getFilteredData()}
          onDeleteContact={deleteContact}
        />
      </StyledWrapper>
    </div>
  );
};
