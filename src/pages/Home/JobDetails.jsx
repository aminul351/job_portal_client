import React from 'react';
import { useLoaderData } from 'react-router';

const JobDetails = () => {

    const jobs = useLoaderData()
    const {title, company , location, jobType} = jobs;
    console.log(jobs);

    return (
        <div>
            <h2>{title}</h2>
            <p>location : {location}</p>
            <p>company : {company} </p>
            <p>{jobType}</p>
        </div>
    );
};

export default JobDetails;