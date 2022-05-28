import React from 'react';
import image from '../../assets/images/ranasaha.jpg'
const About = () => {
    return (
        <div className=' max-w-screen-lg mx-auto'>
            <div>
                <h3 className='text-center font-bold text-2xl text-primary mt-10 mb-5'>About me</h3>
                <div className='grid lg:grid-cols-2'>
                    <div>
                        <img width='500px' src={image} alt="" />
                    </div>
                    <div>
                        Name:Rana Saha
                        Email:ranaakash2289@gmail.com
                        Educational Background: Graduated.
                        technolodgy list:
                        HTML: <progress class="progress progress-success w-56" value="85" max="100"></progress> <br />
                        CSS: <progress class="progress progress-success w-56" value="70" max="100"></progress>
                        <br /> Bootstrap:<progress class="progress progress-success w-56" value="70" max="100"></progress>
                        <br /> Tailwind: <progress class="progress progress-success w-56" value="60" max="100"></progress>

                        <br /> Javascript: <progress class="progress progress-success w-56" value="100" max="70"></progress>
                        <br /> Express: <progress class="progress progress-success w-56" value="40" max="100"></progress>
                        <p>You can see my some portfolio website that can help you to know my skill. Everyday i trying to develope my skills.</p>
                        <h3 className='font-bold text-primary'>My Portfolio link</h3>
                        <p>Portfolio link 1 : <span className='text-primary'> https://warehouse-197e7.web.app/</span></p>
                        <p>Portfolio link 2: <span className='text-primary'> https://dental-health-ec494.web.app/</span> </p>
                        <p>portfolio link 3: <span className='text-primary'> https://ranawp.github.io/assignment-part-2/</span></p>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;