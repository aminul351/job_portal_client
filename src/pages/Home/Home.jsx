import React, { Suspense, useEffect, useState } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';
import { ToastContainer } from 'react-toastify';

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



  // const jobPromise = fetch('http://localhost:3000/jobs').then(res => res.json())

  return (
    <div>
      <Banner />
      <HotJobs jobs={jobs} />  
      {/* <Suspense fallback={"loading..."}>
        <HotJobs jobPromise={jobPromise} />
      </Suspense> */}
      <ToastContainer/>
    </div>
  );
};

export default Home;
