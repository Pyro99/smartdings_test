import { createSlice } from '@reduxjs/toolkit';
import { filterData, prevData} from './helper';

const filterDataSlice = createSlice({
  name: 'filterData',
  initialState: {
    data: prevData,
  },
  reducers: {
    filteredData: (state) => {
      state.data = filterData;
    },
  },
});

export const { filteredData } = filterDataSlice.actions;
export default filterDataSlice.reducer;
