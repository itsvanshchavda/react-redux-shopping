import React from 'react';
import { useGetProductsQuery } from '../api/api';
import ProductAll from './ProductAll';
import CartIcon from './CartIcon';
import Loader from './Loader';

const Products = () => {
  const { isFetching, isLoading, isSuccess, error, data } = useGetProductsQuery("");


  return <>

  {isFetching && <Loader />}
    <div className='text-white px-20'>
      <div className='grid lg:grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-xl:grid-col-3 gap-5'>


        {isSuccess && data.products.map((item) => (
          <ProductAll key={item.id} item={item} />

        ))}
      </div>
    </div>
  </>
};

export default Products;
