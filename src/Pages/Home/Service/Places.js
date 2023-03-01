import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll } from "framer-motion"
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Button, Card, Rate } from 'antd';
import { AiFillStar } from 'react-icons/ai';

const { Meta } = Card;

const Places = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://music-album-pearl.vercel.app/place')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div>
            <div className='text-center mb-4'>
                <h2 className="lg:text-4xl text-2xl font-semibold text-blue-400 hover:text-green-500 my-8">Our Service Area</h2>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.slice(Math.max(services.length - 3, 0)).map((service) => {
                        return (
                            <motion.div
                                className='flex mx-auto my-4'
                                animate={{
                                    scale: .95,
                                    transition: {
                                        duration: 1,
                                    }
                                }}
                            >

                                <Card
                                    hoverable
                                    style={{ width: 350 }}
                                    cover={<PhotoProvider>
                                        <PhotoView src={service?.img}>
                                            <img src={service?.img} alt="" />
                                        </PhotoView>
                                    </PhotoProvider>}
                                >
                                    <h1 className='text-2xl text-orange-600 mb-4'>v{service?.Name} </h1>

                                    {
                                        service?.description.length > 100 ?
                                            <>{service?.description.slice(0, 100) + '...'}  </>
                                            :
                                            service?.description
                                    }
                                    <div className="flex justify-between mt-8">
                                        <div className="flex justify-between items-center">
                                            <div className='flex'>
                                                <AiFillStar className='text-yellow-400'></AiFillStar>
                                                <AiFillStar className='text-yellow-400'></AiFillStar>
                                                <AiFillStar className='text-yellow-400'></AiFillStar>
                                                <AiFillStar className='text-yellow-400'></AiFillStar>
                                                <AiFillStar ></AiFillStar>
                                            </div>

                                        </div>
                                        <p className='text-xl font-semibold'>Price: ${service?.price}</p>

                                    </div>
                                    <Link to={`/details/${service._id}`}>
                                        <Button className='mr-4 px-8 text-lg pb-8 mt-8 ml-44' type="primary" danger>Details</Button>
                                    </Link>
                                </Card>

                            </motion.div>
                        );
                    })
                }
            </div>
            <Link to='/AllPlaces'><Button className='my-8 pb-8 px-12 flex text-lg mx-auto' type="primary" danger>Show  More</Button></Link>
        </div>
    );
};

export default Places;
