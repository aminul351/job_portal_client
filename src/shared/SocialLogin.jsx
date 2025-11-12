import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const SocialLogin = () => {


    const { signInWithGoogle } = use(AuthContext)
    const handleGoogleSignin = () => {
        signInWithGoogle()
        .then((result)=>{
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <button className='btn' onClick={handleGoogleSignin}>Google Login</button>
        </div>
    );
};

export default SocialLogin;