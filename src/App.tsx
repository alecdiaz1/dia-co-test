import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {SortOption} from "./types";

const API_KEY = '49613fe9791946d6b58db406e1d8f0c4'

const Container = styled.div`
  height: 100vh;
  width: 100%;
  
  display: flex;
`

const ResultsContainer = styled.div`
`

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState(SortOption.MOST_RELEVANT)

  return (
    <Container>
        <Navbar
          searchTerm={searchTerm}
          onChangeSearch={setSearchTerm}
          sortOption={sortOption}
          onChangeSort={setSortOption}
        />
    </Container>
  );
}

export default App;
