import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';


const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    // const { id } = useParams()
    // console.log(id)


    // const [getUsers, setUser] = useState({})
    // console.log(_id)

    // useEffect(() => {
    //     const url = `https://calm-coast-29564.herokuapp.com/users/${user.id}`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])

    // const handleUpdateUser = event => {
    //     event.preventDefault();
    //     // const name = user.name;
    //     const email = event.target.email.value;
    //     const contactNumber = event.target.contactNumber.value;
    //     const location = event.target.location.value;
    //     const linkdin = event.target.linkdin.value;
    //     const education = event.target.education.value;
    //     const image = event.target.image.value;
    //     console.log(email, contactNumber, location, linkdin, education, image)

    //     const updateUser = { contactNumber, location, linkdin, education, image }

    //     const url = `https://calm-coast-29564.herokuapp.com/users/${id}`
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(updateUser)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log('success', data)
    //         })
    // }


    return (
        <div className='flex mt-3 mb-3 justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h3 className='mb-6 text-primary font-bold text-2xl '>Update Your Profile </h3>
                    <div className=' p-10 '>
                        {/* onSubmit={handleUpdateUser} */}
                        <form action="">

                            <small>Name:</small><br /><input type="text" name='name' placeholder="Your Name" value={user.displayName} class="w-full input input-bordered  max-w-xs" /> <br />

                            <small>Email:</small> <br />
                            <input type="email" name='email' value={user.email} readOnly placeholder=" your email" class="input input-bordered  max-w-xs w-full" /> <br />

                            <small>Contact number:</small> <br />
                            <input type="number" name='contactNumber' placeholder="Update your Contact Number" class="w-full input input-bordered max-w-xs" /> <br />

                            <small>Location</small> <br />
                            <input name='location' type="text" placeholder="City/district" class="input input-bordered w-full  max-w-xs" /> <br />

                            <small>Linkdin profile</small> <br />
                            <input name='linkdin' type="text" placeholder="linkdin link" class="input input-bordered w-full max-w-xs" /> <br />

                            <small>Education</small> <br />
                            <input name='education' type="text" placeholder="Education" class="input input-bordered w-full  max-w-xs" /> <br />


                            <small>User profile Image:</small><br /><input name='image' type="text" placeholder="put image URL" class="input input-bordered w-full max-w-xs" /> <br />


                            <input type="submit" value='SUBMIT' className='mt-2 text-white btn btn-active btn-primary  max-w-xs' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;