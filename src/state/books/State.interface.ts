import {Book} from "../../models/Book";

export interface BookState {
    foundBooks: {
        searchQuery?: string
        status: BookStatus
        books: Book[]
    }
}

export enum BookStatus{
    Idle,
    Loading,
    Loaded,
    Error
}
