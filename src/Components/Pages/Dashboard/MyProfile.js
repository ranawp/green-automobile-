import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <div className='mt-5 p-6 w-full'>
            <h3 className='mb-6 text-primary font-bold text-2xl'>Update Your Profile </h3>
            <div className=''>

                <small>Name:</small><br /><input type="text" placeholder="Your Name" value={user.displayName} class="input input-bordered w-full max-w-xs" /> <br />
                <small>Email:</small> <br />
                <input type="email" value={user.email} disabled placeholder=" your email" class="input input-bordered w-full max-w-xs" /> <br />

                <small>Contact number:</small> <br />
                <input type="number" placeholder="Update your Contact Number" class="input input-bordered w-full max-w-xs" /> <br />


                <small>User profile Image:</small><br /><input type="text" placeholder="put image URL" class="input input-bordered w-full max-w-xs" /> <br />


                <input type="submit" value='SUBMIT' className='mt-2 text-white btn btn-active btn-primary  max-w-xs' />
            </div>
        </div>
    );
};

export default MyProfile;