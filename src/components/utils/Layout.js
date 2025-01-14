import React from "react";
import styled from "styled-components";

const LayoutWrapper = (props) => {
  return <Div>{props.children}</Div>;
};

export default LayoutWrapper;

const Div = styled.div`
  padding-bottom: 50px;
  padding-top: 60px;
  padding-right: 25px;
  padding-left: 25px;
`;
