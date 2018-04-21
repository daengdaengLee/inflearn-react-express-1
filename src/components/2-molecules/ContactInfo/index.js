import React from 'react';
import Column from '../../1-atoms/Column';
import Row from '../../1-atoms/Row';

const ContactInfo = ({ name, phone }) => (
  <Column>
    <Row>name: {name}</Row>
    <Row>phone: {phone}</Row>
  </Column>
);

export default ContactInfo;