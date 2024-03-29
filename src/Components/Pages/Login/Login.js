import React, { useEffect, useRef } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../Shared/Hooks/useToken';
import useAdmin from '../../Shared/Hooks/useAdmin';


const Login = () => {
    const emailRef = useRef('');
    const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();


    const [
        signInWithEmailAndPassword,
        gmailuser,
        gmailloading,
        gmailerror,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(gmailuser || googleuser)

    let signInerror;
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [adminLoading] = useAdmin(gmailuser || googleuser)
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })
        }
    }, [token, from, navigate])

    if (googleloading || gmailloading || adminLoading) {
        return <Loading></Loading>
    }

    if (gmailerror || googleerror) {
        signInerror = <small className='text-red-500'>{gmailerror?.message || googleerror.message}</small>
    }


    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
        // console.log(data.email, data.password)
    };
    return (
        <div className='flex mt-3 mb-3 justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold text-primary">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            {/*input email started */}
                            <input ref={emailRef} type="email"
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

                        <input type="submit" value='Login' className='text-white btn btn-active btn-primary w-full max-w-xs' />
                    </form>
                    <p>New to green Motors? <small><Link className='text-primary' to='/signup'>Create New Account</Link></small> </p>
                    <p>Forget Passowrd? <span className='text-primary'

                    >Reset Password</span></p>


                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline btn-primary">CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>


    );
};

export default Login;