import React from 'react';
import { useLoaderData } from 'react-router';

const ViewApplication = () => {
    const applications = useLoaderData()
    console.log(applications);
    return (
        <div>
            {
                applications.map(app => <li key={app._id}>{ app.job_id}{app.applicant}</li>)
            }

        </div>
    );
};

export default ViewApplication;