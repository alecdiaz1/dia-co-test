import React, {useState} from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import ArticleCard from './components/ArticleCard';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {Article} from "./types";

const API_KEY = '49613fe9791946d6b58db406e1d8f0c4'

const Container = styled.div`
  height: 100vh;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ResultsContainer = styled.div`
  padding: 2rem;
  
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export enum SortOption {
  Relevancy="relevancy",
  Popularity="popularity",
  PublishedAt="publishedAt"
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState(SortOption.PublishedAt);
  const [sortedArticles, setSortedArticles] = useState<Article[]>([]);
  const [error, setError] = useState('');

  const fetchResults = async () => {
    const query = `q=${searchTerm}&sortBy=${sortOption}&language=en&apiKey=${API_KEY}`
    const response = await fetch(`https://newsapi.org/v2/everything?${query}`);

    if (response.status === 400) {
      setError('Invalid search, please try again.')
      return
    }

    const data = await response.json();
    setSortedArticles(data.articles);

    if (data.articles.length === 0) {
      setError('No results found.')
      return
    }

    setError('')
  }

  return (
    <Container>
        <Navbar
          searchTerm={searchTerm}
          onChangeSearch={setSearchTerm}
          sortOption={sortOption}
          onChangeSort={setSortOption}
          onSubmitSearch={fetchResults}
        />
        <ResultsContainer>
          {!error ? sortedArticles.map((article) => (
            <ArticleCard
              imgSrc={article.urlToImage}
              title={article.title}
              publishDate={article.publishedAt}
              content={article.content}
              articleLink={article.url}
            />
          )) : <p>{error}</p>}
        </ResultsContainer>
    </Container>
  );
}

export default App;
