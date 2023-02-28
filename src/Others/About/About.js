import { MessageOutlined, PhoneOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

const About = () => {
    return (
        <div>
            <div className='flex justify-around lg:pt-32 lg:mx-12 mb-12 mx-12'>
                <div className='lg:p-24 bg-white rounded-md'>
                    <div className='text-5xl text-red-700 flex justify-center'>
                        <PhoneOutlined />
                    </div>
                    <h2 className='text-black mt-4 text-xl'>+8801629706873</h2>
                </div>
                <div>

                    <div className='p-24 bg-white rounded-md'>
                        <div className='text-5xl text-red-700 justify-center flex'>
                            <MessageOutlined />
                        </div>
                        <h2 className='text-black mt-4 text-xl'>Kamrul7.khan@gmail.com</h2>
                    </div>
                </div>

            </div>
            <div className='text-center bg-blue-300 pt-20 pb-12'>
                <div className='text-white '>
                    <h4 className='text-xl font-bold text-primary my-6'>Contact Us</h4>
                    <h2 className='font-20 text-3xl'>Stay connected with us</h2>
                </div>
                <div className='grid grid-rows-3 place-items-center mt-10'>
                    <input name='email' type="text" placeholder="Email Address" required className="input input-bordered lg:w-1/2" />
                    <input name='subject' type="text" placeholder="Subject" className="input input-bordered lg:w-1/2" />
                    <textarea name='message' className="textarea textarea-secondary lg:w-1/2" placeholder="Your Message"></textarea>
                </div>
                <div className='card-actions justify-center mt-6 mb-12'>
                    <button className='btn btn-success'>Submit</button>
                </div>
            </div>
        </div>

    );
};

export default About;