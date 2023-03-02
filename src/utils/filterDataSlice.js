import { createSlice } from '@reduxjs/toolkit';
import { sortData, prevData} from './helper';

const filterDataSlice = createSlice({
  name: 'filterData',
  initialState: {
    data: prevData,
    dummyData : prevData,
  },
  reducers: {
    sortedData: (state) => {
      state.dummyData = sortData;
      state.data = sortData;
    },
    filteredData :(state,action) =>{
      state.dummyData = action.payload;
    }
  },
});

export const { sortedData,filteredData } = filterDataSlice.actions;
export default filterDataSlice.reducer;
