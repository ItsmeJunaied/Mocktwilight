import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import img from '../../public/countSection.png';
const TimeShow = () => {
    return (
        <div className=' lg:h-[690px] h-[350px] countSection rounded-lg mt-10' >
            <div className=' flex lg:flex-row flex-col rounded-lg justify-between items-center lg:items-end py-10 px-10 h-full'>

                <div className=' flex flex-col justify-center items-center lg:justify-start'>
                    <h1 className=' text-white custom-font-2 text-2xl font-bold '>Simple & Decidedly Modern</h1>
                    <button className=' px-5 py-3 rounded-md bg-[#8F8F8F] flex flex-row gap-3 mt-2 w-36'>
                        <div>
                            <p className='text-sm text-white'>Show Mode</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faArrowRight} size="sm" style={{ color: "#ffffff", }} />
                        </div>
                    </button>
                </div>
                <div className=' flex flex-row gap-3 '>
                    <div className=' text-white custom-font-2 text-xl lg:text-6xl bg-[#2D2C2B] px-4 py-3 opacity-50 rounded-xl flex flex-col justify-center items-center'>
                        <p className=''>0</p>
                        <p className=' text-base lg:text-xl'>Days</p>
                    </div>
                    <div className=' text-white custom-font-2 text-xl lg:text-6xl bg-[#2D2C2B] px-4 py-3 opacity-50 rounded-xl flex flex-col justify-center items-center'>
                        <p>0</p>
                        <p className=' text-base lg:text-xl'>hours</p>
                    </div>
                    <div className=' text-white custom-font-2 text-xl lg:text-6xl bg-[#2D2C2B] px-4 py-3 opacity-50 rounded-xl flex flex-col justify-center items-center'>
                        <p>0</p>
                        <p className=' text-base lg:text-xl'>minutes</p>
                    </div>
                    <div className=' text-white custom-font-2 text-xl lg:text-6xl bg-[#2D2C2B] px-4 py-3 opacity-50 rounded-xl flex flex-col justify-center items-center'>
                        <p>0</p>
                        <p className=' text-base lg:text-xl'>seconds</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TimeShow;