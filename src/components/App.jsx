import React from 'react';
import { StyledWrapper } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  // useEffect(() => {
  //   const contacts = JSON.parse(window.localStorage.getItem('contactsData'));
  //   if (contacts?.length) {
  //     setContacts(contacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem('contactsData', JSON.stringify(contacts));
  // }, [contacts]);

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
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </StyledWrapper>
    </div>
  );
};
