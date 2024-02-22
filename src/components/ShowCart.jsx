// ShowCart component
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeQuantity, removeFromCart } from '../features/AddToCart';


const ShowCart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.cartArray) || [];



  const handleQuantityChange = (id, quantity) => {
    dispatch(changeQuantity({ id, quantity }));

  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const carttotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return <>
    <div className='px-20 text-white text-center'>
      {items.length === 0 ? (
        <h1 className='text-2xl'>No items in cart</h1>
      ) : (
        <h1 className='font-bold text-2xl text-center '>Cart Products</h1>
      )}

      <div className='grid lg:grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-xl:grid-col-3 py-10'>
        {items.map((item) => (
          <div key={item.id} className='p-4 rounded-lg m-2 bg-gray-600 gap-10 px-10'>
            <img src={item.thumbnail} alt={item.title} className='rounded-md' />
            <h1 className='text-white'>{item.title}</h1>
            <p className='text-white'>${item.price}</p>

            <div className='flex justify-center gap-4 p-2'>
              <button className='bg-gray-700 px-2 font-bold' onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
                -
              </button>
              <input className=' bg-gray-700  w-9 text-white pl-3 font-bold ' type="number" value={item.quantity} readOnly />
              <button className='bg-gray-700 px-2 font-bold' onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                +
              </button>
            </div>

            <button className='bg-red-500 p-2 rounded-md mt-1 hover:bg-red-700 font-bold' onClick={() => handleRemoveFromCart(item.id)}>
              Remove
            </button>

          </div>

        ))}

      </div>

    </div>

    {items.length > 0 &&

      <div className='text-white font-bold text-2xl flex gap-5 justify-center items-center pb-10'>
        <p>Total Bill</p>
        <p>${carttotal}</p>
      </div>}

  </>
};

export default ShowCart;
