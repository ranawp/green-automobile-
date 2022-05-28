import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';

const Product = () => {
    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch('https://calm-coast-29564.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProduct(data))
    })

    return (
        <div className='mt-10' id='products'>
            <h3 className='text-center text-4xl text-primary font-bold mb-2'>Products</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.slice(-6).map(product => <SingleProduct
                        key={product._id}
                        product={product}
                    ></SingleProduct>)
                }
            </div>

        </div>
    );
};

export default Product;