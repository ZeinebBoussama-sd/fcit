import React, { useState } from "react";
import Nav from "./component/Nav";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./foundation/style.css";
import "@fortawesome/fontawesome-free";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import NotFound from "./pages/NotFound";
import { onError } from "apollo-link-error";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";
import { StoreProvider } from "easy-peasy";
import { SnackbarStore } from "./component/snackbarStore";
import ErrorSnackbar from "./component/ErrorSnackbar";
import { createUploadLink } from "apollo-upload-client";
import Login from "./pages/Login";
import { getAccessToken } from "./Utils/AccessToken";
import history from "./Utils/history";
import NosCenter from "./pages/NosCenter";

function App() {
  const httpLink = createUploadLink({
    uri: "http://localhost:4000",
    //credentials: 'include',
  });
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem("token");
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });
  const errorlink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, path }) => {
        console.log(`[GraphQL error]: Message: ${message},  Path: ${path}`);
        // if (message.includes('cin_p')) {
        //   <Redirect push to="/admin" />
        // } else {
        //console.log('dispatch');
        SnackbarStore.dispatch.snackbar.handleOpen(message);
        // }
      });
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  // Create a client
  const client = new ApolloClient({
    link: authLink.concat(errorlink.concat(httpLink)),
    request: (operation) => {
      const token = getAccessToken();
      if (token) {
        operation.setContext({
          headers: {
            authorization: token ? `Bearer ${token}` : "",
          },
        });
      }
    },
    cache: new InMemoryCache(),
  });
  return (
    //<ApolloProvider client={client}> connect client to react
    <ApolloProvider client={client}>
      <BrowserRouter history={history}>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/apropos" exact component={Apropos} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/login" exact component={Login} />
          <Route path="/nos_centres" exact component={NosCenter} />
          <Route path="*" component={NotFound} />
        </Switch>
        <StoreProvider store={SnackbarStore}>
          <ErrorSnackbar />
        </StoreProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
