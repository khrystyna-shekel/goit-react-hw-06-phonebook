import React from 'react';
import { StyledItem } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <StyledItem>
      <h3>
        {name}: {number}
      </h3>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </StyledItem>
  );
};
