import React from 'react';
import {
  StyledLabel,
  StyledInput,
} from 'components/ContactForm/ContactForm.styled';

import { StyledWrapper } from './Filter.styled';

export class Filter extends React.Component {
  render() {
    const { filterState, onFilter } = this.props;
    return (
      <StyledWrapper>
        <StyledLabel>
          Find contact
          <StyledInput
            type="text"
            name="filter"
            value={filterState}
            placeholder="Enter contact's name"
            onChange={e => onFilter(e)}
          />
        </StyledLabel>
      </StyledWrapper>
    );
  }
}
