import React from 'react';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from './components/404/NoMatch';
import SongList from './components/Songs/SongList';
import SongCreate from './components/Songs/SongCreate';
import SongDetail from './components/Songs/SongDetail';
import './App.css';
import Main from './components/hoc/Main';

var options = {
  resultCaching: false
};

const client = new ApolloClient({
  cache: new InMemoryCache(options),
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql'
  })
});


const App = () => {
  return (
   <ApolloProvider client={client}>
     <Router>
        <Main>
          <Switch>
            <Route path="/" exact component={SongList} />
            <Route path="/songs/new" component={SongCreate}/>
            <Route path="/songs/:id" component={SongDetail}/>
            <Route path="*" component={NoMatch} />
          </Switch>
        </Main>
     </Router>
   </ApolloProvider> 
  );
};

export default App;