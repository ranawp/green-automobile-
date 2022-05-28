import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Users from './Users';

const AllUsers = () => {
    const [singleUser, setSingleUser] = useState([]);
    const [reload, setReload] = useState(false)

    useEffect(() => {
        fetch('https://calm-coast-29564.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setSingleUser(data))
    }, [singleUser])


    return (
        <div>
            <h4 className='text-primary font-bold text-2xl'>All Users</h4>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Serial</th>

                            <th>User Email</th>
                            <th>Job</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            singleUser.map((singleUser, index) => <Users

                                key={singleUser._id}
                                user={singleUser}
                                index={index}
                                reload={reload}
                                setReload={setReload}
                            ></Users>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;