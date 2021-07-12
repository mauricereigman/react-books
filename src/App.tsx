import React from 'react';
import './App.css';
import {Route, Switch,} from "react-router-dom";
import BooksSearch from "./components/BooksSearch/BooksSearch.lazy";
import BookDetail from "./components/BookDetail/BookDetail.lazy";

function App() {
  return (
      <div>
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

export default App
