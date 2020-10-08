import React from 'react';
import styled from 'styled-components';

const LayoutWrapper = (props) => {
  console.log(props);
  return <Div>{props.children}</Div>;
};

export default LayoutWrapper;

const Div = styled.div`
  padding: 10px;
  padding-bottom: 50px;
  text-align: center;
`;
