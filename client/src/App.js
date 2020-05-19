import React from "react";
import Nav from "./component/Nav";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Admin from "./pages/Admin";
import Footer from "./component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./foundation/style.css";
import "@fortawesome/fontawesome-free";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import NotFound from "./pages/NotFound";
import { onError } from "apollo-link-error";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { StoreProvider } from "easy-peasy";
import { SnackbarStore } from "./component/snackbarStore";
import ErrorSnackbar from "./component/ErrorSnackbar";

function App() {
  const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql",
  });

  const errorlink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, path }) => {
        console.log(`[GraphQL error]: Message: ${message},  Path: ${path}`);
        // if (message.includes('cin_p')) {
        //   history.push('/admin');
        // } else {
        //console.log('dispatch');
        SnackbarStore.dispatch.snackbar.handleOpen(message);
        // }
      });
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  // Create a client
  const client = new ApolloClient({
    link: errorlink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    //<ApolloProvider client={client}> connect client to react
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/apropos" exact component={Apropos} />
          <Route path="/admin" exact component={Admin} />
          <Route path="*" component={NotFound} />
        </Switch>
        <StoreProvider store={SnackbarStore}>
          <ErrorSnackbar />
        </StoreProvider>
        <Footer />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
