import React from 'react';

const JobCard = ({job}) => {
    console.log(job);
    
    const {title, description,category, jobType, location} = job;

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
  
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <p>category : {category}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default JobCard;