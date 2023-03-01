import React, { useRef, useState } from 'react';
import video from '../../../Assets/All over in 10 seconds.mp4'
const Banner = () => {


    return (
        <div className='w-full h-screen relative'>
            <video className='w-full h-full object-cover' src={video} autoPlay loop muted></video>
            <div className='absolute w-full h-full top-0 left-0 bg-gray-900/40'>
                <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4 lg:font-bold  font-bold text-lg'>
                    <h2 className='md:text-3xl'>First Class Travel</h2>
                    <h2 className='py-3 md:text-3xl pb-6'>Top 1% Locations Worldwide</h2>

                </div>
            </div>
        </div>
    );
};

export default Banner;