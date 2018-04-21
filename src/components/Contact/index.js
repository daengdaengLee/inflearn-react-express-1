import React, { Component } from 'react';
import ContactInfo from '../ContactInfo';

class Contact extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      contactData: [
        {
          name: 'Abet',
          phone: '010-0000-0001',
        },
        {
          name: 'Betty',
          phone: '010-0000-0002',
        },
        {
          name: 'Charlie',
          phone: '010-0000-0003',
        },
        {
          name: 'David',
          phone: '010-0000-0004',
        },
      ],
    };
    this._mapToComponents = this._mapToComponents.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }
  
  _mapToComponents(data) {
    const { keyword } = this.state;
    const sorted = data.slice().sort((a, b) => a.name > b.name);
    return sorted
      .filter(contact => contact.name.toLowerCase().includes(keyword.toLowerCase()))
      .map((contact, index) => <ContactInfo contact={contact} key={index} />);
  }

  _handleChange(event) {
    this.setState({
      keyword: event.target.value,
    });
  }

  render() {
    const { _mapToComponents, _handleChange } = this;
    const { contactData, keyword } = this.state;
    return (
      <div>
        <h1>Contacts</h1>
        <input
          name="keyword"
          placeholder="Search"
          value={keyword}
          onChange={_handleChange} />
        <div>{_mapToComponents(contactData)}</div>
      </div>
    );
  }
}

export default Contact;