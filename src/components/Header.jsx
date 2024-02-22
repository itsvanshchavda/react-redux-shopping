import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CartIcon from './CartIcon';
import { FaBars, FaTimes } from 'react-icons/fa';
import Wishlist from './Wishlist';

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className='w-full h-full py-10 text-white'>
      <NavLink to='/' className='text-3xl max-sm:text-2xl text-start font-bold text-white px-20 relative top-5 max-xl:top-7 max-xl:right-16 max-xl:text-xl max-sm:right-14 '>
        Shopping <span className='text-indigo-400'>Spot</span>
      </NavLink>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex  justify-center items-center gap-5'>
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

      <div className='max-sm:hidden max-xl:hidden max-xl:ml-[23em]'>
        <CartIcon />
      </div>




      {/* Mobile Navigation */}
      <div className='cursor-pointer float-end px-10 mt-[-10px] text-gray-500 md:hidden' onClick={() => setNav(!nav)}>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='w-full  h-full flex text-xl flex-col justify-center items-center mt-10 gap-2 md:hidden' onClick={() => setNav(!nav)}>
          <li>
            <NavLink to='/' className='text-white'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/' className='text-white' >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to='/' className='text-white'>
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to='/liked' className='text-white' >
             <Wishlist />
            </NavLink>
          </li>
        </ul>
      )}

      <div className='mx-14 md:hidden static mt-20 '>
        <CartIcon />
      </div>
    </nav>
  );
};

export default Header;
