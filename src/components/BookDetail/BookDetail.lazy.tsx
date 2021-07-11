import React, {lazy, Suspense} from 'react';
import {BookDetailProps} from "./BookDetailProps";

const LazyBookDetail = lazy(() => import('./BookDetail'));

const BookDetail = (props: BookDetailProps & { children?: React.ReactNode; }) => (
    <Suspense fallback={null}>
        <LazyBookDetail {...props} />
    </Suspense>
);

export default BookDetail;
