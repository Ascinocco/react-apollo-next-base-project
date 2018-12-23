import React from 'react';
import styled from 'styled-components';

const HelloWorldStyles = styled.div`
  background-color: black;
  color: white;
  height: 250px;
  width: 250px;
`;

const HelloWorld = () => (
  <HelloWorldStyles>
    <p>Hello World</p>
  </HelloWorldStyles>
);

export default HelloWorld;
