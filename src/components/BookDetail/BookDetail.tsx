import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import {BooksService} from "../../services/Book.service";
import {BookDetailState} from "./BookDetailState";
import {AsyncObjectStatus} from "../../util/AsyncObjectStatus";
import {CircularProgress} from "@material-ui/core";
import Title from "../Title/Title.lazy";

const BookDetail = () => {
    const initialState: BookDetailState = {
        status: AsyncObjectStatus.Idle,
        book: undefined
    }
    const [state, setState] = useState<BookDetailState>(initialState)
    const bookService = new BooksService()

    const loadBookBy = (id: string): void => {
        const newState = {...state}

        newState.status = AsyncObjectStatus.Loading
        setState(newState);
        bookService.getBook(id)
            .then(book => {
                const newState = {...state}
                newState.book = book
                newState.status = AsyncObjectStatus.Loaded
                setState(newState)
            })
    }

    const pathParams = useLocation().pathname.split("/")
    const bookIdFromPathParams = pathParams[2];
    if (state.status === AsyncObjectStatus.Idle) loadBookBy(bookIdFromPathParams)

    switch (state.status) {
        case AsyncObjectStatus.Idle:
            return null
        case AsyncObjectStatus.Loading:
            return (<CircularProgress/>)
        case AsyncObjectStatus.Loaded:
            return (<div data-testid="BookDetail">
               <Title title={"Book details"}/>
                <h3>{state.book?.title}</h3>
                <img src={state.book?.thumbNail} alt={"book cover image"}/>
            </div>)
        case AsyncObjectStatus.Error:
            return (<div>oops something went wrong!</div>)
    }
}

export default BookDetail;
