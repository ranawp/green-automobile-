import React from 'react';

import './Header.css'
const Header = () => {

    return (
        <div className="hero min-h-screen banner " >
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md text-white">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="text-white btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Header;