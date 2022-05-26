import React from 'react';

const Users = ({ user, index }) => {
    // console.log(user.email)
    // const { email } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/users/admin/${user.email}`, {
            method: `PUT`,
            headers: {
                authorization: `Bearer ${localStorage.getItem('accesToken')}`
            }
        }, [user])
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (

        <tr>
            <th>{index + 1}</th>



            <td>{user.email}</td>

            <td>{user.role !== 'admin' && <input onClick={makeAdmin} type="submit" value='Make admin' className='text-white btn btn-active btn-primary  max-w-xs' />}</td>

            <td><input type="submit" value='Remove' className='text-white btn btn-active btn-primary max-w-xs' /></td>
        </tr>

    );
};

export default Users;