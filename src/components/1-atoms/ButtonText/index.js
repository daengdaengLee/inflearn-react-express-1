import React from 'react';

const ButtonText = ({ children, onClick }) => <button
  onClick={onClick} >{children}</button>;

export default ButtonText;