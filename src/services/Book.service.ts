import {Book} from "../models/Book";
import {GoogleBook} from "./GoogleBook";
import {validateOrReject} from "class-validator";


export class BooksService {
    private static readonly googleBookValidationErrorMessage = "Validation error on google books api response"
    private static readonly googleBooksApi = "https://www.googleapis.com/books/v1";

    private static googleBooksAreValid(json: any): Promise<GoogleBook[]> {
        const items = json.items
        if (!items) {
            console.error(BooksService.googleBookValidationErrorMessage)
            throw new Error(BooksService.googleBookValidationErrorMessage)
        }

        return Promise.all(items.map((item: any) => BooksService.isGoogleBookValid(item)))
    }

    private static isGoogleBookValid(json: any): Promise<GoogleBook> {
        const googleBookWithValidations = Object.assign(new GoogleBook(), json)
        return validateOrReject(googleBookWithValidations, {forbidUnknownValues: true})
            .then(() => googleBookWithValidations)
            .catch((errors: any) => {
                const error = `${BooksService.googleBookValidationErrorMessage}. Errors:, ${errors}`
                console.error(error)
                throw new Error(error)
            })
    }

    private static toAppModel(googleBook: GoogleBook): Book {
        return new Book(googleBook.id, googleBook.volumeInfo.title, googleBook.volumeInfo.publishedDate, googleBook.volumeInfo.imageLinks.thumbnail, googleBook.volumeInfo.authors)
    }

    public getBooks(searchQuery: string): Promise<Book[]> {
        return fetch(`${BooksService.googleBooksApi}/volumes?q=${searchQuery}`)
            .then(res => res.json())
            .then(BooksService.googleBooksAreValid)
            .then(googleBooks => googleBooks.map(BooksService.toAppModel))
    }

    public getBook(id: string): Promise<Book> {
        return fetch(`${BooksService.googleBooksApi}/volumes/${id}`)
            .then(res => res.json())
            .then(googleBook => BooksService.isGoogleBookValid(googleBook))
            .then(BooksService.toAppModel)
    }
}
