import React, { useState } from 'react';
import useSound from 'use-sound';
import notificationSound from '../sound/notification.mp3';
import { useSelector } from 'react-redux';

const Wishlist = () => {
    const [playedSound, setPlayedSound] = useState(false);
    const [play] = useSound(notificationSound , { volume: 0.2 });
    const likedItems = useSelector((state) => state.like.likedProducts) || [];

    const handleNotification = () => {
        if (!playedSound && likedItems.length > 0) {
            play();
            setPlayedSound(true);
        }
    };

    return (
        <div className="relative m-1 inline-flex w-fit">
            {/* Glowing Dot */}
            {likedItems.length === 0 ? null : (
                handleNotification(),
                <div className="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-red-500 p-1.5 text-xs glow"></div>
            )}
            <div
                className="flex items-center justify-center rounded-lg bg-indigo-500 px-5 py-2 text-center text-white shadow-lg dark:text-gray-200"
                >
                <h1 className="text-xl font-bold">Wishlist</h1>
            </div>
        </div>
    );
};

export default Wishlist;
