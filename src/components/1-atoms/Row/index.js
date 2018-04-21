import React from 'react';
import styled from 'styled-components';

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const Row = ({ children, onClick }) => <FlexRow
  onClick={onClick} >{children}</FlexRow>;

export default Row;