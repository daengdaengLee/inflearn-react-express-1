import React from 'react';
import Heading from '../../1-atoms/Heading';
import Column from '../../1-atoms/Column';
import InputText from '../../1-atoms/InputText';
import ContactList from '../../2-molecules/ContactList';

const filterAndSort = (contactList, filterKeyword) => contactList
  .filter(contact => contact.name.toLowerCase().includes(filterKeyword.toLowerCase()))
  .sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase());

const Header = ({ search, contactList, onChange, onClick }) => {
  return (
    <Column>
      <Heading
        level={1 }>Contacts</Heading>
      <InputText
        name="search"
        placeholder="Search"
        value={search}
        onChange={event => onChange(event.target.value)} />
      <ContactList
        contactList={filterAndSort(contactList, search)}
        onClick={onClick} />
    </Column>
  )
};

export default Header;