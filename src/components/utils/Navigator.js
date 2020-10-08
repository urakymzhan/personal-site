import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Navigator = (props) => {
  let history = useHistory();
  return (
    <Div>
      <Button type="button" onClick={() => history.goBack()}>
        go back
      </Button>
      {props.children}
    </Div>
  );
};

export default Navigator;

const Div = styled.div`
  margin: 10px;
  text-align: left;
`;

const Button = styled.button`
  border: 1px solid #145e98;
  padding: 3px 10px;
  border-radius: 10px;
  box-shadow: -3px -1px 5px 2px lightgray;
  background: transparent;
  color: #145e98;
`;
