import React, { useState } from 'react';

interface Product {
    id: number;
    title_name: string;
    description: string;
    price: number;
    product_sale_percentage: number,
    quantity: number,
    images: {
        color: any; url: string
    }[];
}

interface Image {
    url: string;
    color: {
        name: string;
        code: string;
    };
}

interface DetailsImageProps {
    matchedIdData: Product[];
    selectedColorIndex: number | null;
    setSelectedColorIndex: React.Dispatch<React.SetStateAction<number | null>>;
}


const DetailsDescription: React.FC<DetailsImageProps>= ({ matchedIdData , selectedColorIndex, setSelectedColorIndex}) => {
    
    const product = matchedIdData[0];

    const handleColorClick = (index: number) => {
        setSelectedColorIndex(index);
    };

    return (

        <div className=' flex flex-col justify-start items-start h-full gap-2 px-10'>
            <h1 className=' custom-font-2 text-xl mb-3'>{product.title_name}</h1>
            <div className=' flex flex-row gap-2 items-center'>
                <p className=' text-4xl'>৳ {product.price}</p>
                <p className=' text-2xl text-green-400 font-semibold'>Save <span className='text-2xl'>{product.product_sale_percentage}%</span></p>
            </div>
            <p className=' text-sm font-semibold'>Availability: <span className=' text-green-400 font-semibold'>In Stock</span></p>
            <p className=' text-sm font-semibold'>QTY: <span className=' text-green-400 font-semibold'>{product.quantity}</span></p>
            <p className=' uppercase text-sm font-bold'>Select Color <span className=' text-red-700'>*</span></p>

            <div className='flex flex-row justify-start items-center gap-2'>
                {product.images.map((image, index) => (
                    <button
                        key={index}
                        className={`w-10 h-10  ${selectedColorIndex === index ? 'border-2 border-black' : ''}`}
                        style={{ backgroundColor: image.color.code }}
                        title={image.color.name}
                        onClick={() => handleColorClick(index)}
                    ></button>
                ))}
            </div>

            <div className=' flex flex-row justify-center items-center gap-4'>
                <div><button className=' bg-[#8F8F8F] text-white px-28 py-3 rounded-md '><p>buy it now</p></button></div>
                <div><button className=' bg-black text-white px-28 py-3 rounded-md'><p>Add to cart</p></button></div>
            </div>
            <p className=' uppercase text-sm font-bold custom-font-2'>Description</p>
            <p className=''>{product.description}</p>


        </div>

    );
};

export default DetailsDescription;