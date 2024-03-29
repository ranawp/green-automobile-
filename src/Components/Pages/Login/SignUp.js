import React from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../Shared/Hooks/useToken';
import Loading from '../../Shared/Loading';

const SignUp = () => {


    const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, updateerror] = useUpdateProfile(auth);

    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        signUpuser,
        signUploading,
        signUperror,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [token] = useToken(googleuser || signUpuser)

    let signInerror;

    if (googleloading || signUploading || updating) {
        return <Loading></Loading>
    }

    if (signUperror || googleerror || updateerror) {
        signInerror = <small className='text-red-500'>{signUperror?.message || googleerror.message}</small>
    }

    if (googleuser || signUpuser) {
        // console.log(googleuser)
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        navigate('/login')
    };
    if (token) {
        navigate('/dashboard')
    }




    return (
        <div className='flex mt-3 mb-3 justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold text-primary">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            {/*input email started */}
                            <input type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required"
                                    }

                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}


                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            {/*input email started */}
                            <input type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        {/* password started */}

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder=" password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "password is required"
                                    },

                                    minLength: {
                                        value: 6,
                                        message: 'Must be six character or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInerror}

                        <input type="submit" value='Sign Up' className='text-white btn btn-active btn-primary w-full max-w-xs' />
                    </form>
                    <p>Already have an Account? <small><Link className='text-primary' to='/login'>Please Login</Link></small> </p>


                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline btn-primary">CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;