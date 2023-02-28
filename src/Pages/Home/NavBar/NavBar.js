import React, { useContext, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { BiSearch } from 'react-icons/bi';
import { AiFillPauseCircle, AiOutlineClose } from 'react-icons/ai';
import { Button, Space, Avatar, Image } from 'antd';
import { HiOutlineMenu } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { hover } from '@testing-library/user-event/dist/hover';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false);
    const [hover, setHover] = useState(false);
    const handleNav = () => {
        setNav(!nav)
        setLogo(!logo)
    }
    const handleMouseEnter = () => {
        setHover(true);
    }
    const handleMouseLeave = () => {
        setHover(false);
    }
    return (
        <div className='flex w-full justify-between items-center h-20 px-4 absolute text-white z-10'>
            <div>
                <h1 className={logo ? 'hidden' : 'block'}><Link to='/'>Triptastic </Link></h1>
            </div>
            <ul className='hidden md:flex'>
                <li><Link to='/AllPlaces'>Destination </Link></li>
                <li><Link>Travel</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li><BiSearch className='mr-3' size={20}></BiSearch></li>
                {
                    user?.uid ?
                        <>
                            <li><Link to="/addService">Add Service</Link></li>
                            <li><Link to="/review">My Review</Link></li>
                            <div className='mt-4'>
                                <span className={hover ? '' : 'hidden'}>{user?.displayName}</span>
                            </div>
                            <button onClick={handleLogOut} className="ml-4">LogOut</button>
                        </>
                        :
                        <>
                            <Link className='ml-4 mt-4' to='/login'>Login</Link>
                            <Link className='ml-4 mt-4' to='/signIn'>Register</Link>
                        </>
                }

                {user?.photoURL ?
                    <img

                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}


                        style={{ height: '30px', width: '30px' }} src={user?.photoURL} alt="" className="rounded-xl mt-3 mr-4 ml-3 mb-3"

                    />

                    : <></>
                }



            </ul>
            <div onClick={handleNav} className='md:hidden z-10'>
                {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenu size={20} />}
            </div>
            <div onClick={handleNav} className={nav ? 'absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col text-black' : 'absolute left-[-100%]'}>
                <ul>
                    <Link to='/'>Triptastic </Link>
                    <li><Link to='/AllPlaces'>Destination </Link></li>
                    <li className='border-b'>Travel</li>
                    <li className='border-b'>View</li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    {user?.uid ?
                        <>
                            <li><Link to="/addService">Add Service</Link></li>
                            <li><Link to="/">My Review</Link></li>
                            <li><button onClick={handleLogOut}>Sign out</button></li>
                        </>
                        : <li><Link to='/login'><a>Login</a></Link></li>
                    }
                </ul>
                <div className='flex flex-col'>
                    <Button type="primary" className='btn-primary bg-blue-600 pb-4'>Search</Button>
                    <Button type="primary" className='btn-primary bg-blue-600 mt-3'>Account</Button>
                </div>
            </div>
        </div >
    );
};

export default NavBar;