import React from 'react';
import JobApplication from './JobApplication';

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
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            #
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        applicationsData.map((application, index) => <JobApplication key={application._id} application={application} index={index}></JobApplication>)
     }
      
    </tbody>
    {/* foot */}
    {/* <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr> */}
    {/* </tfoot> */}
  </table>
</div>
        </div>

    );
};

export default ApplicationList;