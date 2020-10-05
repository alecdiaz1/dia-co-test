import React from 'react';
import styled from 'styled-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button, Form } from 'react-bulma-components';
import { SortOption } from "../App";

const { Input, Select } = Form;

const Container = styled.div`
  width: 100%;
  height: 5rem;
  background-color: #0077b6;
  
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
`

const InnerContainer = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: 5fr 1fr 1fr;
  gap: 1rem;
`

interface NavbarProps {
  searchTerm: string;
  sortOption: SortOption;
  onChangeSearch: (string) => void;
  onChangeSort: (SortOption) => void;
  onSubmitSearch: () => void;
}

const Navbar = ({ searchTerm, sortOption, onChangeSearch, onChangeSort, onSubmitSearch} : NavbarProps) => (
  <Container>
    <InnerContainer>
      <Input
        placeholder={"Search for some news..."}
        value={searchTerm}
        onChange={(e) => onChangeSearch(e.target.value)}
      />
      <Select
        value={sortOption}
        onChange={(e) => onChangeSort(e.currentTarget.value)}
      >
        <option value={SortOption.PublishedAt}>Published At</option>
        <option value={SortOption.Relevancy}>Relevancy</option>
        <option value={SortOption.Popularity}>Popularity</option>
      </Select>
    <Button onClick={() => onSubmitSearch()}>Search</Button>
    </InnerContainer>
  </Container>
)

export default Navbar;
