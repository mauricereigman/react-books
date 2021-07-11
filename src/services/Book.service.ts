import {Book} from "../models/Book";
import {GoogleBook} from "./GoogleBook.interface";
import {validateOrReject} from "class-validator";

export class BooksService {
    public getBooks(searchQuery: string): Promise<Book[]> {
        return fetch(`${BooksService.googleBooksApi}/volumes?q=${searchQuery}`)
            .then(res => res.json())
            .then(json => (json.items || []) as GoogleBook[])
            .then(googleBooks => googleBooks.map(BooksService.toAppModel))
    }

    public getBook(id: string): Promise<Book> {
        return fetch(`${BooksService.googleBooksApi}/volumes/${id}`)
            .then(res => res.json())
            .then(json => json as GoogleBook)
            .then(googleBook => BooksService.isGoogleBookValid(googleBook))
            .then(BooksService.toAppModel)
    }

    private static readonly googleBooksApi = "https://www.googleapis.com/books/v1";

    private static isGoogleBookValid(book: GoogleBook): Promise<GoogleBook> {
        return validateOrReject(book)
            .then(res => book)
            .catch(errors => {
                const error = `Promise rejected (validation failed). Errors:, ${errors}`
                console.error(error)
                throw new Error(error)
            })
    }

    private static toAppModel(googleBook: GoogleBook): Book {
        return new Book(googleBook.id, googleBook.volumeInfo.title, googleBook.volumeInfo.publishedDate, googleBook.volumeInfo.imageLinks.thumbnail, googleBook.volumeInfo.authors)
    }
}
