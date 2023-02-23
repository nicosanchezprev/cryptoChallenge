import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';

import type {RootState} from '../store';
import {initialStateProps} from '../../utils/interfaces';

const initialState: initialStateProps = {
  cryptosData: [],
  error: '',
};

export const cryptoApiData = createAsyncThunk(
  'crypto/api',
  async (name: string) => {
    const response = await axios.get(
      `https://data.messari.io/api/v1/assets/${name}/metrics`,
    );
    if (response.data.data) {
      const symbolLower = response.data.data.symbol.toLowerCase();
      return {
        id: response.data.data.id,
        name: response.data.data.name,
        symbol: response.data.data.symbol,
        price: response.data.data.market_data.price_usd,
        percentage:
          response.data.data.market_data.percent_change_usd_last_24_hours,
        img: {
          uri: `https://cryptoicons.org/api/color/${symbolLower}/50`,
        },
      };
    } else {
      return response.data.status;
    }
  },
);

const cryptosSlice = createSlice({
  name: 'cryptos',
  initialState,
  reducers: {
    cleanError: state => {
      state.error = '';
    },
    deleteCrypto: (state, action: PayloadAction<string>) => {
      state.cryptosData = state.cryptosData.filter(
        crypto => crypto.name !== action.payload,
      );
    },
  },
  extraReducers: builder => {
    builder.addCase(cryptoApiData.fulfilled, (state, action) => {
      let check = state.cryptosData.find(
        elem => elem.name === action.payload.name,
      );
      if (check === undefined) {
        state.cryptosData.push(action.payload);
      } else {
        state.error = 'This cryptocurrencie is already added!';
      }
    });
    builder.addCase(cryptoApiData.rejected, state => {
      state.error = 'This cryptocurrencie do not exist!';
    });
  },
});

export const {cleanError, deleteCrypto} = cryptosSlice.actions;

export const selectCount = (state: RootState) => state.crypto;

export default cryptosSlice.reducer;