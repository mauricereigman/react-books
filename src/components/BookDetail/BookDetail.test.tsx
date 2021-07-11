import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookDetail from './BookDetail';

describe('<BookDetail />', () => {
  test('it should mount', () => {
    render(<BookDetail />);
    
    const bookDetail = screen.getByTestId('BookDetail');

    expect(bookDetail).toBeInTheDocument();
  });
});