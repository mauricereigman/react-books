import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BooksSearch from './BooksSearch';

describe('<BooksSearch />', () => {
  test('it should mount', () => {
    render(<BooksSearch />);
    
    const booksSearch = screen.getByTestId('BooksSearch');

    expect(booksSearch).toBeInTheDocument();
  });
});
