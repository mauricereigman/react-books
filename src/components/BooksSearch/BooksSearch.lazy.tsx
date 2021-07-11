import React, {lazy, Suspense} from 'react';
import {BookSearchProps} from "./BookSearchPropss";

const LazyBooksSearch = lazy(() => import('./BooksSearch'));

const BooksSearch = (props: BookSearchProps & { children?: React.ReactNode; }) => (
    <Suspense fallback={null}>
        <LazyBooksSearch {...props} />
    </Suspense>
);

export default BooksSearch;
