import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Form } from 'react-router-dom';
import video from '../../../Assets/All over in 10 seconds.mp4'
const Banner = () => {
    return (
        <div className='w-full h-screen relative'>
            <video className='w-full h-full object-cover' src={video} autoPlay loop muted></video>
            <div className='absolute w-full h-full top-0 left-0 bg-gray-900/40'>
                <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4 lg:font-bold  font-bold text-lg'>
                    <h2 className='md:text-3xl'>First Class Travel</h2>
                    <h2 className='py-3 md:text-3xl pb-6'>Top 1% Locations Worldwide</h2>
                    <Form className='flex justify-between items-center mx-w-[700px] mx-auto border p-1 rounded-md text-black bg-gray-100/90'>
                        <div>
                            <input className='bg-transparent w-[300px] sm:w-[400px] font-[poppins] focus:outline-none' type="text" placeholder='Search Destination' />
                        </div>
                        <div>
                            <button className='pt-2'><AiOutlineSearch size={20} className='icon'></AiOutlineSearch> </button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Banner;