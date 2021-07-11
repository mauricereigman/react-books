import React from 'react';
import './App.css';
import {Route, Switch,} from "react-router-dom";
import BooksSearch from "./components/BooksSearch/BooksSearch.lazy";
import BookDetail from "./components/BookDetail/BookDetail.lazy";
import {BooksService} from "./services/Book.service";

function App() {

    const booksService = new BooksService()

    return (
        <div>
            <div>
                <Switch>
                    <Route path="/search">
                        <BooksSearch bookService={booksService}/>
                    </Route>
                    <Route path="/detail/:id">
                        <BookDetail bookService={booksService}/>
                    </Route>
                    <Route path="/">
                        <BooksSearch bookService={booksService}/>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;
