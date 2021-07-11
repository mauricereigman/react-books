import {Book} from "../models/Book";
import {GoogleBook} from "./GoogleBook.interface";

export class BooksService {
    private static readonly googleBooksApi = "https://www.googleapis.com/books/v1";

    public getBooks(searchQuery: string): Promise<Book[]> {
        return fetch(`${BooksService.googleBooksApi}/volumes?q=${searchQuery}`)
            .then(res => res.json())
            .then(json => (json.items || []) as GoogleBook[])
            .then(googleBooks => googleBooks.map(BooksService.toAppModel))
    }

    private static toAppModel(googleBook: GoogleBook): Book {
        return new Book(googleBook.id, googleBook.volumeInfo.title, googleBook.volumeInfo.publishedDate, googleBook.volumeInfo.authors)
    }
}
