import React from 'react';

const AddReview = () => {

    return (
        <div className='mt-5 p-6 w-full'>
            <h3 className='text-center text-primary font-bold text-2xl'>Add review </h3>
            <div className=''>
                <small>Name:</small><br /><input type="text" placeholder="Your Name" class="input input-bordered w-full max-w-xs" /> <br />


                <small>Image:</small><br /><input type="text" placeholder="Your Image" class="input input-bordered w-full max-w-xs" /> <br />
                <small>Rattings out of five.Example:3/5 </small><br /><input type="text" placeholder="Rattings" class="input input-bordered w-full max-w-xs" /> <br />
                <small>Write Massage:</small> <br /><textarea class="textarea textarea-bordered max-w-xs" placeholder="Write your massage..."></textarea> <br />
                <input type="submit" value='SUBMIT' className='text-white btn btn-active btn-primary  max-w-xs' /> <br />



            </div>
        </div>
    );
};

export default AddReview;