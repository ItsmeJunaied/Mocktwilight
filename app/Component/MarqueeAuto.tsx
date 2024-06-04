// 'use client'
import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeAuto = () => {
    return (
        <div className=' mt-10 bg-[#F6F6F6] py-5'>
            <Marquee className=' overflow-y-hidden'>
                <p className=' custom-font-2 text-5xl'>SIMPLE & DECIDEDLY MODERN. .SIMPLE & DECIDEDLY MODERN. .SIMPLE & DECIDEDLY MODERN. .SIMPLE & DECIDEDLY MODERN.</p>
            </Marquee>
        </div>
    );
};

export default MarqueeAuto;