import React from 'react';
import {useAppSelector} from "../../app/hooks";
import {selectFoundBooks} from "../../state/book-manager/Slice";
import {useLocation} from "react-router-dom";
import Title from "../Title/Title.lazy";

const BookDetail = () => {

    const pathParams = useLocation().pathname.split("/")
    const bookIdFromPathParams = pathParams[2];
    const foundBooksState = useAppSelector(selectFoundBooks);
    const book = foundBooksState.books.find(book => book.id === bookIdFromPathParams)

    return (
        <div data-testid="BookDetail">
            <Title title={"Details"}/>

            <h2>
                {book?.title}
            </h2>
            <img src={book?.thumbnail} alt={"book cover"}/>
        </div>
    );
}

export default BookDetail
