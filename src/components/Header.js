import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { hambugerIcon } from '../utils/constants';
import { toggleMenu } from '../utils/appSlice';

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className='flex justify-between border border-purple-200 p-5 m-2 items-center bg-purple-200 shadow-md rounded-lg'>
      <Link to='/'>
        <h1 className='font-semibold text-3xl cursor-pointer'>
          Shop<span className='text-red-400 text-3xl font-bold'>per</span>
        </h1>
      </Link>
      <div className='font-medium cursor-pointer'>
        <ul className='flex'>
          <li className='p-2 hover:text-red-400 hover:font-bold'>
            <Link to='/'>Home</Link>
          </li>
          <li className='p-2 hover:text-red-400 hover:font-bold'>AboutUs</li>
          <li className='p-2 hover:text-red-400 hover:font-bold'>
            <Link to = '/cart'>Cart {cartItems.length > 0 ? cartItems.length : null}</Link>
          </li>
        </ul>
      </div>
      <div>
        <img
          onClick={() => toggleMenuHandler()}
          className='h-8 cursor-pointer'
          src={hambugerIcon}
          alt='Hamburger Icon'
        ></img>
      </div>
    </div>
  );
};

export default Header;
