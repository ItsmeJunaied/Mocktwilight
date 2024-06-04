'use client'

import axios from 'axios';
import { useEffect, useState } from 'react';

interface Product {
    id: number;
    title_name: string;
    category: {
        name: string;
        image: string;
    };
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
}



const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get<Product[]>('/data.json');
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching products');
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return { products, loading, error };
};

export default useProducts;