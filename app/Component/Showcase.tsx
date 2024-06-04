import Image from 'next/image';
import React from 'react';
import img from '../../public/CategorySculptueVase.webp'
import ShowcaseSlider from './ShowcaseSlider';
const Showcase = () => {
    return (
        <div className=' w-full  lg:h-[680px]  bg-[#F6F6F6] mt-10 gap-5 lg:gap-5'>
            <div className='flex flex-col justify-center items-center lg:flex-row'>
                <div className=' lg:w-1/2 w-full lg:h-[680px] '>
                    <Image src={img} alt='' className='w-full h-full object-cover'></Image >
                </div>
                <div className=' lg:w-1/2 h-full flex justify-center items-center'>
                    <ShowcaseSlider></ShowcaseSlider>
                </div>
            </div>
        </div>
    );
};

export default Showcase;