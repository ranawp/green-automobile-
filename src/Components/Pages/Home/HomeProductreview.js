import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const HomeProductreview = () => {
    const data = [
        {
            id: 1,
            userName: 'Rana',
            testimonial: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, sit.',
            rattings: '4/5',
            img: "https://api.lorem.space/image/face?hash=92048"
        },

        {
            id: 2,
            userName: 'Hridoy',
            testimonial: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, sit.',
            rattings: '4/5',
            img: "https://api.lorem.space/image/face?hash=92048"
        },
        {
            id: 3,
            userName: 'Partha',
            testimonial: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, sit.',
            rattings: '4/5',
            img: "https://api.lorem.space/image/face?hash=92048"
        },
        {
            id: 4,
            userName: 'Pankaj',
            testimonial: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, sit.',
            rattings: '4/5',
            img: "https://api.lorem.space/image/face?hash=92048"
        },
        {
            id: 5,
            userName: 'Dipen',
            testimonial: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, sit.',
            rattings: '4/5',
            img: "https://api.lorem.space/image/face?hash=92048"
        },
        {
            id: 6,
            userName: 'Arnab',
            testimonial: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, sit.',
            rattings: '4/5',
            img: "https://api.lorem.space/image/face?hash=92048"
        },
    ]
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

                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >

                        {
                            data.map(user =>

                                <SwiperSlide>
                                    <div className='grid justify-items-center text-center '>
                                        <div class="avatar">
                                            <div class="w-24 rounded">
                                                <img src={user.img} alt="" /> <br />
                                            </div>
                                        </div>

                                        Name:{user.userName} <br />
                                        {user.testimonial} <br />
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