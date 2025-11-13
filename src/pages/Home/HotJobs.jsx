const HotJobs = ({ jobs }) => {
  return (
    <div>
      <h2>🔥 Hot Jobs</h2>
      {jobs.length === 0 ? (
        <p>No jobs found</p>
      ) : (
        jobs.map(job => (
          <div key={job._id}>
            <h3>{job.title}</h3>
            {/* <p>{job.company}</p> */}
          </div>
        ))
      )}
    </div>
  );
};

export default HotJobs;
