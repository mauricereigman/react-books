import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch,} from "react-router-dom";
import BooksSearch from "./components/BooksSearch/BooksSearch.lazy";
import BookDetail from "./components/BookDetail/BookDetail.lazy";

function App() {
  return (
      <div>
          <h1>Search for books</h1>
          <div>
              <Switch>
                  <Route path="/search">
      <BooksSearch/>
                  </Route>
                  <Route path="/detail/:id">
                      <BookDetail/>
                  </Route>
                  <Route path="/">
                      <BooksSearch/>
                  </Route>
              </Switch>
          </div>
    </div>
  );
}

export default App;
