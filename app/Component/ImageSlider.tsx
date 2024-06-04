'use client'
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import useProducts from '../API/useProducts';

// import data from '../../public/data.json';
import Image from 'next/image';
import useProducts from '../API/useProducts';

type Category = {
    name: string;
    image: string;
};

type Product = {
    title_name: string;
    category: Category;
    product_sale_percentage: number;
    price: number;
    description: string;
    images: {
        url: string;
        color: {
            name: string;
            code: string;
        };
    }[];
    quantity: number;
    product_posting_date: string;
};


const ImageSlider: React.FC = () => {

    const { products, loading, error } = useProducts();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const categoriesSet = new Set<string>();
    products.forEach((item) => {
      const categoryString = JSON.stringify({ name: item.category.name, image: item.category.image });
      categoriesSet.add(categoryString);
    });
    
    const uniqueCategories = Array.from(categoriesSet).map((item) => JSON.parse(item));
    
    // console.log(uniqueCategories);
    


    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
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
        <div>

            <div>
                <div className="slider-container  hidden lg:flex  flex-row gap-2">
                    {
                        uniqueCategories.map((item, index) => (
                            <div key={index} className="w-[175px] h-[175px] rounded-[20px] relative">
                                <Image src={item?.image} layout="fill" objectFit="cover" alt="image"></Image>
                                <h1 className="absolute bottom-0 left-0 right-0 text-white text-center custom-font-2 p-2">
                                    {item?.name}
                                </h1>
                            </div>
                        ))
                    }
                </div>
            </div>


            <div className="slider-container flex lg:hidden">
                <Slider className='' {...settings}>
                    {
                        uniqueCategories.map((item, index) => (
                            <div key={index} className="w-[175px] h-[175px] rounded-md relative">
                                <Image src={item?.image} layout="fill" objectFit="cover" alt="image"></Image>
                                <h1 className="absolute bottom-0 left-0 right-0 text-white text-center custom-font-2 p-2">
                                    {item?.name}
                                </h1>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default ImageSlider;