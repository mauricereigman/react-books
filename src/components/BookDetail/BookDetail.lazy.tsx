import React, { lazy, Suspense } from 'react';

const LazyBookDetail = lazy(() => import('./BookDetail'));

const BookDetail = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBookDetail {...props} />
  </Suspense>
);

export default BookDetail;
