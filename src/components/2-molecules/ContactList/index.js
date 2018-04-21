import React from 'react';
import Column from '../../1-atoms/Column';
import Row from '../../1-atoms/Row';

const ContactList = ({ contactList, onClick }) => (
  <Column>
    {contactList.map(contact => <Row
      key={contact.id}
      onClick={() => onClick(contact.id)} >{contact.name}</Row>)}
  </Column>
);

export default ContactList;