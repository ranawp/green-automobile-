import React from 'react';
import notFound from '../../../assets/images/notfound.jpg'
const NotFound = () => {
    return (
        <div style={{ backgroundColor: '#E5E5E5' }}>
            <img className='w-100 mx-auto' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;