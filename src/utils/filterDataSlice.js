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
      state.dummyData = state.dummyData.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });   
      state.data = sortData;
    },
    filteredData :(state,action) =>{
      state.dummyData = action.payload;
    }
  },
});

export const dummyData = filterDataSlice.dummyData;
export const { sortedData,filteredData } = filterDataSlice.actions;
export default filterDataSlice.reducer;
