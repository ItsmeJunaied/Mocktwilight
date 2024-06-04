'use client'
import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useProducts from '../API/useProducts';
import Image from 'next/image';
import classNames from 'classnames';


interface Product {
    id: number;
    images: { url: string }[];
    title_name: string;
    price: number;
}

interface HoveredState {
    [key: number]: boolean;
}

const ShowcaseSlider = () => {
    const { products, loading, error } = useProducts();

    const [hovered, setHovered] = useState<HoveredState>({});

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const handleMouseEnter = (id: number) => {
        setHovered(prevHovered => ({ ...prevHovered, [id]: true }));
    };

    const handleMouseLeave = (id: number) => {
        setHovered(prevHovered => ({ ...prevHovered, [id]: false }));
    };

    const latestProducts = products.filter(item => item?.category.name === 'Furniture');

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className='w-[280px] bg-[#F6F6F6] h-full'>
            <Slider {...settings}>
                {latestProducts.map(product => (
                    <div key={product.id}>
                        <div className="lg:w-[280px] lg:h-[350px] rounded-md overflow-hidden relative">
                            <Image
                                src={hovered[product.id] ? product.images[1].url : product.images[2].url}
                                width={280}
                                height={280}
                                objectFit="cover"
                                alt="Product Image"
                                className={classNames(
                                    "transition-transform duration-300 ease-in-out",
                                    { "transform scale-125": hovered[product.id] }
                                )}
                            />
                            <div className="absolute top-4 left-4 bg-[#8F8F8F] text-white px-2 py-1 rounded-md">
                                <p className='text-sm'>Sale</p>
                            </div>
                            {hovered[product.id] && (
                                <button className="absolute bottom-4 right-4 bg-white lg:px-32 px-10 py-2 text-sm border-[1px] border-[#8F8F8F] rounded-lg font-semibold">Show more</button>
                            )}
                        </div>

                        <div className='mt-2'>
                            <h1 className='font-semibold'>{product.title_name}</h1>
                            <p className='custom-font-2'>৳ {product.price}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ShowcaseSlider;