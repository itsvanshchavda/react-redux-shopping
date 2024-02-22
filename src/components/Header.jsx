import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CartIcon from './CartIcon';
import { FaBars, FaTimes } from 'react-icons/fa';
import Wishlist from './Wishlist';

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className='w-full h-full py-10 text-white'>
      <NavLink to='/' className='text-3xl cursor-pointer max-sm:text-2xl text-start font-bold text-white px-6 sm:px-20 relative top-11 max-xl:top-10 max-xl:right-16 max-xl:text-xl max-sm:right-1'>
        Shopping <span className='text-indigo-400'>Spot</span>
      </NavLink>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex justify-center items-center gap-5'>
        <li>
          <NavLink to='/' className='text-white'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/' className='text-white'>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to='/' className='text-white'>
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink to='/liked' className='text-white'>
            <Wishlist />
          </NavLink>
        </li>
      </ul>

      <div className='absolute right-1 top-[7em] max-sm:hidden max-xl:relative  max-xl:left-32 max-xl:top-[-1em]'>
         <CartIcon />
       </div>

      {/* Mobile Navigation */}
      <div className='cursor-pointer absolute top-10 right-6 text-gray-500 md:hidden' onClick={() => setNav(!nav)}>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='w-full h-full flex text-xl flex-col justify-center items-center mt-14  gap-2 md:hidden' onClick={() => setNav(!nav)}>
          <li >
            <NavLink to='/' className='text-white' onClick={() => setNav(!nav)}>
              Home
            </NavLink>
          </li >
          <li >
            <NavLink to='/' className='text-white' onClick={() => setNav(!nav)}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to='/' className='text-white' onClick={() => setNav(!nav)}>
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to='/liked' className='text-white' onClick={() => setNav(!nav)}>
              <Wishlist />
            </NavLink>
          </li>
        </ul>
       

      )}

      {/* Cart Icon */}
      <div className='mx-14 md:hidden static mt-20 max-sm:mx-18 '>
        <CartIcon />
      </div>
    </nav>
  );
};

export default Header;
