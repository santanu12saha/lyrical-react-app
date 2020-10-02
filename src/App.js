import React from 'react';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import './App.css';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000'
  })
});

const App = () => {
  return (
   <ApolloProvider client={client}>
     <div className="App">Lyrical</div>
   </ApolloProvider> 
  );
};

export default App;