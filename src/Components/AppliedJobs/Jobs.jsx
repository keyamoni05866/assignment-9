import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {  getAppliedJobs } from "../../utilities/fakedb";

const Jobs = () => {
//   const [appliedJobs, setAppliedJobs] = useState([]);
//   console.log(appliedJobs)
//   const fullJobs = useLoaderData();
//   console.log(fullJobs)
//   useEffect(() =>{
//    let newArray = [];
//    const newAppliedJobs = appliedJobsGet();
//    console.log(newAppliedJobs);
//    for(const id in newAppliedJobs){
//     const jobs = fullJobs.find(singleJob => singleJob.id ===  +id);
//     if(jobs){
//         newArray.push(jobs)
//     }
//    } 
//    setAppliedJobs(newArray);
//   }, [])
const [jobs, setJobs] = useState([]);

const allJobs = useLoaderData();
console.log(allJobs)

useEffect(() => {
        let containJobs = [];
        const appliedJobs =getAppliedJobs()
        for (const id in appliedJobs) {
            const findJobs = allJobs.find((singleJob )=> singleJob.id === +id);
            console.log(findJobs)
            if (findJobs) {
                containJobs.push(findJobs)
            }
        }
        setJobs(containJobs)
       
    }, [])
    console.log(jobs)
  return (
    <div>
      <div className="relative img-container  ">
        <img
          src="https://i.ibb.co/86zJxh1/Vector-1.png"
          alt=""
          className="absolute bottom-0 top-0 right-0"
        />
        <div className="text-center absolute top-28 left-1/2">
          <h2 className="text-3xl font-semibold  ">Applied Jobs</h2>
        </div>
        <img src="https://i.ibb.co/PmNx9HL/Vector.png" alt="" className="" />
      </div>

      <div>

      </div>



    </div>
  );
};

export default Jobs;
