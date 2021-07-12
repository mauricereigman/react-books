import {Book} from "../../models/Book";

export interface BookManagerState {
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
