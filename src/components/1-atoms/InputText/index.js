import React from 'react';

const InputText = ({ name, placeholder, value, onChange }) => {
  return <input
    ref={input => this.input = input}
    type="text"
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange} />;
};

export default InputText