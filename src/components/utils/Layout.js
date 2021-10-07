import React from 'react';
import styled from 'styled-components';

const LayoutWrapper = (props) => {
  return <Div>{props.children}</Div>;
};

export default LayoutWrapper;

const Div = styled.div`
  padding-bottom: 50px;
  padding-top: 60px;
  padding-right: 20px;
  padding-left: 20px;
`;
