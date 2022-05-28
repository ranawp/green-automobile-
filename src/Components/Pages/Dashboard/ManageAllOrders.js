import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const ManageAllOrders = () => {
    const [bookings, setBookings] = useState([]);
    const [user] = useAuthState(auth)

    useEffect(() => {
        if (user) {
            fetch(`https://calm-coast-29564.herokuapp.com/bookings?user=${user.email}`)
                .then(res => res.json())
                .then(data => setBookings(data))

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
                                <td><select class="select select-bordered  max-w-xs">
                                    <option selected>Unpaid</option>
                                    <option>paid</option>
                                    <option>pending</option>
                                </select></td>
                            </tr>)

                        }




                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageAllOrders;