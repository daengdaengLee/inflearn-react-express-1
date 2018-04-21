import React, { Component } from 'react';
import Contacts from '../../4-templates/Contacts';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchKeyword: '',
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
      lastContactId: 4,
      isEditing: false,
      selectedContact: {
        id: -1,
        name: '',
        phone: '',
      },
      createdContact: {
        name: '',
        phone: '',
      },
    };
    this._handleChangeSearch = this._handleChangeSearch.bind(this);
    this._handelChangeEdit = this._handelChangeEdit.bind(this);
    this._handleChangeCreate = this._handleChangeCreate.bind(this);
    this._handleClickList = this._handleClickList.bind(this);
    this._handleClickEdit = this._handleClickEdit.bind(this);
    this._handleClickSave = this._handleClickSave.bind(this);
    this._handleClickDelete = this._handleClickDelete.bind(this);
    this._handleClickCreate = this._handleClickCreate.bind(this);
  }

  _handleChangeSearch(value) {
    this.setState({
      searchKeyword: value,
    });
  }

  _handelChangeEdit(target, value) {
    this.setState(prevState => {
      return {
        selectedContact: {
          ...prevState.selectedContact,
          [target]: value,
        },
      };
    });
  }

  _handleChangeCreate(target, value) {
    this.setState(prevState => {
      return {
        createdContact: {
          ...prevState.createdContact,
          [target]: value,
        },
      };
    });
  }

  _handleClickList(id) {
    const selectedContact = this.state.contactData[id];
    this.setState({
      selectedContact,
      isEditing: false,
    });
  }

  _handleClickEdit() {
    this.setState(prevState => ({
      isEditing: !prevState.isEditing,
    }));
  }

  _handleClickSave() {
    this.setState(prevState => {
      const { selectedContact } = prevState;
      return {
        contactData: {
          ...prevState.contactData,
          [selectedContact.id]: selectedContact,
        },
        isEditing: false,
      };
    });
  }

  _handleClickDelete(id) {
    const contactData = { ...this.state.contactData };
    delete contactData[id];
    this.setState({ 
      contactData,
      selectedContact: {
        id: -1,
        name: '',
        phone: '',
      },
    });
  }

  _handleClickCreate() {
    this.setState(prevState => {
      const id = prevState.lastContactId;
      const { name, phone } = prevState.createdContact;
      return {
        contactData: {
          ...prevState.contactData,
          [id]: {
            id,
            name,
            phone,
          },
        },
        createdContact: {
          name: '',
          phone: '',
        },
        lastContactId: id + 1,
      };
    });
  }


  render() {
    const {
      _handelChangeEdit,
      _handleChangeCreate,
      _handleChangeSearch,
      _handleClickDelete,
      _handleClickCreate,
      _handleClickEdit,
      _handleClickList,
      _handleClickSave
    } = this; 
    const { searchKeyword, contactData, selectedContact, isEditing, createdContact } = this.state;
    return <Contacts
      search={searchKeyword}
      contactList={Object.values(contactData)}
      onChangeSearch={_handleChangeSearch}
      onClickList={_handleClickList}
      selectedId={selectedContact.id}
      selectedName={selectedContact.name}
      selectedPhone={selectedContact.phone}
      isEditing={isEditing}
      onClickEdit={_handleClickEdit}
      onClickSave={_handleClickSave}
      onClickDelete={_handleClickDelete}
      onChangeEdit={_handelChangeEdit}
      createdName={createdContact.name}
      createdPhone={createdContact.phone}
      onChangeCreate={_handleChangeCreate}
      onClickCreate={_handleClickCreate} />;
  }

}

export default App;