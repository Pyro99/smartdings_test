import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filteredData, sortedData } from '../utils/filterDataSlice';

const Sidebar = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const isVisible = useSelector((store) => store.app.isMenuOpen);
  const allData=useSelector(store => store.filterData.data);
  const handleFilterData = () => {
    dispatch(sortedData());
  };
  const handleFilter = (search) => {
    const newData = allData.filter(i => i.name.toLowerCase().includes(search.toLowerCase()));
    dispatch(filteredData(newData));
  }

  if (!isVisible) return null;

  return (
    <div className='bg-red-200 mr-2 p-2'>
      <h1
        className='cursor-pointer shadow-lg border m-2 p-2 text-center'
        onClick={() => handleFilterData()}
      >
        Sort By Name
      </h1>
      <div className='flex flex-col items-center'>
        <input
          type='text'
          placeholder='Type here'
          className='px-2 py-1 outline-none mt-3'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className='px-2 py-1 border border-white shadow-lg mt-4 w-24'
          onClick={() => handleFilter(search)}
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
