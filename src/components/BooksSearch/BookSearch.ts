import {GridColumns} from "@material-ui/data-grid";
import {Book} from "../../models/Book";
import {BookRow} from "./BookRow";

export type BookSearchState = {
    table: {
        columns: GridColumns
        rows: BookRow[]
    }
};
