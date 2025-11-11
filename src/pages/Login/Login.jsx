import React from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { use } from 'react';

const Login = () => {

  const {signInUser} = use(AuthContext)

 const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email,password)

        signInUser(email,password)
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
                                        <h1 className='text-5xl font-bold'>Login Now!</h1>
            
                                        <div className="card-body">
                                            <form onSubmit={handleLogin}>
                                                <label className="label">Email</label>
                                                <input type="email" name='email' className="input" placeholder="Email" />
                                                <label className="label">Password</label>
                                                <input type="password" name='password' className="input" placeholder="Password" />
                                                <div><a className="link link-hover">Forgot password?</a></div>
                                                <button  className="btn btn-neutral mt-4">Login </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
            
                              
            
                            </div>
                        </div>
        </div>
    );
};

export default Login;