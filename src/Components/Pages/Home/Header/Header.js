import React from 'react';

import './Header.css'
const Header = () => {

    return (
        <div class="hero min-h-screen banner " >
            <div class="hero-overlay bg-opacity-50"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md text-white">
                    <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                    <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="text-white btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Header;