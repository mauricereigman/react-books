import {Book} from "../../models/Book";

export interface BookState {
    foundBooks: {
        status: BookStatus,
        books: Book[]
    }
}

export enum BookStatus{
    Idle,
    Loading,
    Loaded,
    Error
}
