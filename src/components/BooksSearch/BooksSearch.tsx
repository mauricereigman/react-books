import React, {useCallback} from 'react';
import styles from './BooksSearch.module.scss';
import {DataGrid, GridRowParams} from "@material-ui/data-grid";
import {Book} from "../../models/Book";
import {BookRow} from "./BookRow";
import {CircularProgress, debounce, TextField} from "@material-ui/core";
import {useHistory} from 'react-router-dom';
import {findBooksBy, selectFoundBooks} from "../../state/books/Slice";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {BookStatus} from "../../state/books/State.interface";
import Title from "../Title/Title.lazy";

const BooksSearch = () => {

    const history = useHistory();
    const dispatch = useAppDispatch();

    const foundBooksState = useAppSelector(selectFoundBooks);
    const table = {
        columns: [
            { field: 'id', headerName: 'id', width: 250 },
            { field: 'title', headerName: 'title', width: 250 },
            { field: 'authors', headerName: 'authors', width: 250 },
            { field: 'publishDate', headerName: 'publish date', width: 250 },
        ],
        rows: foundBooksState.books.map(toTableRowFromBook)
    }

    function toTableRowFromBook(book: Book): BookRow {
        return {
            id: book.id,
            title: book.title,
            authors: book.authors?.join(", ") || "",
            publishDate: book.publishedDate,
        }
    }

    const debouncedLoadBooksBy = useCallback(
        debounce((searchQuery: string) => dispatch(findBooksBy(searchQuery)), 1000),
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
            <Title title={"Search"} subTitle={"Find some books"}/>
            <TextField
                id="Search"
                label="Search"
                placeholder={"type a query and press enter"}
                onChange={handleSearchInput}/>
            <span className={styles.spinner}>
                {foundBooksState.status === BookStatus.Loading ? (<CircularProgress/>) : null}
            </span>
            <DataGrid
                rows={table.rows}
                columns={table.columns}
                onRowClick={handleRowClick}
            />
        </div>
    );
}

export default BooksSearch;
