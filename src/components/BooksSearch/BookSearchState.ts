import {GridColumns} from "@material-ui/data-grid";
import {Book} from "../../models/Book";
import {BookRow} from "./BookRow";
import {AsyncObjectStatus} from "../../util/AsyncObjectStatus";

export type BookSearchState = {
    books: {
        status: AsyncObjectStatus
        books: Book[],
    }
    table: {
        columns: GridColumns
        rows: BookRow[]
    }
};
