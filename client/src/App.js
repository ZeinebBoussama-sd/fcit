import React from 'react';
import Nav from './component/Nav';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Admin from './pages/Admin';
import Footer from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './foundation/style.css';
import '@fortawesome/fontawesome-free';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import NotFound from './pages/NotFound';

function App() {
  // Create a client
  const client = new ApolloClient({
    uri: 'http://localhost:4000',
  });

  return (
    //<ApolloProvider client={client}> connect client to react
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/apropos' exact component={Apropos} />
          <Route path='/admin' exact component={Admin} />
          <Route path='/' component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
