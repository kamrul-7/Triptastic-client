import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Button, Card, Rate } from 'antd';
import AllPlaces from './AllPlaces';

const { Meta } = Card;

const Places = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/place')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div>
            <div className='text-center mb-4'>
                <h2 className="lg:text-4xl text-2xl font-semibold text-gray-400 hover:text-green-500 my-8">Our Service Area</h2>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.slice(Math.max(services.length - 3, 0)).map((service) => {
                        return (
                            <div className='flex mx-auto my-4'>
                                <Card
                                    hoverable
                                    style={{ width: 350 }}
                                    cover={<PhotoProvider>
                                        <PhotoView src={service?.img}>
                                            <img src={service?.img} alt="" />
                                        </PhotoView>
                                    </PhotoProvider>}
                                >
                                    <Meta title={service?.Name} />
                                    <div className="flex justify-between">
                                        <Rate style={{ width: '5px' }} value={service?.rating} />
                                        <h2 className="text-yellow-500 text-lg font-bold mt-4">{service?.rating}</h2>
                                    </div>
                                    <p className='text-2xl text-orange-600 font-semibold'>Price: ${service?.price}</p>
                                    {
                                        service?.description.length > 100 ?
                                            <>{service?.description.slice(0, 100) + '...'}  </>
                                            :
                                            service?.description
                                    }
                                    <div className="card-actions justify-end">
                                        <Link to={`/details/${service._id}`}>
                                            <Button className='mr-4 mb-4 px-8 text-lg pb-8' type="primary" danger>Details</Button>
                                        </Link>
                                    </div>
                                </Card>

                            </div>
                        );
                    })
                }
            </div>
            <Link to='/AllPlaces'><Button className='my-8 pb-8 px-12 flex text-lg mx-auto' type="primary" danger>Show  More</Button></Link>
        </div>
    );
};

export default Places;
