import { Button, Card } from "antd";
import Meta from "antd/es/card/Meta";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";


const AllPlaces = () => {
    const services = useLoaderData()
    return (
        <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-16">
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
                                <Button className='mr-4 mb-4 px-8 text-lg pb-8' type="primary" danger>Details</Button>
                            </Link>
                        </div>
                    </Card>
                )}
        </div>

    );
};

export default AllPlaces;