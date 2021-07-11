import React, {lazy, Suspense} from 'react';
import {TitleProps} from "./TitleProps";

const LazyTitle = lazy(() => import('./Title'));

const Title = (props: TitleProps & { children?: React.ReactNode; }) => (
    <Suspense fallback={null}>
        <LazyTitle {...props} />
    </Suspense>
);

export default Title;
