import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 5rem;
  background-color: #0077b6;
  
  display: grid;
  grid-template-columns: 3fr 1fr 1fr
`

const SearchInput = styled.input`

`

const Navbar = () => (
  <Container>
    <input/>
    <button>fff</button>
    <button>fff</button>
  </Container>
)

export default Navbar;
