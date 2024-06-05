'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import useProducts from '../API/useProducts';
import Link from 'next/link';

interface Product {
    id: number;
    images: { url: string }[];
    title_name: string;
    price: number;
}

interface HoveredState {
    [key: number]: boolean;
}

const ProductCard = () => {
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

    return (
        <div>

            <div className='grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {latestProducts.map(product => (

                    <div key={product.id}>
                        <Link href={`/details/${product.id}`}>
                            <div
                                className="lg:w-[365px] lg:h-[400px] rounded-md overflow-hidden relative"
                                onMouseEnter={() => handleMouseEnter(product.id)}
                                onMouseLeave={() => handleMouseLeave(product.id)}
                            >
                                <Image
                                    src={hovered[product.id] ? product.images[1].url : product.images[2].url}
                                    width={365}
                                    height={365}
                                    objectFit="cover"
                                    alt="Product Image"
                                    className={classNames(
                                        "transition-transform duration-300 ease-in-out",
                                        { "transform scale-125": hovered[product.id] }
                                    )}
                                />
                                <div className="absolute top-4 left-4 bg-[#8F8F8F] text-white px-2 py-1 rounded-md">
                                    <p className=' text-sm'>Sale</p>
                                </div>
                                {hovered[product.id] && (
                                    <Link href={`/details/${product.id}`}>
                                        <button className="absolute bottom-4 right-4 bg-white lg:px-32 px-10 py-2 text-sm border-[1px] border-[#8F8F8F] rounded-lg font-semibold">Show more
                                        </button>
                                    </Link>
                                )}
                            </div>
                        </Link>
                        <div className=' mt-2'>
                            <h1 className=' font-semibold'>{product.title_name}</h1>
                            <p className=' custom-font-2'>৳ {product.price}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ProductCard;
