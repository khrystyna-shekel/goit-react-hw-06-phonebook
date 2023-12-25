import React from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { StyledWrapper } from './ContactList.Styled';

export class ContactList extends React.Component {
  render() {
    const { contacts, onDeleteContact } = this.props;
    if (!contacts?.length) {
      return (
        <h4 style={{ marginTop: '15px', textAlign: 'center' }}>
          Your phonebook is empty!
        </h4>
      );
    }
    return (
      <StyledWrapper>
        {contacts.map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </StyledWrapper>
    );
  }
}
