import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeLike } from '../features/AddLike';

const ShowLikedProducts = () => {
  const dispatch = useDispatch();
  const likedItems = useSelector((state) => state.like.likedProducts) || [];

  const handleRemoveLike = (productId) => {
    dispatch(removeLike({ productId }));
  };

  return (
    <div className='text-white'>
      {likedItems.length === 0 ? <h1 className='text-center text-2xl'>No liked products</h1> : <h1 className='text-center text-2xl'>Wishlist Products</h1>}


      <div className='grid lg:grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-xl:grid-col-3 text-center px-20 '>

        {likedItems.map((item) => (
          <div key={item.id} className='p-4 rounded-lg m-2 bg-gray-600 gap-10 px-10'>
            <img src={item.thumbnail} alt={item.title} className=' rounded-md ' />
            <h1>{item.title}</h1>
            <p>${item.price}</p>

            <button className='bg-red-500 p-2 rounded-md mt-1 hover:bg-red-700 font-bold' onClick={() => handleRemoveLike(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowLikedProducts;
