import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({ product }) => {
    const { _id, name, img, price, description, minimumOrder
    } = product


    return (
        <div className=''>
            <div class="card bg-base-100 shadow-xl">
                <figure><img style={{ width: '100%' }} src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <h2 class="card-title">Price:${price}</h2>
                    <p>{description}</p>
                    <p>Minimum-order-Quantity:{minimumOrder}</p>
                    <div class="card-actions justify-start">
                        <Link to='/purchase'><button class="btn btn-primary">Purchase</button></Link>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleProduct;