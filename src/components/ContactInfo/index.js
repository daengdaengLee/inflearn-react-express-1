import React, { Component } from 'react';

class ContactInfo extends Component {
  render() {
    const { contact } = this.props;
    return (
        <div>
          {contact.name} {contact.phone}
        </div>
    );
  }
}

export default ContactInfo;