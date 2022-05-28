import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const HomeProductreview = () => {
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('https://calm-coast-29564.herokuapp.com/reviews', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accesToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <div className='mt-20'>

            <div className='max-w-screen-xl	 mx-auto shadow-2xl p-6'>
                <h3 className='text-center font-bold text-2xl text-primary  mb-6 mt-5'>Testimonial</h3>
                <div>
                    <Swiper

                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                    >
                        {
                            review.map(user =>

                                <SwiperSlide>
                                    <div className='grid justify-items-center text-center '>
                                        <div class="avatar">
                                            <div class="w-24 rounded">
                                                <img src={user.img} alt="" /> <br />
                                            </div>
                                        </div>

                                        Name:{user.name} <br />
                                        {user.massage} <br />
                                        <p className='mb-8'>Rattings: {user.rattings}</p>
                                    </div>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>

            </div>
        </div>
    );
};

export default HomeProductreview;