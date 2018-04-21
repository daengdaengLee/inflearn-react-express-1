import React from 'react';
import ContactForm from '../../2-molecules/ContactForm';

const ContactCreate = ({ name, phone, onChangeCreate, onClickCreate }) => {
  return <ContactForm
    heading="Create Contact"
    button="Create"
    name={name}
    phone={phone}
    onChange={onChangeCreate}
    onClick={onClickCreate} />;
};

export default ContactCreate;
