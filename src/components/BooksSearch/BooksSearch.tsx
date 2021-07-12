import React, {FC, useCallback, useState} from 'react';
import styles from './BooksSearch.module.scss';
import {BooksService} from "../../services/Book.service";
import {DataGrid, GridRowParams} from "@material-ui/data-grid";
import {BookSearchState} from "./BookSearchState";
import {Book} from "../../models/Book";
import {BookRow} from "./BookRow";
import {CircularProgress, debounce, TextField} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {AsyncObjectStatus} from "../../util/AsyncObjectStatus";
import Title from "../Title/Title.lazy";
import {BookSearchProps} from "./BookSearchPropss";

const BooksSearch: FC<BookSearchProps> = (props) => {

    const history = useHistory()
    const initialState: BookSearchState = {
        books: {
            status: AsyncObjectStatus.Idle,
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

    const loadBooksBy = (searchQuery: string): void => {
        if (!searchQuery) return

        const newState = {...state}
        newState.books.status = AsyncObjectStatus.Loading
        setState(newState)
        props.bookService.getBooks(searchQuery)
            .then(books => {
                const newState = {...state}
                newState.books.status = AsyncObjectStatus.Loaded
                newState.books.books = books
                newState.table.rows = tableRowsFrom(books)
                setState(newState)
            })
            .catch(error => {
                const newState = {...state}
                newState.books.status = AsyncObjectStatus.Error
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

    const debouncedLoadBooksBy = useCallback(
        debounce((searchQuery: string) => loadBooksBy(searchQuery), 1000),
        []
    )

    const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        debouncedLoadBooksBy(event.target.value)
    }

    const handleRowClick = (params: GridRowParams, event: React.MouseEvent): void => {
        history.push(`/detail/${params.id}`)
    }

    return (
        <div className={styles.BooksSearch} data-testid="BooksSearch">
            <Title title={"Books 4 You!"} subTitle={"Find some books"} color={"orange"}/>
            <TextField
                id="Search"
                label="Search"
                placeholder={"type a query and press enter"}
                onChange={handleSearchInput}/>
            <span className={styles.spinner}>
                {state.books.status === AsyncObjectStatus.Loading ? (<CircularProgress/>) : null}
            </span>
            <DataGrid
                rows={state.table.rows}
                columns={state.table.columns}
                onRowClick={handleRowClick}
            />
        </div>
    );

}

export default BooksSearch;
