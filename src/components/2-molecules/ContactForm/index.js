import React from 'react';
import Column from '../../1-atoms/Column';
import Heading from '../../1-atoms/Heading';
import InputText from '../../1-atoms/InputText';
import ButtonText from '../../1-atoms/ButtonText';

const ContactForm = ({ heading, button, name, phone, onChange, onClick }) => {
  return (
    <Column>
      <Heading
        level={2} >{heading}</Heading>
      <InputText
        name="name"
        placeholder="name"
        value={name}
        onChange={event => onChange('name', event.target.value)} />
      <InputText
        name="phone"
        placeholder="phone"
        value={phone}
        onChange={event => onChange('phone', event.target.value)} />
      <ButtonText
        onClick={onClick} >{button}</ButtonText>
    </Column>
  );
};

export default ContactForm;