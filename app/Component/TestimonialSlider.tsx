'use client'

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';

const TestimonialSlider = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="slider-container">
            <style>
                {`
                    .slick-prev:before {
                        display: none;
                    }

                    .slick-next:before {
                        display: none;
                    }
                    .slick-dots li.slick-active button:before{
                        color: #FFD43B;
                        width: 10px
                    }
                `}
            </style>
            <Slider {...settings}>
                <div>
                    <div className=' lg:w-[476px] h-[300px] bg-[#F6F6F6] border-[1px] border-[#D1D5DB] rounded-md flex flex-col gap-2 justify-start items-start py-10 px-5 '>
                        <div>
                            <FontAwesomeIcon icon={faQuoteLeft} style={{ color: "#000000", fontSize: "6rem" }} />
                        </div>
                        <div className=' flex flex-row'>
                            <div><FontAwesomeIcon icon={faStar} size="lg" style={{ color: "#FFD43B", }} /></div>
                            <div><FontAwesomeIcon icon={faStar} size="lg" style={{ color: "#FFD43B", }} /></div>
                            <div><FontAwesomeIcon icon={faStar} size="lg" style={{ color: "#FFD43B", }} /></div>
                            <div><FontAwesomeIcon icon={faStar} size="lg" style={{ color: "#FFD43B", }} /></div>
                            <div><FontAwesomeIcon icon={faStar} size="lg" style={{ color: "#FFD43B", }} /></div>
                        </div>
                        <div>
                            <p className=' font-semibold'>Very nice products really Happy with the service</p>
                        </div>
                        <div>
                            <p className=' text-black custom-font-2 text-2xl'>Kobir Hossain</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className=' lg:w-[476px] h-[300px] bg-[#F6F6F6] border-[1px] border-[#D1D5DB] rounded-md flex flex-col gap-2 justify-start items-start py-10 px-5 '>
                        <div>
                            <FontAwesomeIcon icon={faQuoteLeft} style={{ color: "#000000", fontSize: "6rem" }} />
                        </div>
                        <div className=' flex flex-row'>
                            <div><FontAwesomeIcon icon={faStar} size="lg" style={{ color: "#FFD43B", }} /></div>
                            <div><FontAwesomeIcon icon={faStar} size="lg" style={{ color: "#FFD43B", }} /></div>
                            <div><FontAwesomeIcon icon={faStar} size="lg" style={{ color: "#FFD43B", }} /></div>
                            <div><FontAwesomeIcon icon={faStar} size="lg" style={{ color: "#FFD43B", }} /></div>
                            <div><FontAwesomeIcon icon={faStar} size="lg" style={{ color: "#FFD43B", }} /></div>
                        </div>
                        <div>
                            <p className=' font-semibold'>Very nice products really Happy with the service</p>
                        </div>
                        <div>
                            <p className=' text-black custom-font-2 text-2xl'>Kobir Hossain</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className=' lg:w-[476px] h-[300px] bg-[#F6F6F6] border-[1px] border-[#D1D5DB] rounded-md flex flex-col gap-2 justify-start items-start py-10 px-5 '>
                        <div>
                            <FontAwesomeIcon icon={faQuoteLeft} style={{ color: "#000000", fontSize: "6rem" }} />
                        </div>
                        <div className=' flex flex-row'>
                            <div><FontAwesomeIcon icon={faStar} size="lg" style={{ color: "#FFD43B", }} /></div>
                            <div><FontAwesomeIcon icon={faStar} size="lg" style={{ color: "#FFD43B", }} /></div>
                            <div><FontAwesomeIcon icon={faStar} size="lg" style={{ color: "#FFD43B", }} /></div>
                            <div><FontAwesomeIcon icon={faStar} size="lg" style={{ color: "#FFD43B", }} /></div>
                            <div><FontAwesomeIcon icon={faStar} size="lg" style={{ color: "#FFD43B", }} /></div>
                        </div>
                        <div>
                            <p className=' font-semibold'>Very nice products really Happy with the service</p>
                        </div>
                        <div>
                            <p className=' text-black custom-font-2 text-2xl'>Kobir Hossain</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className=' lg:w-[476px] h-[300px] bg-[#F6F6F6] border-[1px] border-[#D1D5DB] rounded-md flex flex-col gap-2 justify-start items-start py-10 px-5 '>
                        <div>
                            <FontAwesomeIcon icon={faQuoteLeft} style={{ color: "#000000", fontSize: "6rem" }} />
                        </div>
                        <div className=' flex flex-row'>
                            <div><FontAwesomeIcon icon={faStar} size="lg" style={{ color: "#FFD43B", }} /></div>
                            <div><FontAwesomeIcon icon={faStar} size="lg" style={{ color: "#FFD43B", }} /></div>
                            <div><FontAwesomeIcon icon={faStar} size="lg" style={{ color: "#FFD43B", }} /></div>
                            <div><FontAwesomeIcon icon={faStar} size="lg" style={{ color: "#FFD43B", }} /></div>
                            <div><FontAwesomeIcon icon={faStar} size="lg" style={{ color: "#FFD43B", }} /></div>
                        </div>
                        <div>
                            <p className=' font-semibold'>Very nice products really Happy with the service</p>
                        </div>
                        <div>
                            <p className=' text-black custom-font-2 text-2xl'>Kobir Hossain</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className=' lg:w-[476px] h-[300px] bg-[#F6F6F6] border-[1px] border-[#D1D5DB] rounded-md flex flex-col gap-2 justify-start items-start py-10 px-5 '>
                        <div>
                            <FontAwesomeIcon icon={faQuoteLeft} style={{ color: "#000000", fontSize: "6rem" }} />
                        </div>
                        <div className=' flex flex-row'>
                            <div><FontAwesomeIcon icon={faStar} size="lg" style={{ color: "#FFD43B", }} /></div>
                            <div><FontAwesomeIcon icon={faStar} size="lg" style={{ color: "#FFD43B", }} /></div>
                            <div><FontAwesomeIcon icon={faStar} size="lg" style={{ color: "#FFD43B", }} /></div>
                            <div><FontAwesomeIcon icon={faStar} size="lg" style={{ color: "#FFD43B", }} /></div>
                            <div><FontAwesomeIcon icon={faStar} size="lg" style={{ color: "#FFD43B", }} /></div>
                        </div>
                        <div>
                            <p className=' font-semibold'>Very nice products really Happy with the service</p>
                        </div>
                        <div>
                            <p className=' text-black custom-font-2 text-2xl'>Kobir Hossain</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className=' lg:w-[476px] h-[300px] bg-[#F6F6F6] border-[1px] border-[#D1D5DB] rounded-md flex flex-col gap-2 justify-start items-start py-10 px-5 '>
                        <div>
                            <FontAwesomeIcon icon={faQuoteLeft} style={{ color: "#000000", fontSize: "6rem" }} />
                        </div>
                        <div className=' flex flex-row'>
                            <div><FontAwesomeIcon icon={faStar} size="lg" style={{ color: "#FFD43B", }} /></div>
                            <div><FontAwesomeIcon icon={faStar} size="lg" style={{ color: "#FFD43B", }} /></div>
                            <div><FontAwesomeIcon icon={faStar} size="lg" style={{ color: "#FFD43B", }} /></div>
                            <div><FontAwesomeIcon icon={faStar} size="lg" style={{ color: "#FFD43B", }} /></div>
                            <div><FontAwesomeIcon icon={faStar} size="lg" style={{ color: "#FFD43B", }} /></div>
                        </div>
                        <div>
                            <p className=' font-semibold'>Very nice products really Happy with the service</p>
                        </div>
                        <div>
                            <p className=' text-black custom-font-2 text-2xl'>Kobir Hossain</p>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default TestimonialSlider;