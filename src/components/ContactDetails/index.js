import React, { Fragment } from 'react';

const Details = ({name, phone}) => (
  <Fragment>
    <p>{name}</p>
    <p>{phone}</p>
  </Fragment>
);
const Blank = () => <p>Not Selected</p>

const ContactDetails = ({contact, isSelected}) => (
  <div>
    <h2>Details</h2>
    {isSelected ? <Details name={contact.name} phone={contact.phone} /> : <Blank />}
  </div>
);

ContactDetails.defaultProps = {
  contact: {
    name: '',
    phone: '',
  },
};

export default ContactDetails;