import React, {lazy, Suspense} from 'react';

const LazyBooksSearch = lazy(() => import('./BooksSearch'));

const BooksSearch = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBooksSearch {...props} />
  </Suspense>
);

export default BooksSearch
