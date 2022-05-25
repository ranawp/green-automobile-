import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { register, handleSubmit } = useForm();
    // const [review, setReview] = useState({});
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

                        rattings: data.rattings,
                        img: img
                    }

                    //send to database 
                    fetch('http://localhost:5000/reviews', {
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
    }


    // const handleSubmit = event => {
    //     event.preventDefault();
    //     const clientName = event.target.name.value;
    //     const clientImg = event.target.image.value;
    //     const rattings = event.target.rattings.value;
    //     const massage = event.target.massage.value;
    //     /////////////
    //     console.log(event);
    //     // const image = event.image[0];
    //     // const formData = new FormData();
    //     // formData.append('image', image);
    //     // const url = `https://api.imgbb.com/1/upload?key=${imageStoragekey}`;
    //     // fetch(url, {
    //     //     method: 'POST',
    //     //     body: formData
    //     // })
    //     //     .then(res => res.json())
    //     //     .then(result => {
    //     //         console.log(result)
    //     //         if (result.success) {
    //     //             const img = result.data.url;
    //     //             const reviews = {
    //     //                 clientName: clientName,
    //     //                 clientImg: clientImg,
    //     //                 rattings: rattings,
    //     //                 massage: massage,
    //     //                 img: img
    //     //             }
    //     //             fetch('http://localhost:5000/reviews', {
    //     //                 method: 'POST',
    //     //                 headers: {
    //     //                     'content-type': 'application/json'
    //     //                 },
    //     //                 body: JSON.stringify(reviews)
    //     //             })
    //     //                 .then(res => res.json())
    //     //                 .then(result => {
    //     //                     console.log('reviews', result)
    //     //                 })
    //     //         }
    //     //     })


    // }

    // const handleSubmit = event => {
    //     event.preventDefault();
    //     const clientName = event.target.name.value;
    //     const clientImg = event.target.image.value;
    //     const rattings = event.target.rattings.value;
    //     const massage = event.target.massage.value;

    //     const reviews = {
    //         clientName: clientName,
    //         clientImg: clientImg,
    //         rattings: rattings,
    //         massage: massage
    //     }
    //     fetch('http://localhost:5000/reviews', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(reviews)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    // }


    return (
        <div className='mt-5 p-6 w-full'>
            <h3 className='text-center text-primary font-bold text-2xl'>Add review </h3>
            <div className=''>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <small>Client Name: <br /></small><input class="input input-bordered w-full max-w-xs" placeholder='Write Your Name'  {...register("name", { required: true, maxLength: 20 })} /> <br />



                    <small>Description:</small><br /><textarea class="input input-bordered w-full max-w-xs" placeholder='Share your Experience'  {...register("description")} /> <br />



                    <small>Rattings:</small> <br /><input class="input input-bordered w-full max-w-xs" placeholder='Service Ratting' type="text" {...register("rattings")} /> <br />

                    <small>Image:</small> <br /><input class="input input-bordered w-50 max-w-xs" placeholder='Quantity' type="file" {...register("image")} /> <br />

                    <input type="submit" value='Add Product' className='mt-2 text-white btn btn-active btn-primary  max-w-xs' />
                </form>
                {/* <form action="" onSubmit={handleSubmit} >
                    <small>Name:</small><br /><input name='name' type="text" placeholder="Your Name" class="input input-bordered w-full max-w-xs" /> <br />


                 

                    <small>Rattings out of five.Example:3/5 </small><br /><input name='rattings' type="text" placeholder="Rattings" class="input input-bordered w-full max-w-xs" /> <br />

                    <small>Write Massage:</small> <br /><textarea name='massage' class="textarea textarea-bordered max-w-xs" placeholder="Write your massage..."></textarea> <br />
                    <small>Image:</small><br /><input type="file" name='image' placeholder="Your Image" class="input input-bordered w-full max-w-xs" /> <br />
                    <input type="submit" value='SUBMIT' className='text-white btn btn-active btn-primary  max-w-xs' /> <br />
                </form> */}



            </div>
        </div>
    );
};

export default AddReview;