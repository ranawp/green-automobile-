import React, { useEffect, useState } from 'react';


const useToken = (user) => {
    const [token, setToken] = useState('');
    // console.log('token', token)
    useEffect(() => {
        const email = user?.user?.email;
        const currentuser = { email: email }
        if (email) {
            fetch(`https://calm-coast-29564.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentuser)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log('data inside usetoken', data)

                    const accessToken = data.token;

                    localStorage.setItem('accesToken', accessToken)
                    setToken(accessToken)
                })
        }
    }, [user])
    return [token]

};

export default useToken;