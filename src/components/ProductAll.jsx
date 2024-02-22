import React, { useState, useEffect } from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addLike, removeLike } from '../features/AddLike';
import { addToCart, removeFromCart, showCart } from '../features/AddToCart';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useSound from 'use-sound';
import likeSound from '../sound/pop.mp3';

const ProductAll = ({ item }) => {
    const [isLike, setIsLike] = useState(false);
    const dispatch = useDispatch();


    const likedProducts = useSelector(state => state.like.likes);

  
    useEffect(() => {
        setIsLike(likedProducts[item.id] > 0);
    }, [likedProducts, item.id]);

    const handleLike = () => {
        dispatch(addLike({ productId: item.id, title: item.title, price: item.price, thumbnail: item.thumbnail }));
    }

    const handleUnlike = () => {
        dispatch(removeLike({ productId: item.id }));
    }

    const handleLikeClick = () => {
        if (isLike) {
            handleUnlike();
        } else {
            handleLike();
  
        }
       
    }

    const handleAddToCart = () => {
        dispatch(addToCart({ productId: item.id }));
        dispatch(showCart({ id: item.id, price: item.price, title: item.title, thumbnail: item.thumbnail }));
        toast.success('Product added to cart');
    }

 
    const findItem = useSelector((state) => {
        if (Array.isArray(state.cart.cartArray)) {
            return state.cart.cartArray.findIndex((cart) => cart.id === item.id) !== -1;
        }
        return false; 
    });

    return (
        <div className='text-center'>
            <div className=' p-4 rounded-lg m-2 bg-gray-600 gap-10 px-10'>
                <div className='flex justify-end pl-14 pb-10'>
                    {isLike ? (
                        <FaHeart className='text-red-500 cursor-pointer' size={20} onClick={handleLikeClick} />
                    ) : (
                        <FaRegHeart size={20} onClick={handleLikeClick} className='cursor-pointer' />
                    )}
                </div>
                <img src={item.thumbnail} alt={item.title} className='rounded-md' />
                <h1 className='text-white'>{item.title}</h1>
                <p className='text-white'>${item.price}</p>
                {findItem ?
                    <button className='bg-stone-800 p-2 mt-2 rounded-md hover:bg-sky-600'>
                        Buy Now
                    </button>
                    :
                    <button className='bg-sky-500 p-2 mt-2 rounded-md' onClick={handleAddToCart}>
                        Add to cart
                    </button>
                }
            </div>
        </div>
    );
};

export default ProductAll;
