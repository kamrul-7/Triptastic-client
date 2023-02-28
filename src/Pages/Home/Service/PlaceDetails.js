import { Button, Card, Input } from 'antd';
import Meta from 'antd/es/card/Meta';
import React, { useContext, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import { Rate } from 'antd';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Comment from '../../../Others/Comment/Comment';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const { TextArea } = Input;
const PlaceDetails = () => {
    const [value, setValue] = useState(3);
    const { Name, rating, img, price, description } = useLoaderData();
    const { user } = useContext(AuthContext)
    return (
        <div className='py-20 bg-gray-600'>
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
                    <div className="flex justify-between">
                        <Rate className="-mr-4" value={rating} />
                        <h2 className="text-yellow-500 text-2xl font-bold mt-4 ml-8">{rating}</h2>
                    </div>
                    <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>

                </div>
                <p>{description}</p>

            </Card>


            <div>
                <div className='mt-12'>
                    <h3 className='text-center text-red-500 text-2xl '>Review</h3>
                </div>
                <div className='flex justify-center mt-12'>
                    <Comment></Comment>
                </div>
            </div>





            <Link to='/AllPlaces'><Button className='my-8 mt-24 pb-8 px-12 flex text-lg mx-auto' type="primary" danger>Previous</Button></Link>
        </div>
    );
};

export default PlaceDetails;