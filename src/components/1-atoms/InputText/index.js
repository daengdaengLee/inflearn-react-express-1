import React from 'react';

const InputText = ({ name, placeholder, value, onChange, onKeyPress }) => {
  return <input
    ref={input => this.input = input}
    type="text"
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    onKeyPress={onKeyPress} />;
};

export default InputText