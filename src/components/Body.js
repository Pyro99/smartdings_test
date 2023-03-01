import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Body = () => {
  return (
    <div className='flex justify-between w-full'>
      <div className='w-full'>
        <Outlet />
      </div>
      <Sidebar />
    </div>
  );
};

export default Body;
