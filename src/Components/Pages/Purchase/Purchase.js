import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';

const Purchase = () => {
    const { purchaseId } = useParams();
    const [product, setProduct] = useState({})
    const [user] = useAuthState(auth);
    console.log(user)



    useEffect(() => {
        const url = `http://localhost:5000/product/${purchaseId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    })




    return (
        <div className=''>

            <h2 className='text-center text-primary text-2xl mt-3'>Purchase Product</h2>
            <div className='flex mt-3 mb-3 justify-center items-center p-5 '>
                <div class="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img className='p-2' src={product.img} alt="Movie" /></figure>
                    <div class="card-body">
                        <h2 class="text-primary card-title" >Product name:{product.name}</h2>


                        <small>Name:</small>
                        <input value={user.displayName} placeholder='name' type="text" class="input input-bordered w-full max-w-xs" />
                        <small> Email:</small>
                        <input disabled value={user.email} type="email" placeholder="email" class="input input-bordered w-full max-w-xs" />
                        <small> Contact number:</small>
                        <input type="number" placeholder="number" class="input input-bordered w-full max-w-xs" />
                        <small>  Address:</small>
                        <input type="text" placeholder="address" class="input input-bordered w-full max-w-xs" />
                        <small> Product Quantity:</small>
                        <input type="number" placeholder="quantity" class="input input-bordered w-full max-w-xs" />
                        <div class="card-actions justify-start">
                            <button class="btn btn-primary">Payment</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Purchase;