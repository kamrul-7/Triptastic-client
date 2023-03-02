import { Button, Card, Form, Input, Rate } from "antd";
import Meta from "antd/es/card/Meta";
import Search from "antd/es/transfer/search";
import { motion } from "framer-motion";
import { useContext, useState, useEffect, useRef } from "react";
import { AiFillStar, AiOutlineSearch } from "react-icons/ai";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, } from "react-router-dom";
import Loading from "../../../Others/Loading/Loading";

const AllPlaces = () => {
    const [services, setServices] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const searchRef = useRef();
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchServices = async () => {
            const response = await fetch(`https://music-album-kamrul-7.vercel.app/place?search=${search}`);
            const data = await response.json();
            setServices(data);
            setIsFetching(false);
        };
        fetchServices();
    }, [search]);

    const handleSearch = () => {

        setSearch(searchRef.current.value);
    }

    if (isFetching) {
        return <Loading />;
    }

    return (
        <div>
            <div className="h-20 bg-black"></div>
            <div className="mt-8 lg:w-96 ml-4 lg:mx-auto flex gap-3 pt-6">
                <input className='border-solid border-2 border-indigo-600 rounded-md px-4' ref={searchRef} type="text" />
                <Button onClick={handleSearch} danger>Search</Button>
            </div>

            <h1 className="text-center text-2xl font-bold hover:text-green-500 pt-12">
                Our Services
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-4">
                {services?.map((service, index) => (
                    <motion.div
                        key={service._id}
                        className="my-4 mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
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
                            <h1 className='text-2xl text-orange-600 mb-4'>{service?.Name} </h1>

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
                            <div className="card-actions justify-end">
                                <Link to={`/details/${service._id}`}>
                                    <Button className="mr-4 mb-4 px-8 text-lg pb-8 mt-6" type="primary" danger>
                                        Details
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
export default AllPlaces;