import React from 'react';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import SongList from './components/Songs/SongList';
import './App.css';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql'
  })
});

const App = () => {
  return (
   <ApolloProvider client={client}>
     <SongList/>
   </ApolloProvider> 
  );
};

export default App;