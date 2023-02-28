import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Review = () => {
    const [comment, setComment] = useState([]);
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`https://music-album-pearl.vercel.app/comment?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // sort data in reverse order
                setComment(data.reverse());
            })
    }, []);
    return (
        <div>
            <div className="overflow-auto pt-32 mb-32 mx-12">
                <table className="table w-full">
                    {/* head*/}
                    <thead>
                        <tr>
                            <th></th>
                            <th className='ml-8'>Name</th>
                            <th className='lg:pl-24'>Image</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            comment.map((review, i) => <tr>
                                <th className='bg-white text-black'><span>{i}</span></th>
                                <td><span>{review.Name}</span></td>
                                <th><img className='lg:w-56 lg:h-44' src={review.img} alt="" /></th>
                                <td className='bg-white text-black'>{review.Comment}</td>
                            </tr>
                            )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Review;