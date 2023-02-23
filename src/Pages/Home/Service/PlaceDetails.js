import { Button, Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';

const PlaceDetails = () => {
    const { Name, rating, img, price, description } = useLoaderData();
    return (
        <div className='py-20'>
            <Card className='my-4 mx-full lg:mx-32 mx-12'
                hoverable

                cover={<PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="" />
                    </PhotoView>
                </PhotoProvider>}
            >
                <Meta />
                <h2 className='text-4xl font-bold mb-4'>{Name}</h2>
                <div className='flex justify-between'>
                    <div className='flex justify-around mb-4'>
                        <h2 className='text-2xl text-yellow-400 font-semibold'>{rating}</h2>
                        <AiFillStar className='ml-2 mt-2 text-yellow-400' size={20}></AiFillStar>
                        <BsStarHalf className='ml-2 mt-2 text-yellow-400' size={20}></BsStarHalf>
                    </div>
                    <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>

                </div>
                <p>{description}</p>

            </Card>
            <Link to='/AllPlaces'><button className='btn btn-accent mt-8 px-12 flex mx-auto'>Previous</button></Link>
        </div>
    );
};

export default PlaceDetails;