import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';

const Purchase = () => {
    const { purchaseId } = useParams();
    const [product, setProduct] = useState({})
    const [user] = useAuthState(auth);
    // console.log(user)





    useEffect(() => {
        const url = `http://localhost:5000/product/${purchaseId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    })

    // const { register, handleSubmit } = useForm();
    // const onSubmit = data => {
    //     console.log(data)
    //     const url = `http://localhost:5000/bookings`
    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result)
    //         })
    // };

    const handleSubmit = event => {
        event.preventDefault();
        const productName = event.target.product.value
        const userName = event.target.userName.value
        const email = event.target.email.value;
        const contactNumber = event.target.contact.value
        const address = event.target.address.value
        const quantity = event.target.quantity.value

        // console.log(productName, userName, contactNumber, address, quantity, email)

        const bookings = {
            productName: productName,
            userName: userName,
            user: user.email,
            contact: contactNumber,
            Address: address,
            Quantity: quantity,
            img: product.img,
            price: product.price
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }




    return (
        <div className=''>

            <h2 className='text-center text-primary text-2xl mt-3'>Purchase Product</h2>
            <div className='flex mt-3 mb-3 justify-center items-center p-5 '>
                <div class="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img className='p-2' src={product.img} alt="Movie" /></figure>
                    <div class="card-body">
                        {/* <form onSubmit={handleSubmit(onSubmit)}>
                            <small>User Name: <br /></small>
                            <input class="input input-bordered w-full max-w-xs" placeholder='User Name'  {...register("name", { required: true, maxLength: 20 })} /> <br />

                            <small>Product Name: <br /></small>
                            <input class="input input-bordered w-full max-w-xs" placeholder='Input Image URL'  {...register("productname", { required: true })} /> <br />

                            <small>Email :</small><br /><textarea class="input input-bordered w-full max-w-xs" placeholder='Email'  {...register("email")} /> <br />

                            <small>Contact number:</small><br /><input class="input input-bordered w-full max-w-xs" placeholder='Contact Number' type="number" {...register("contact")} /> <br />

                            <small>Quantity:</small> <br /><input class="input input-bordered w-full max-w-xs" placeholder='Quantity' type="number" {...register("quantity")} /> <br />

                            <input type="submit" value='Add Product' className='mt-2 text-white btn btn-active btn-primary  max-w-xs' />
                        </form> */}



                        {/* <h2 class="text-primary card-title" >Product name:{product.name}</h2> */}


                        <form onSubmit={handleSubmit} action="">
                            <small>User Name:</small> <br />
                            <input name='userName' disabled value={user.displayName} placeholder='name' type="text" class="input input-bordered w-full max-w-xs" /> <br />

                            <small>Product Name:</small> <br />
                            <input name='product' disabled value={product.name} placeholder='name' type="text" class="input input-bordered w-full max-w-xs" /> <br />

                            <small> Email:</small> <br />
                            <input name='email' disabled value={user.email} type="email" placeholder="email" class="input input-bordered w-full max-w-xs" /><br />

                            <small> Contact number:</small><br />
                            <input name='contact' type="number" placeholder="number" class="input input-bordered w-full max-w-xs" /><br />

                            <small>  Address:</small><br />
                            <input name='address' type="text" placeholder="address" class="input input-bordered w-full max-w-xs" /><br />

                            <small> Product Quantity:</small><br />
                            <input name='quantity' type="number" placeholder="quantity" class="input input-bordered w-full max-w-xs" /><br />
                            <div class="card-actions justify-start ">
                                <button class="btn btn-primary mt-3">Payment</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Purchase;