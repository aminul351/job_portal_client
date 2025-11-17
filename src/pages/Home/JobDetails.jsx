import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {

    const jobs = useLoaderData()
    const {_id , title, company , location, jobType} = jobs;
    console.log(jobs);

    return (
        <div>
            <h2>{title}</h2>
            <p>location : {location}</p>
            <p>company : {company} </p>
            <p>{jobType}</p>

            <Link to={`/jobApply/${_id}`}><button className='btn'>JOB APPLY</button></Link>
        </div>
    );
};

export default JobDetails;