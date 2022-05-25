import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const imageStoragekey = '3cf84befed9b9bcd8f1d01c2b4412701';

    const onSubmit = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStoragekey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result)
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        description: data.description,
                        price: data.price,
                        minimumOrder: data.minimumOrder,
                        img: img
                    }

                    //send to database 
                    fetch('http://localhost:5000/product', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log('products', result)
                        })
                }

            })
        // console.log(data)
        // const url = `http://localhost:5000/product`
        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         console.log(result)
        //     })
    };
    // const onSubmit = data => { 

    //     console.log(data)
    //     const url = `http://localhost:5000/product`
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
    // const imageStoragekey=`3cf84befed9b9bcd8f1d01c2b4412701`

    return (
        <div className=''>
            <h3 className='text-primary text-2xl font-bold mt-20'>Add Product. Admin role</h3>
            <form onSubmit={handleSubmit(onSubmit)}>

                <small>Product Name: <br /></small><input class="input input-bordered w-full max-w-xs" placeholder='Product Name'  {...register("name", { required: true, maxLength: 20 })} /> <br />

                {/* <small>Product Image: <br /></small><input class="input input-bordered w-full max-w-xs" placeholder='Input Image URL'  {...register("img", { required: true })} /> <br /> */}

                <small>Product Description:</small><br /><textarea class="input input-bordered w-full max-w-xs" placeholder='Product Description'  {...register("description")} /> <br />

                <small>Price:</small><br /><input class="input input-bordered w-full max-w-xs" placeholder='Price' type="number" {...register("price")} /> <br />

                <small>Quantity:</small> <br /><input class="input input-bordered w-full max-w-xs" placeholder='Quantity' type="number" {...register("minimumOrder")} /> <br />

                <small>Image:</small> <br /><input class="input input-bordered w-50 max-w-xs" placeholder='Quantity' type="file" {...register("image")} /> <br />

                <input type="submit" value='Add Product' className='mt-2 text-white btn btn-active btn-primary  max-w-xs' />
            </form>
        </div>
    );
};

export default AddProduct;