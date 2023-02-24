import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_URL, ICONS_URL} from '@env';
import type {RootState} from '../store';
import {initialStateProps} from '../../utils/interfaces';

const initialState: initialStateProps = {
  cryptosData: [],
  error: '',
};

export const cryptoApiData = createAsyncThunk(
  'crypto/api',
  async (name: string) => {
    console.log(API_URL, ICONS_URL);
    const response = await axios.get(`${API_URL}/assets/${name}/metrics`);
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
          uri: `${ICONS_URL}/${symbolLower}/50`,
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
  reducers: {},
  extraReducers: builder => {
    builder.addCase(cryptoApiData.fulfilled, (state, action) => {
      const check = state.cryptosData.find(
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

export const selectCount = (state: RootState) => state.crypto;

export default cryptosSlice.reducer;
