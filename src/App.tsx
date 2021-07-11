import React from 'react';
import logo from './logo.svg';
import './App.css';
import BooksSearch from "./components/BooksSearch/BooksSearch.lazy";

function App() {
  return (
    <div className="App">
      <BooksSearch/>
    </div>
  );
}

export default App;
