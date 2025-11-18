import React from 'react';

const ApplicationList = ({ applicationsData }) => {
    console.log('Applications Data:', applicationsData);

    // Add proper null/loading check
    if (!applicationsData) {
        return <div>Loading applications data...</div>;
    }

    if (applicationsData.length === 0) {
        return <div>No applications found.</div>;
    }

    return (
        <div>
            {applicationsData.map(app => (
                <div key={app._id}>
                    {app.jobId}{app.applicant} {app.linkedin}
                    </div>
            ))}
        </div>
    );
};

export default ApplicationList;