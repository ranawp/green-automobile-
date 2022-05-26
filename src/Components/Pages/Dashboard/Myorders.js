import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Myorders = () => {
    const [bookings, setBookings] = useState([]);
    const [user] = useAuthState(auth)
    // console.log(user)
    useEffect(() => {
        if (user) {

            fetch(`http://localhost:5000/bookings?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accesToken')}`
                }
            }, [user])
                .then(res => {
                    // console.log('res', res);
                    return res.json()
                })
                .then(data => {

                    setBookings(data)
                })
        }
    }, [user])
    return (
        <div>
            <h5 className='text-2xl text-primary font-bold'> My orders</h5>
            <p> <span className='text-primary font-bold'>My Email:</span>{user.email}</p>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Product image</th>
                            <th>Product Name</th>
                            <th>price</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, index) => <tr>
                                <th>{index + 1}</th>

                                <td ><img className='w-14' src={booking.img} alt="" /></td>
                                <td>{booking.productName} </td>
                                <td>{booking.price}</td>
                                <td><input type="submit" value='Cancel' className='text-white btn btn-active btn-primary w-full max-w-xs' /></td>
                            </tr>)

                        }




                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Myorders;