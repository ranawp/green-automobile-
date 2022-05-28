import React from 'react';

const Users = ({ user, index, reload, setReload }) => {
    // console.log(user.email)
    // const { email } = user;
    const makeAdmin = () => {
        fetch(`https://calm-coast-29564.herokuapp.com/users/admin/${user.email}`, {
            method: `PUT`,
            headers: {
                authorization: `Bearer ${localStorage.getItem('accesToken')}`
            }
        }, [user])
            .then(res => res.json())
            .then(data => {
                console.log(data)
                reload(!setReload)
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