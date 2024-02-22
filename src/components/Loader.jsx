import React from 'react';

const Loader = () => {
    return (

        <div className='flex justify-center items-center gap-5 flex-row h-screen'>
            <div className='h-5 w-5 bg-white rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div className='h-5 w-5 bg-white rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div className='h-5 w-5 bg-white rounded-full animate-bounce'></div>
        </div>
    );
}

export default Loader;
