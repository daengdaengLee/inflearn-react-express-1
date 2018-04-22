import React from 'react';
import Heading from '../../1-atoms/Heading';
import Row from '../../1-atoms/Row';
import Column from '../../1-atoms/Column';
import ButtonText from '../../1-atoms/ButtonText';
import ContactInfo from '../../2-molecules/ContactInfo';
import ContactForm from '../../2-molecules/ContactForm';

const ContactDetails = ({
  id,
  name,
  phone,
  isEditing,
  onClickEdit,
  onClickSave,
  onClickDelete,
  onChange,
  onKeyPress,
}) => (
  <Column>
    <Heading
      level={2} >Details</Heading>
    <Row>
      {id === -1 || isEditing
        ? null 
        : <ButtonText
            onClick={onClickEdit} >Edit</ButtonText>}
      <ButtonText
        onClick={() => onClickDelete(id)} >Delete</ButtonText>
    </Row>
    {
      isEditing
        ? <ContactForm
            heading="Edit Contact"
            button="Save"
            name={name}
            phone={phone}
            onChange={onChange}
            onClick={onClickSave}
            onKeyPress={onKeyPress} />
        : id === -1
          ? <Row>Not Selected</Row>
          : <ContactInfo
              name={name}
              phone={phone} />
    }
  </Column>
);

export default ContactDetails;