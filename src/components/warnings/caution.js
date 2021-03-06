import React from 'react';
import styled from "@emotion/styled";

const CautionContainer = styled.div`
  background-color: #9a0007;
  color: white;
  padding: 1rem;
  
  a {
    color: #26aef9;
  }
`

export default function Caution({ children }) {
  return <CautionContainer>
    <strong>Caution!</strong> {children}
  </CautionContainer>
}