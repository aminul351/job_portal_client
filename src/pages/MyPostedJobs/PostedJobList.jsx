import React from 'react';
import { Link } from 'react-router';

const PostedJobList = ({ postedJobs }) => {
    console.log(postedJobs);
    return (
        <div>
            {postedJobs.length}

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Deadline</th>
                            <th>Application</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            postedJobs.map((job, index) => <tr key={job._id}    className="bg-base-200">
                                <th>{index+1}</th>
                                <td>{job.title}</td>
                                <td>{job.deadline}</td>
                                <td><Link to={`/applications/${job._id}`}>View Application</Link></td>
                                
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PostedJobList;