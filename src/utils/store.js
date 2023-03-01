import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import cartSlice from './cartSlice';
import filterDataSlice from './filterDataSlice';

const store = configureStore({
  reducer: {
    app: appSlice,
    filterData: filterDataSlice,
    cart : cartSlice,
  },
});

export default store;
