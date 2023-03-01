import React from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddService = () => {
    const navigate = useNavigate()
    const handlePlaceComment = event => {
        event.preventDefault();
        const form = event.target;
        const rating = form.rating.value;
        const Name = form.title.value;
        const img = form.img.value;
        const description = form.description.value;
        const price = form.price.value;

        const service = {
            Name,
            img,
            rating,
            price,
            description
        }
        console.log(service)

        fetch('https://music-album-pearl.vercel.app/place', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        toast.success("Your Service Added Successfully")
        navigate('/')
    }

    return (
        <div>
            <div className='h-20 bg-black'></div>
            <div className='ml-12 pt-20'>
                <h1 className='text-center text-xl mt-12 lg:text-4xl mr-8 text-gry-500 hover:text-green-500'>Add New Service</h1>
                <form onSubmit={handlePlaceComment}>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <input name="title" type="text" placeholder="Your title" className="input input-ghost border-green-700 mr-16 input-bcommentsed mt-12" required />
                        <input name="img" type="text" placeholder="Your image" className="input input-ghost border-green-700 mr-16 input-bcommentsed mt-12" required />
                        <input name="price" type="text" placeholder="Your price" className="input input-ghost border-green-700 mr-16 input-bcommentsed mt-12" required />
                        <input name="rating" type="text" placeholder="Your rating" className="input input-ghost border-green-700 mr-16 input-bcommentsed mt-12" required />
                        <input name="description" type="text" placeholder="Your Description" className="input input-ghost border-green-700 mr-16 input-bcommentsed my-12" required />
                    </div>
                    <input className='btn btn-info mb-12' type="submit" value="Place Your service" />
                </form>
            </div>
        </div>
    );
};

export default AddService;