import {Book} from "../../models/Book";
import {AsyncObjectStatus} from "../../util/AsyncObjectStatus";

export type BookDetailState = {
    status: AsyncObjectStatus
    book?: Book,
};
