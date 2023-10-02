
import { Link } from "react-router-dom";
import { BiGlobe } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from "react";

const DropdownMenu = () => {
    const [openDropdown, setOpenDropdown] = useState(false)
    return (
        <div className='relative'>
            <div className='flex flex-row items-center gap-1'>
                <div className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'>
                    Airbnb your home
                </div>

                <div className='hidden md:block py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'>
                    <BiGlobe size={18} />
                </div>

                {/* Dropdown btn */}
                <div onClick={() => setOpenDropdown(!openDropdown)}
                    className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'>
                    <AiOutlineMenu />
                    <div className='hidden md:block'>
                        <FaUserCircle size={30} className="text-gray-500" />
                    </div>
                </div>
            </div>
            {openDropdown && (
                <div style={{ boxShadow: "0px 1px 22px -6px rgba(0,0,0,0.25)" }} className='absolute rounded-xl w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-14 text-sm'>
                    <div className='flex flex-col cursor-pointer'>
                        <Link to='/'
                            className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition'>
                            Home
                        </Link>
                        <Link to='/'
                            className='px-4 py-3 hover:bg-neutral-100 transition font-medium'>
                            Sign Up
                        </Link>
                        <Link to='/'
                            className='px-4 py-3 hover:bg-neutral-100 transition'>
                            Login
                        </Link>

                        <div className="w-full h-[1px] bg-gray-200"></div>

                        <Link to='/'
                            className='px-4 py-3 hover:bg-neutral-100 transition'>
                            Airbnb your home
                        </Link>
                        <Link to='/'
                            className='px-4 py-3 hover:bg-neutral-100 transition'>
                            Help Center
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;