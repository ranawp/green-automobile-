import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';

const Product = () => {
    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProduct(data))
    })

    return (
        <div className='mt-10' id='products'>
            <h3 className='text-center text-2xl text-primary font-bold mb-10'>Products</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.map(product => <SingleProduct
                        key={product._id}
                        product={product}
                    ></SingleProduct>)
                }
            </div>

        </div>
    );
};

export default Product;