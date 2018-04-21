import React, { Component } from 'react';
import ContactInfo from '../ContactInfo';
import ContactDetails from '../ContactDetails';

class Contact extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: -1,
      keyword: '',
      contactData: {
        0: {
          id: 0,
          name: 'Abet',
          phone: '010-0000-0001',
        },
        1: {
          id: 1,
          name: 'Betty',
          phone: '010-0000-0002',
        },
        2: {
          id: 2,
          name: 'Charlie',
          phone: '010-0000-0003',
        },
        3: {
          id: 3,
          name: 'David',
          phone: '010-0000-0004',
        },
      },
    };
    this._mapToComponents = this._mapToComponents.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }
  
  _mapToComponents(data) {
    const { _handleClick } = this;
    const { keyword } = this.state;
    const sorted = data.slice().sort((a, b) => a.name > b.name);
    return sorted
      .filter(contact => contact.name.toLowerCase().includes(keyword.toLowerCase()))
      .map(contact => <ContactInfo
        name={contact.name}
        key={contact.id}
        onClick={() => _handleClick(contact.id)} />);
  }

  _handleChange(event) {
    this.setState({
      keyword: event.target.value,
    });
  }

  _handleClick(key) {
    this.setState({
      selectedKey: key,
    });
  }

  render() {
    const { _mapToComponents, _handleChange } = this;
    const { contactData, keyword, selectedKey } = this.state;
    return (
      <div>
        <h1>Contacts</h1>
        <input
          name="keyword"
          placeholder="Search"
          value={keyword}
          onChange={_handleChange} />
        <div>{_mapToComponents(Object.values(contactData))}</div>
        <ContactDetails
          isSelected={selectedKey !== -1}
          contact={contactData[selectedKey]} />
      </div>
    );
  }
}

export default Contact;