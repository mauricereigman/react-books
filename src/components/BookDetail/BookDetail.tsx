import React from 'react';
import {useAppSelector} from "../../app/hooks";
import {selectFoundBooks} from "../../state/books/Slice";
import {useLocation} from "react-router-dom";

const BookDetail = () => {

    const pathParams = useLocation().pathname.split("/")
    const bookIdFromPathParams = pathParams[2];
    const foundBooksState = useAppSelector(selectFoundBooks);
    const book = foundBooksState.books.find(book => book.id === bookIdFromPathParams)
    console.log({pathParams, bookIdFromPathParams, foundBooksState, book})


    return (
        <div data-testid="BookDetail">
            <h2>
                {book?.title}
            </h2>
            <img src={book?.thumbNail}/>
        </div>
    );
}

export default BookDetail;
