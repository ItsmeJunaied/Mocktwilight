import Image from 'next/image';
import React from 'react';
import logo from '../../public/logo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCartShopping, faGlobe, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
const Navbar = () => {
    return (
        <div className="navbar bg-transparent border-b-2 border-[#D1D5DB] lg:h-[66px] p-0">
            <div className="navbar-start">
                <button>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z">
                    </path>
                    </svg>
                </button>
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href="/" className=' text-xs font-bold hover:bg-transparent'>Home</Link></li>
                        <li className="relative group">
                            <Link href="/" className="text-xs font-bold hover:bg-transparent">
                                Category <FontAwesomeIcon icon={faAngleDown} />
                            </Link>
                            <ul className="absolute left-0 top-full hidden group-hover:block p-2 w-64 bg-[#F6F6F6] border-[1px] border-[#D1D5DB] rounded-lg">
                                <li className="border-b-[1px] border-[#D1D5DB]">
                                    <Link href="/">Submenu 1</Link>
                                </li>
                                <li className="border-b-[1px] border-[#D1D5DB]">
                                    <Link href="/">Submenu 2</Link>
                                </li>
                                <li className="border-b-[1px] border-[#D1D5DB]">
                                    <Link href="/">Submenu 3</Link>
                                </li>
                                <li className="border-b-[1px] border-[#D1D5DB]">
                                    <Link href="/">Submenu 4</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="relative group">
                            <Link href="/" className="text-xs font-bold hover:bg-transparent">
                                Pages <FontAwesomeIcon icon={faAngleDown} />
                            </Link>
                            <ul className="absolute left-0 top-full hidden group-hover:block p-2 w-64 bg-[#F6F6F6] border-[1px] border-[#D1D5DB] rounded-lg">
                                <li className="border-b-[1px] border-[#D1D5DB]">
                                    <Link href="/">Submenu 1</Link>
                                </li>
                                <li className="border-b-[1px] border-[#D1D5DB]">
                                    <Link href="/">Submenu 2</Link>
                                </li>
                                <li className="border-b-[1px] border-[#D1D5DB]">
                                    <Link href="/">Submenu 3</Link>
                                </li>
                                <li className="border-b-[1px] border-[#D1D5DB]">
                                    <Link href="/">Submenu 4</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='navbar-center'>
                <Image
                    src={logo}
                    alt="Description of image"
                    width={100}
                    height={50}
                />
            </div>

            <div className="navbar-end gap-5 items-center">

                <div className=' flex flex-row gap-2 items-center'>
                    <div>
                        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                    </div>

                    <div>
                        <p className='text-xs font-extrabold'>Search</p>
                    </div>
                </div>

                <div className=' flex flex-row gap-2 items-center'>
                    <div>
                        <FontAwesomeIcon icon={faCartShopping} size="lg" />
                    </div>
                    <div>
                        <p className='text-xs font-extrabold'>Cart</p>
                    </div>
                </div>
                <div className=' flex flex-row gap-2 items-center'>
                    <div>
                        <FontAwesomeIcon icon={faGlobe} size="sm" style={{ color: "#6B7280", }} />
                    </div>

                    <div>
                        <p className=' text-[#6B7280] text-xs font-bold'>EN</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;