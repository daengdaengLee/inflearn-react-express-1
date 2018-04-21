import React from 'react';

const HeadingList = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
};

const Heading = ({ children, level }) => {
  const HeadingTag = HeadingList[level];
  return <HeadingTag>{children}</HeadingTag>;
};

export default Heading;