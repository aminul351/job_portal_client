import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router';

const ViewApplication = () => {
    const applications = useLoaderData()
    console.log(applications);


    const handleStatusChange = (e, app_id) => {
        // e.preventDefault()
        axios.patch(`http://localhost:3000/applications/${app_id}`, {status : e.target.value})
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Deadline</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            applications.map(application => <tr key={application._id} className="bg-base-200">
                                <th>1</th>
                                <td>{application.applicant}</td>
                                <td>{application.linkedin}</td>

                                {/* <select onChange={e => handleStatusChange(e, application._id)} defaultValue={application.status} className="select">
                                    <option disabled={true}>Update Status</option>
                                    <option>Interview</option>
                                    <option>Pending</option>
                                    <option>Hired</option>
                                    <option>Reject</option>
                                </select> */}
<select defaultValue={application.status} onChange = {e => handleStatusChange(e, application._id)} className="select select-ghost">
  <option disabled={true}>Update status</option>
  <option>Rejected</option>
  <option>Hire</option>
  <option>Interview</option>
</select>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ViewApplication;