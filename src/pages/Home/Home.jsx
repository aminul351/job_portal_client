import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        console.log("✅ Jobs fetched:", data);
      })
      .catch(err => console.error("❌ Error fetching jobs:", err));
  }, []);

  return (
    <div>
      {/* <Banner /> */}
      <HotJobs jobs={jobs} />   {/* pass data here */}
    </div>
  );
};

export default Home;
