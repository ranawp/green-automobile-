import React, { useState } from 'react';

const AddReview = () => {
    const [review, setReview] = useState({});
    const handleSubmit = event => {
        event.preventDefault();
        const clientName = event.target.name.value;
        const clientImg = event.target.image.value;
        const rattings = event.target.rattings.value;
        const massage = event.target.massage.value;

        const reviews = {
            clientName: clientName,
            clientImg: clientImg,
            rattings: rattings,
            massage: massage
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }


    return (
        <div className='mt-5 p-6 w-full'>
            <h3 className='text-center text-primary font-bold text-2xl'>Add review </h3>
            <div className=''>
                <form action="" onSubmit={handleSubmit} >
                    <small>Name:</small><br /><input name='name' type="text" placeholder="Your Name" class="input input-bordered w-full max-w-xs" /> <br />


                    <small>Image:</small><br /><input type="text" name='image' placeholder="Your Image" class="input input-bordered w-full max-w-xs" /> <br />

                    <small>Rattings out of five.Example:3/5 </small><br /><input name='rattings' type="text" placeholder="Rattings" class="input input-bordered w-full max-w-xs" /> <br />

                    <small>Write Massage:</small> <br /><textarea name='massage' class="textarea textarea-bordered max-w-xs" placeholder="Write your massage..."></textarea> <br />
                    <input type="submit" value='SUBMIT' className='text-white btn btn-active btn-primary  max-w-xs' /> <br />
                </form>



            </div>
        </div>
    );
};

export default AddReview;