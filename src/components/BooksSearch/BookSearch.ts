import {GridColumns} from "@material-ui/data-grid";
import {Book} from "../../models/Book";
import {BookRow} from "./BookRow";

export type BookSearchState = {
    books: {
        error: any,
        isLoaded: boolean,
        isLoading: boolean,
        books: Book[],
    }
    table: {
        columns: GridColumns
        rows: BookRow[]
    }
};
