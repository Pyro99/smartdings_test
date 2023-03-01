import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filteredData } from '../utils/filterDataSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector((store) => store.app.isMenuOpen);
  const handleFilterData = () => {
    dispatch(filteredData());
  };

  if (!isVisible) return null;

  return (
    <div className='bg-red-200 mr-2 p-2'>
      <h1
        className='cursor-pointer'
        onClick={() => handleFilterData()}
      >
        Filter By Name
      </h1>
    </div>
  );
};

export default Sidebar;
