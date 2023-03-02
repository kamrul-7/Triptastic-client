import { MessageOutlined, PhoneOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

const About = () => {
    return (
        <div>
            <div className='h-20 bg-black'></div>
            <div className='flex justify-center lg:pt-32 lg:mx-12 mb-12 mx-4'>
                <div className='flex flex-col items-center lg:mx-4 mx-2 my-4 lg:w-1/2 w-full bg-pink-100 ml-8 p-12 rounded-md'>
                    <div className='text-5xl text-red-700 flex justify-center'>
                        <PhoneOutlined />
                    </div>
                    <h2 className='text-black mt-4 text-xl'>+8801629706873</h2>
                </div>
                <div className='flex flex-col items-center lg:mx-4 mx-2 my-4 lg:w-1/2 w-full  bg-pink-100 ml-8 p-12 rounded-md'>
                    <div className='text-5xl text-red-700 justify-center flex'>
                        <MessageOutlined />
                    </div>
                    <h2 className='text-black mt-4 text-xl'>Kamrul7.khan@gmail.com</h2>
                </div>
            </div>


            <div>

                <iframe
                    title='Meddical'
                    className='w-full h-96 mx-auto px-16 mb-8'
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7300.888371851632!2d90.3636722!3d23.802799!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c12cd2f41ad5%3A0xd4eb5975120eaff0!2sMirpur%2010%20Bus%20Stand!5e0!3m2!1sen!2sbd!4v1658586728053!5m2!1sen!2sbd"
                    allowfullscreen=''
                    loading='lazy'></iframe>
            </div>
            <div className='text-center bg-rose-300 pt-20 pb-12 mx-16'>
                <div className='text-white '>
                    <h4 className='text-xl font-bold text-primary my-6'>Contact Us</h4>
                    <h2 className='font-20 text-3xl'>Stay connected with us</h2>
                </div>
                <div className='grid grid-rows-3 place-items-center mt-10'>
                    <input
                        name='email'
                        type='text'
                        placeholder='Email Address'
                        required
                        className='input input-bordered w-full lg:w-1/2'
                    />
                    <input
                        name='subject'
                        type='text'
                        placeholder='Subject'
                        className='input input-bordered w-full lg:w-1/2'
                    />
                    <textarea
                        name='message'
                        className='textarea textarea-secondary w-full lg:w-1/2'
                        placeholder='Your Message'
                    ></textarea>
                </div>
                <div className='card-actions justify-center mt-6 mb-12'>
                    <button className='btn btn-success'>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default About;
