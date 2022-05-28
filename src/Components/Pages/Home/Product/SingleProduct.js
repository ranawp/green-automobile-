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
        <div className=' max-w-screen-xl mx-auto  p-6'>
            <div class="card  bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img className='border' src={img} alt="product-images" class="rounded-xl" />
                </figure>
                <div class="card-body  ">
                    <h2 className="card-title">{name}</h2>
                    <h2 className=""> <span className='font-bold'>Price:$</span>{price}</h2>
                    <p><span className='font-bold'>Description:</span>{description}</p>
                    <p><span className='font-bold'>Minimum order Quantity:</span>{minimumOrder}</p>
                    <div className="card-actions justify-start">
                        <button onClick={() => handlePurchase(_id)} className="btn btn-primary">Book Now</button>

                    </div>

                </div>
            </div>


        </div>
    );
};

export default SingleProduct;