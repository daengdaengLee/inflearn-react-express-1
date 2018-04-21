import React, { Component } from 'react';

class ContactInfo extends Component {
  render() {
    const { contact, onClick } = this.props;
    return (
        <div onClick={onClick}>
          {contact.name}
        </div>
    );
  }
}

export default ContactInfo;