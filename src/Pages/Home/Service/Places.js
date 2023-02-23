import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Button, Card } from 'antd';
import AllPlaces from './AllPlaces';

const { Meta } = Card;

const Places = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/place')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    let count = 0;
    return (
        <div>
            <div className='text-center mb-4'>
                <h2 className="lg:text-4xl text-2xl font-semibold text-gray-400 hover:text-green-500 my-8">Our Service Area</h2>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services?.map((service) => {
                        count = count + 1;
                        if (count <= 3) {
                            return (<div className='flex mx-auto my-4'>
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
                                    <h2 className='text-2xl text-yellow-400 font-semibold'>{service?.rating}</h2>
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

                            </div>)
                        }
                    })
                }
            </div>
            <Link to='/AllPlaces'><button className='btn btn-accent mt-8 px-12 flex mx-auto'>Show  More</button></Link>
        </div>
    );
};

export default Places;