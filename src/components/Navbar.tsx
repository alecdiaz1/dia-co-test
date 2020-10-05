import React from 'react';
import styled from 'styled-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button, Form } from 'react-bulma-components';
import { SortOption } from "../types";

const { Input, Select } = Form;

const Container = styled.div`
  width: 100%;
  height: 5rem;
  background-color: #0077b6;
  
  padding: 1rem 1rem;
  
  display: grid;
  grid-template-columns: 5fr 1fr 1fr;
  gap: 1rem;
`

interface NavbarProps {
  searchTerm: string;
  sortOption: SortOption;
  onChangeSearch: (string) => void;
  onChangeSort: (SortOption) => void;
}

const Navbar = (props: NavbarProps) => (
  <Container>
    <Input
      placeholder={"Search for some news..."}
      value={props.searchTerm}
      onChange={(e) => props.onChangeSearch(e.target.value)}
    />
    <Select
      value={props.sortOption}
      onChange={(e) => props.onChangeSort(e.currentTarget.value)}
    >
      <option value={SortOption.MOST_RECENT}>Most recent</option>
      <option value={SortOption.OLDEST}>Oldest</option>
      <option value={SortOption.MOST_RELEVANT}>Most relevant</option>
      <option value={SortOption.LEAST_RELEVANT}>Least relevant</option>
      <option value={SortOption.MOST_POPULAR}>Most Popular</option>
      <option value={SortOption.LEAST_POPULAR}>Least popular</option>
    </Select>
    <Button>Search</Button>
  </Container>
)

export default Navbar;
