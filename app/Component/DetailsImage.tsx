import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

export interface Product {
    id: number;
    title_name: string;
    description: string;
    price: number;
    images: { url: string }[];
}

interface DetailsImageProps {
    matchedIdData: Product[];
}

interface DetailsImageProps {
    matchedIdData: Product[];
    selectedColorIndex: number | null;
    setSelectedColorIndex: React.Dispatch<React.SetStateAction<number | null>>;
}


const DetailsImage: React.FC<DetailsImageProps> = ({ matchedIdData, selectedColorIndex, setSelectedColorIndex }) => {
    console.log(matchedIdData)
    const product = matchedIdData[0];
    const settings = {
        customPaging: function (i: number) {
            return (
                <div className='thumbnail-item'>
                    <Image
                        src={product.images[i].url}
                        width={100}
                        height={100}
                        alt={`Thumbnail ${i + 1}`}
                    />
                </div>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const handleImageClick = (index: number) => {
        setSelectedColorIndex(index);
    };
    return (
        <div className="slider-container">
            <style>
                {`
            .slick-active button:before {
                width: 100px; 
                margin-left: 50px; /* Adjusted margin-left */
            }

            .thumbnail-item {
                width: 100px; 
                margin-top:20px 
            }

            .slick-dots li:not(:last-child) {
                margin-right: 100px;
                
            }
        `}
            </style>
            <Slider {...settings}>
                {product.images.map((image, index) => (
                    <div
                        key={index}
                        className={`w-[700px] h-[600px] object-cover ${selectedColorIndex === index ? 'border-black border-[2px] selected' : ''}`}
                        onClick={() => handleImageClick(index)}
                    >
                        <Image
                            src={image.url}
                            width={400}
                            height={400}
                            layout="responsive"
                            objectFit="cover"
                            alt={`Product Image ${index + 1}`}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};


export default DetailsImage;