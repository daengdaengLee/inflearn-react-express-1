import React from 'react';

const ContactInfo = ({name, onClick}) => (
  <div
    onClick={onClick} >
    {name}
  </div>
);

export default ContactInfo;