import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/product`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    };

    return (
        <div>
            <h3 className='text-primary text-2xl font-bold mt-20'>Add Product. Admin role</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <small>Product Name: <br /></small><input class="input input-bordered w-full max-w-xs" placeholder='Product Name'  {...register("name", { required: true, maxLength: 20 })} /> <br />
                <small>Product Image: <br /></small><input class="input input-bordered w-full max-w-xs" placeholder='Input Image URL'  {...register("img", { required: true })} /> <br />
                <small>Product Description:</small><br /><textarea class="input input-bordered w-full max-w-xs" placeholder='Product Description'  {...register("description")} /> <br />
                <small>Price:</small><br /><input class="input input-bordered w-full max-w-xs" placeholder='Price' type="number" {...register("price")} /> <br />
                <small>Quantity:</small> <br /><input class="input input-bordered w-full max-w-xs" placeholder='Quantity' type="number" {...register("minimumOrder")} /> <br />

                <input type="submit" value='Add Product' className='mt-2 text-white btn btn-active btn-primary  max-w-xs' />
            </form>
        </div>
    );
};

export default AddProduct;