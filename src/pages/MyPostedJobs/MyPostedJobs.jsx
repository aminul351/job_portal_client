import React, { useEffect, useState } from 'react';
import PostedJobList from './PostedJobList';
import useAuth from '../../hooks/useAuth';

const MyPostedJobs = () => {

    const { user } = useAuth()

console.log(user?.email);
    const [postedJobs, setPostedJobs] = useState([])
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/jobs?email=${user.email}`)
                .then(res => res.json())
                .then(setPostedJobs)
                .catch(console.error)
        }
    }, [user?.email])

    console.log(postedJobs);


    return (
        <div>
            <PostedJobList postedJobs={postedJobs}/>
        </div>
    );
};

export default MyPostedJobs;