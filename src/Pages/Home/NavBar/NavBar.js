import React, { useContext, useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { Button, Space } from 'antd';
import { HiOutlineMenu } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false);
    const handleNav = () => {
        setNav(!nav)
        setLogo(!logo)
    }
    return (
        <div className='flex w-full justify-between items-center h-20 px-4 absolute text-white z-10'>
            <div>
                <h1 className={logo ? 'hidden' : 'block'}><Link to='/'>Triptastic </Link></h1>
            </div>
            <ul className='hidden md:flex'>
                <li><Link to='/AllPlaces'>Destination </Link></li>
                <li>Travel</li>
                <li>View</li>
                <li>Book</li>
                <li>About Us</li>
                <li><BiSearch className='mr-3' size={20}></BiSearch></li>
                {user?.uid ?
                    <>
                        <li><Link to="/">My Review</Link></li>
                        <li><button onClick={handleLogOut}>Sign out</button></li>
                    </>
                    : <li><Link to='/login'><a>Login</a></Link></li>
                }


            </ul>
            <div onClick={handleNav} className='md:hidden z-10'>
                {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenu size={20} />}
            </div>
            <div onClick={handleNav} className={nav ? 'absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col text-black' : 'absolute left-[-100%]'}>
                <ul>
                    <h1 className='border-b'>Triptastic</h1>
                    <li className='border-b'>Destination</li>
                    <li className='border-b'>Travel</li>
                    <li className='border-b'>View</li>
                    <li className='border-b'>Book</li>
                    <li className='border-b'>About Us</li>
                </ul>
                <div className='flex flex-col'>
                    <Button type="primary" className='btn-primary bg-blue-600 pb-4'>Search</Button>
                    <Button type="primary" className='btn-primary bg-blue-600 mt-3'>Account</Button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;