import React from 'react';
import CountUp from 'react-countup';

const BusinessSummary = () => {


    return (
        <div>
            <h2 className='text-primary text-3xl text-center mt-10'>Business Summary</h2>
            <div className=' flex mt-3 mb-3 justify-center '>

                <div className='grid grid-cols-3 gap-20 '>
                    <div className='shadow-xl p-6'>
                        <h3 className='font-bold text-primary'>Over Products</h3>
                        <div className='font-bold text-secondary text-2xl'>

                            <CountUp
                                end={50}
                                duration={5}

                            />+
                        </div>
                        <h3 className='font-bold text-primary'>Products</h3>
                    </div>
                    <div className='shadow-xl p-6'>
                        <h3 className='font-bold text-primary'>We love with </h3>
                        <div className='font-bold text-secondary text-2xl'>

                            <CountUp
                                end={5}
                                duration={5}
                            />+
                        </div>
                        <h3 className='font-bold text-primary'>Years of experience</h3>
                    </div>
                    <div className='shadow-xl p-6'>
                        <h3 className='font-bold text-primary'>Presence in over </h3>
                        <div className='text-2xl font-bold text-secondary'>
                            <CountUp
                                end={30}
                                duration={8}
                            />+
                        </div>
                        <h3 className='font-bold text-primary'>Customers</h3>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BusinessSummary;