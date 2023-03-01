import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
import { closeMenu } from '../utils/appSlice';
const ProductCard = ({ brandName, description, price, image }) => {
  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(
      addItem({
        brandName,
        description,
        price,
        image,
      })
    );
  };

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className='flex flex-wrap'>
      {Array(20)
        .fill('')
        .map((item, indx) => (
          <div
            key={indx}
            className='border border-blue-200 w-72 m-2 p-2'
          >
            <img
              className='h-60'
              src={image}
              alt='product_image'
            />
            <h1 className='font-bold text-xl'>{brandName}</h1>
            <h1>{description}</h1>
            <h1 className='font-bold'>Rs.{price}</h1>
            <button
              className='border border-green-400 bg-green-500 rounded-lg px-3 py-2'
              onClick={() => handleCart()}
            >
              Add to Cart
            </button>
          </div>
        ))}
    </div>
  );
};

export default ProductCard;
