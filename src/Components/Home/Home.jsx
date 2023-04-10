import React, { useEffect, useState } from "react";
import "./Home.css";
import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";
import Job from "../Job/Job";

const Home = () => {
  const data1 = useLoaderData();
 const [jobs, setJobs] = useState([]);
 useEffect (() =>{
       fetch('data2.json')
       .then(res => res.json())
       .then(data => setJobs(data))
 },[])

  return (
    <div>
      <div className="banner ">
        <div className="info w-1/2 ms-6">
          <div className="block">
            <div className="text-4xl font-semibold mt-2 ">One Step </div>
            <h1 className="text-4xl font-semibold mt-2 ">Closer To Your </h1>
            <div>
              <span className="text-4xl font-semibold mt-2 text-sky-500">
                Dream Job
              </span>
            </div>
          </div>
          <p className="mt-4 text-lg">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className=" mt-7 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Get Started
          </button>
        </div>
        <div className="img-container w-1/2">
          <img src="https://i.ibb.co/wCdFrK8/P3-OLGJ1-copy-1.png"  alt="" />
        </div>
      </div>

      <div>
        <div className="text-center mt-20">
          <h1 className="text-4xl font-semibold mb-3">Job Category List</h1>
          <p className="text-xl">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="category">
          {data1.map((data) => (
            <Category data={data} key={data.id}></Category>
          ))}
        </div>
        </div>
        <div>
        <div className="text-center mt-20">
          <h1 className="text-4xl font-semibold mb-3">Featured Jobs</h1>
          <p className="text-xl">
          Explore thousands of job opportunities with all the information you need. Its your future
          </p>
        </div>
             <div className="jobs-container ">
             {
                jobs.map(job => <Job job={job} key={job.id}></Job> )
              }
             </div>
        </div>
      
    </div>
  );
};

export default Home;
