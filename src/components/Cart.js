import { useDispatch, useSelector } from 'react-redux';
import { clearCart} from '../utils/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const clearCartHandler = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <div className='flex flex-wrap'>
        {cartItems.map((i,indx) => (
          <div key={indx} className='border border-blue-200 w-72 m-2 p-2'>
            <img
              className='h-60'
              src={i.image}
              alt='product_image'
            />
            <h1 className='font-bold text-xl'>{i.brandName}</h1>
            <h1>{i.description}</h1>
            <h1 className='font-bold'>Rs.{i.price}</h1>
          </div>
        ))}
      </div>
      {cartItems.length > 0 ? (
        <button
          className='font-semibold bg-red-300 rounded-lg px-3 py-2'
          onClick={() => clearCartHandler()}
        >
          Clear Cart
        </button>
      ) : <h1 className='text-3xl'>Cart is empty!!</h1>}
    </>
  );
};

export default Cart;
