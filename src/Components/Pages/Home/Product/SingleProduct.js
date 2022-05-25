import React from 'react';
import { useNavigate } from 'react-router-dom';
const SingleProduct = ({ product }) => {
    const { _id, name, img, price, description, minimumOrder
    } = product
    const navigate = useNavigate()
    const handlePurchase = id => {
        navigate(`/purchase/${id}`)
    }


    return (
        <div className=''>
            <div className="card bg-base-100 shadow-xl">
                <figure><img style={{ width: '100%' }} src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title">Price:${price}</h2>
                    <p>{description}</p>
                    <p>Minimum-order-Quantity:{minimumOrder}</p>
                    <div className="card-actions justify-start">
                        <button onClick={() => handlePurchase(_id)} className="btn btn-primary">Book Now</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;