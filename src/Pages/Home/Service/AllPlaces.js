import { Button, Card } from "antd";
import Meta from "antd/es/card/Meta";
import { AiOutlineSearch } from "react-icons/ai";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Form, Link, useLoaderData } from "react-router-dom";


const AllPlaces = () => {
    const services = useLoaderData()
    return (
        <div>
            <h1 className="text-center text-2xl font-bold hover:text-green-500 pt-24">Our Services</h1>
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-4">

                {
                    services?.map((service) =>
                        <Card className='my-4 mx-auto'
                            hoverable
                            style={{ width: 360 }}
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
                                    <Button className='mr-4 mb-4 px-8 text-lg pb-8 mt-6' type="primary" danger>Details</Button>
                                </Link>
                            </div>
                        </Card>
                    )}
            </div>
        </div>
    );
};

export default AllPlaces;