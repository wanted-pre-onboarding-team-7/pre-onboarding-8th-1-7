import React from 'react';
import styled from 'styled-components';

export default function Page({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #dae2b6;
`;
