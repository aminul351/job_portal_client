import React from 'react';

import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router';

const JobCard = ({ job }) => {
  console.log(job);

  const { _id, salaryRange, company, requirements, company_logo, title, description, category, jobType, location } = job;

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">

        <div className="card-body">

          <div className='flex gap-3 items-center'>
            <img src={company_logo} alt="" />
            <div>
              <h2 className="card-title">{title} <div className='badge badge-outline'>NEW</div></h2>
              <div className='flex items-center gap-3'>
                <CiLocationOn />
                <p> {location}</p>
              </div>
            </div>
          </div>
          <p className='font-bold'>{category}</p>
          <p>Salary : {salaryRange.min} - {salaryRange.max} {salaryRange.currency} </p>
          <p>{description}</p>
          <div>
            {
              requirements.map((req, index) => <div className='badge badge-outline' key={index}>{req}</div>)
            }
          </div>
          <div className="card-actions justify-end">
            <Link to={`/jobs/${_id}`}><button className="btn btn-primary">Job Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;