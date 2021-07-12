import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import booksReducer from '../state/book-manager/Slice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
