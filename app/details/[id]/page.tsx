'use client'
import useProducts from '@/app/API/useProducts';
import DetailsDescription from '@/app/Component/DetailsDescription';
import DetailsImage from '@/app/Component/DetailsImage';
import React, { useState } from 'react';



const Details = ({ params }: { params: { id: number } }) => {
    const [selectedColorIndex, setSelectedColorIndex] = useState<number | null>(null);

    console.log(selectedColorIndex)
    const { products, loading, error } = useProducts();

    const productId = typeof params.id === 'number' ? params.id : parseInt(params.id, 10);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    // console.log(params.id)
    const matchedIdData = products.filter(item => item.id === productId);
    // console.log(matchedIdData);
    return (
        <div className=' container mx-auto mb-40'>

            <div className=' flex flex-col lg:flex-row justify-center items-center gap-0'>
                <div className=' w-full lg:w-1/2'>
                    <DetailsImage
                        matchedIdData={matchedIdData}
                        selectedColorIndex={selectedColorIndex}
                        setSelectedColorIndex={setSelectedColorIndex}
                    />
                </div>
                <div className=' w-full lg:w-1/2'>
                    <DetailsDescription
                        matchedIdData={matchedIdData}
                        selectedColorIndex={selectedColorIndex}
                        setSelectedColorIndex={setSelectedColorIndex}
                    />
                </div>
            </div>
        </div>
    );
};

export default Details;