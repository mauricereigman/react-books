import React, {useState} from 'react';
import styles from './BooksSearch.module.scss';
import {BooksService} from "../../services/Book.service";
import {DataGrid} from "@material-ui/data-grid";
import {BookSearchState} from "./BookSearch";
import {Book} from "../../models/Book";
import {BookRow} from "./BookRow";

const BooksSearch = () => {

    const initialState = {
        books: {
            error: null,
            isLoaded: false,
            isLoading: false,
            books: []
        },
        table: {
            columns: [
                {field: 'id', headerName: 'id', width: 250},
                {field: 'title', headerName: 'title', width: 250},
                {field: 'authors', headerName: 'authors', width: 250},
                {field: 'publishDate', headerName: 'publish date', width: 250},
            ],
            rows: []
        }
    }

    const [state, setState] = useState<BookSearchState>(initialState)
    const bookService = new BooksService()

    const loadBooksBy = (searchQuery: string): void => {
        if (!searchQuery) return

        const newState = {...state}
        newState.books.isLoading = true
        setState(newState)
        bookService.getBooks(searchQuery)
            .then(books => {
                console.log("tableRowsFrom(books)",tableRowsFrom(books))
                const newState = {...state}
                newState.books.isLoaded = true
                newState.books.books = books
                newState.table.rows = tableRowsFrom(books)
                newState.books.isLoading = false
                setState(newState)
            })
            .catch(error => {
                const newState = {...state}
                newState.books.isLoading = false
                newState.books.error = error
                setState(newState)
            })
    }

    const tableRowsFrom = (books: Book[]): BookRow[] => {
        return books.map(book => ({
            id: book.id,
            title: book.title,
            authors: book.authors?.join(", ") || "",
            publishDate: book.publishedDate,
        }))
    }

    if (state.books.isLoaded || state.books.isLoading) {/*do nothing*/
    } else loadBooksBy("harry potter");

    return (
        <div className={styles.BooksSearch} data-testid="BooksSearch">
            <DataGrid
                rows={state.table.rows}
                columns={state.table.columns}
            />
        </div>
    );
}

export default BooksSearch;
