import React from 'react';

const NewsStaller = () => {
    return (

        <div>
            <h1 className='mt-20 mb-5 text-center font-bold text-primary text-4xl'>Stay with Us</h1>
            <div className=' grid lg:grid-cols-2 gap-4 max-w-screen-xl mx-auto shadow-2xl p-6 rounded-lg'>

                <div class="grid grid-flow-col lg:gap-5 md:gap-3 text-center ">
                    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span class="countdown font-mono lg:text-5xl md:text-1xl">
                            <span style={{ "--value": 15 }}></span>
                        </span>
                        days
                    </div>
                    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span class="countdown font-mono lg:text-5xl md:text-2xl">
                            <span style={{ "--value": 10 }}></span>
                        </span>
                        hours
                    </div>
                    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span class="countdown font-mono lg:text-5xl md:text-2xl">
                            <span style={{ "--value": 24 }}></span>
                        </span>
                        min
                    </div>
                    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span class="countdown font-mono lg:text-5xl md:text-2xl">
                            <span style={{ "--value": 50 }}></span>
                        </span>
                        sec
                    </div>
                </div>
                <div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text text-secondary font-bold">Subscribe with your email and Get 20% discount</span>
                        </label>
                        <label class="lg:flex ">

                            <input type="text" placeholder="Input Your Email" class="input input-bordered" />
                            <span className='btn btn-primary'>Subscribe</span>
                        </label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsStaller;