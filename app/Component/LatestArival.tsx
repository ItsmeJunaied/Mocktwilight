import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ProductCard from './ProductCard';

const LatestArival = () => {
    return (
        <div>
            <div className=' flex justify-between items-center mb-5 mt-10'>
                <h1 className=' custom-font-2 text-xl'>Shop By Category</h1>
                <button className="text-red hover:before:bg-redborder-[#8F8F8F] relative h-[45px] w-[123px] overflow-hidden border border-[#8F8F8F] bg-white px-3 text-[#8F8F8F] shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#8F8F8F] before:transition-all before:duration-500 hover:text-white hover:shadow-[#8F8F8F] hover:before:left-0 hover:before:w-full text-sm">
                    <span className="relative z-10 flex  justify-between items-center gap-2 px-2">
                        <div><p className='custom-font-2'>View All </p></div>
                        <div>
                            <FontAwesomeIcon icon={faArrowRight} size="sm" className=' text-[#8F8F8F] hover:text-white duration-100' />
                        </div>
                    </span>
                </button>
            </div>

            <ProductCard></ProductCard>
        </div>
    );
};

export default LatestArival;