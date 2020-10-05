import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';

const API_KEY = '49613fe9791946d6b58db406e1d8f0c4'

const Container = styled.div`
  height: 100vh;
  width: 100%;
  
  display: flex;
`

const ResultsContainer = styled.div`

`

function App() {
  return (
    <Container>
        <Navbar/>
    </Container>
  );
}

export default App;
