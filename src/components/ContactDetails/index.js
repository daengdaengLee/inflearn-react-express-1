import React, { Component } from 'react';

class ContactDetails extends Component {

  render() {
    const { contact, isSelected } = this.props;

    const details = (
      <div>
        <p>{contact.name}</p>
        <p>{contact.phone}</p>
      </div>
    );
    const blank = <div>Not Selected</div>;

    return (
      <div>
        <h2>Details</h2>
        {isSelected ? details : blank}
      </div>
    );
  }

}

ContactDetails.defaultProps = {
  contact: {
    name: '',
    phone: '',
  },
};

export default ContactDetails;