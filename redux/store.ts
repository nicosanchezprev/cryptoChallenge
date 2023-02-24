import {configureStore} from '@reduxjs/toolkit';
import cryptosSlice from './reducersComp/cryptosSlice';

export const store = configureStore({
  reducer: {
    crypto: cryptosSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
