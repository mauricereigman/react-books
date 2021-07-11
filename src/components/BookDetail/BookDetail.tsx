import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import {BooksService} from "../../services/Book.service";
import {BookDetailState} from "./BookDetailState";
import {AsyncObjectStatus} from "../../util/AsyncObjectStatus";

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
        bookService.getBook(id)
            .then(book => {
                newState.book = book
                newState.status = AsyncObjectStatus.Loaded
                setState(newState)
            })
    }

    const pathParams = useLocation().pathname.split("/")
    const bookIdFromPathParams = pathParams[2];

    console.log(state);
    if (state.status === AsyncObjectStatus.Idle) loadBookBy(bookIdFromPathParams)

    return (
        <div data-testid="BookDetail">
            <h2>
                {state.book?.title}
            </h2>
            <img src={state.book?.thumbNail}/>
        </div>
    );
}

export default BookDetail;
