import React from 'react';

const TeamMemeber = () => {

    return (
        <div className='mt-20 max-w-screen-xl	 mx-auto  p-6'>
            <h3 className='text-center text-primary text-4xl font-bold mb-5 '>Team memeber</h3>
            <div className='grid justify-items-center lg:grid-cols-3 md:grid-cols-2 gap-4  '>
                <div class="card  bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://i.ibb.co/bXBzShq/Team-memeber-01-3.png" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Mr. Abdullah</h2>
                        <p>CEO</p>

                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://i.ibb.co/bXvmfp3/team-member-3-2.jpg" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Mr.Hasib</h2>
                        <p>Manager</p>

                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://i.ibb.co/30wc8dW/team-member-2-2.jpg" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Sohana</h2>
                        <p>Assistant manager</p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default TeamMemeber;