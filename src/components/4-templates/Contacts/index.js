import React, { Fragment } from 'react';
import ContactCreate from '../../3-organisms/ContactCreate';
import ContactDetails from '../../3-organisms/ContactDetails';
import Header from '../../3-organisms/Header';

const Contacts = ({
  search,
  contactList,
  onChangeSearch,
  onClickList,
  selectedName,
  selectedPhone,
  selectedId,
  isEditing,
  onClickEdit,
  onClickSave,
  onClickDelete,
  onChangeEdit,
  createdName,
  createdPhone,
  onChangeCreate,
  onClickCreate,
  onKeyPress
}) => {
  return (
    <Fragment>
      <Header
        search={search}
        contactList={contactList}
        onChange={onChangeSearch}
        onClick={onClickList} />
      <ContactDetails
        id={selectedId}
        name={selectedName}
        phone={selectedPhone}
        isEditing={isEditing}
        onClickEdit={onClickEdit}
        onClickSave={onClickSave}
        onClickDelete={onClickDelete}
        onChange={onChangeEdit}
        onKeyPress={event => onKeyPress('details', event.charCode)} />
      <ContactCreate
        name={createdName}
        phone={createdPhone}
        onChangeCreate={onChangeCreate}
        onClickCreate={onClickCreate}
        onKeyPress={event => onKeyPress('create', event.charCode)} />
    </Fragment>
  );
};

export default Contacts;