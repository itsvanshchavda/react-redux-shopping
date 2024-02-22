import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const CartIcon = () => {
    const count = useSelector((state) => state.cart.cartArray.length) || 0;
    const dispatch = useDispatch();

    return (
        <div className='flex justify-end px-[18rem] mt-[-1rem]'>
            {count > 0 ? (
                <p className='relative bottom-4 left-4 rounded-full text-black font-bold bg-white px-2'>
                    {count}
                </p>
            ) : <p className='relative bottom-4 left-4 rounded-full text-black font-bold bg-white px-2'>
                0
            </p>}
            <NavLink to='/cart' className=' absolute'>
                <FaShoppingCart size={21} />
            </NavLink>
        </div>
    );
};

export default CartIcon;
