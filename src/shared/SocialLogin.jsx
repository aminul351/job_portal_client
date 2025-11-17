import React, { use, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router';

const SocialLogin = ({from}) => {


    const { signInWithGoogle } = use(AuthContext)
    const navigate = useNavigate()


    const handleGoogleSignin = () => {
        signInWithGoogle()
            .then((result) => {
                console.log(result);
                navigate(from || '/')
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