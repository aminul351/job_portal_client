import React, { use } from 'react';
import Lottie from "lottie-react";
import lottieRegister from '../../assets/lotties/register.json'
import { AuthContext } from '../../contexts/AuthContext';
import { NavLink } from 'react-router';
import SocialLogin from '../../shared/SocialLogin';
const Register = () => {

    const {createUser} = use(AuthContext)

    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email,password)

        createUser(email,password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex">
                    <div>
                        <div className="card  w-1/2  shrink-0 shadow-2xl">
                            <h1 className='text-5xl font-bold'>Register Now!</h1>

                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <label className="label">Email</label>
                                    <input type="email" name='email' className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" name='password' className="input" placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button  className="btn btn-neutral mt-4">Register </button>
                                    <p>already have an account 
                                        <NavLink to={'/login'}><button>
                                        Login
                                        </button></NavLink>
                                        </p>
                                
                                </form>
                                <p>OR</p>
                                <div>
                                   <SocialLogin/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Lottie className='w-96' animationData={lottieRegister} loop={true} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;