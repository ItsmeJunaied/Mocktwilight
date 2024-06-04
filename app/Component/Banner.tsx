'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

import bannerImg1 from '../../public/banner_img1.webp';
import bannerImg2 from '../../public/banner_img2.webp';
import bannerImg3 from '../../public/banner_img3.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Banner = () => {
    return (
        <div className=''>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper lg:h-[636px]"
            >
                <SwiperSlide>
                    <div className="relative">
                        <Image src={bannerImg1}  loading="lazy" alt="banner image" />
                        <div className="absolute top-16 left-0 w-full h-full  flex items-center justify-between px-10">
                            <div className=' flex flex-col justify-start items-start '>
                                <p className="uppercase text-lg lg:text-3xl text-white archivo-black-regular">simple and decidely modern</p>
                                <p className="uppercase text-base lg:text-lg text-white archivo-black-regular">shop now</p>
                            </div>
                            <div className=' hidden lg:flex flex-row gap-5'>
                                <button className=' text-white bg-[#23232369] flex justify-center items-center w-16 h-16 p-5 rounded-full'>
                                    <FontAwesomeIcon icon={faArrowLeft} size="sm" style={{ color: "#ffffff", }} />
                                </button>
                                <button className=' text-white bg-[#23232369] flex justify-center items-center w-16 h-16 p-5 rounded-full'>
                                    <FontAwesomeIcon icon={faArrowRight} size="sm" style={{ color: "#ffffff", }} />
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <Image src={bannerImg2}  loading="lazy" alt="banner image" />
                        <div className="absolute top-16 left-0 w-full h-full  flex items-center justify-between px-10">
                            <div className=' flex flex-col justify-start items-start '>
                                <p className="uppercase text-3xl text-white archivo-black-regular">simple and decidely modern</p>
                                <p className="uppercase text-white archivo-black-regular">shop now</p>
                            </div>
                            <div className=' hidden lg:flex flex-row gap-5'>
                                <button className=' text-white bg-[#23232369] flex justify-center items-center w-16 h-16 p-5 rounded-full'>
                                    <FontAwesomeIcon icon={faArrowLeft} size="sm" style={{ color: "#ffffff", }} />
                                </button>
                                <button className=' text-white bg-[#23232369] flex justify-center items-center w-16 h-16 p-5 rounded-full'>
                                    <FontAwesomeIcon icon={faArrowRight} size="sm" style={{ color: "#ffffff", }} />
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <Image src={bannerImg3}  loading="lazy" alt="banner image" />
                        <div className="absolute top-16 left-0 w-full h-full  flex items-center justify-between px-10">
                            <div className=' flex flex-col justify-start items-start '>
                                <p className="uppercase text-3xl text-white archivo-black-regular">simple and decidely modern</p>
                                <p className="uppercase text-white archivo-black-regular">shop now</p>
                            </div>
                            <div className=' hidden lg:flex flex-row gap-5'>
                                <button className=' text-white bg-[#23232369] flex justify-center items-center w-16 h-16 p-5 rounded-full'>
                                    <FontAwesomeIcon icon={faArrowLeft} size="sm" style={{ color: "#ffffff", }} />
                                </button>
                                <button className=' text-white bg-[#23232369] flex justify-center items-center w-16 h-16 p-5 rounded-full'>
                                    <FontAwesomeIcon icon={faArrowRight} size="sm" style={{ color: "#ffffff", }} />
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;