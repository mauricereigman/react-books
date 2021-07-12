import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../../app/store'
import {BooksService} from "../../services/Book.service"
import {BookManagerState, BookStatus} from "./State.interface"
import {Book} from "../../models/Book"

const initialState: BookManagerState = {
    foundBooks: {
        status: BookStatus.Idle,
        books: []
    },
}

const bookService = new BooksService()

// // The function below is called a thunk and allows us to perform async logic. It
// // can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// // will call the thunk with the `dispatch` function as the first argument. Async
// // code can then be executed and other actions can be dispatched. Thunks are
// // typically used to make async requests.
type FindBooksPayload = { searchQuery: string, books: Book[] } | undefined

export const findBooksBy = createAsyncThunk(
    'books/findBooksBy',
    async (searchQuery: string): Promise<FindBooksPayload> => {
        if (!searchQuery) return

        return bookService.getBooks(searchQuery)
            .then(books => ({
                searchQuery,
                books: books
            }))
    }
)

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(findBooksBy.pending, (state) => {
                state.foundBooks.status = BookStatus.Loading
            })
            .addCase(findBooksBy.fulfilled, (state, action: PayloadAction<{ searchQuery: string, books: Book[] } | undefined>) => {
                if (!action.payload) return
                state.foundBooks.status = BookStatus.Idle
                state.foundBooks.searchQuery = action.payload.searchQuery
                state.foundBooks.books = action.payload.books
            })
    },
})

// export const {} = booksSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectFoundBooks = (state: RootState) => state.books.foundBooks


export default booksSlice.reducer
