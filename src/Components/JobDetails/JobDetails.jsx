import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import "./JobDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faPhone,
  faEnvelope,
  faCalendarAlt,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";



const JobDetails = () => {
  const [singleJobs, setSingleJobs] = useState({});
  const JobDetails = useLoaderData();
  const id = useParams();

  const {

    job_description,
    job_responsibilities,
    educational_requirements,
    experience,
    salary,
    title,
    phone,
    email,
    address,
 
  } = singleJobs;


  useEffect(() => {
    const details = JobDetails.find((job) => job.id == id.jobId);
    setSingleJobs(details);
  }, []);


   
  return (
    <div className="">
      <div className="relative img-container  ">
  
      <img src="https://i.ibb.co/86zJxh1/Vector-1.png" alt="" className="absolute bottom-0 top-0 right-0" />
      <div className="text-center absolute top-28 left-1/2"><h2 className="text-3xl font-semibold  ">Job Details</h2></div>
      <img src="https://i.ibb.co/PmNx9HL/Vector.png" alt="" className=""/> 
      
      </div>
      <div className="flex gap-7 w-full ">
        <div className="description mt-2  w-3/5">
          <p className="  text-xl font-semibold text-justify">
            Job Description:{" "}
            <span className="text-lg font-light">{job_description}</span>
          </p>
          <p className="  text-xl font-semibold text-justify mt-4">
            Job Responsibilities:{" "}
            <span className="text-lg font-light">{job_responsibilities}</span>
          </p>
          <h1 className="text-xl font-semibold text-justify mt-4">
            Educational Requirements:
          </h1>
          <span className="text-lg font-light">{educational_requirements}</span>
          <h1 className="text-xl font-semibold text-justify mt-4">
            Educational Requirements:
          </h1>
          <span className="text-lg font-light">{experience}</span>
        </div>
        <div className="">
          <div className="contact-info ">
            <h1 className=" text-2xl font-semibold ms-7 detail mt-5 text-center">
              Job Details
            </h1>
            <p className="mt-6 ms-8 font-semibold ">
              {" "}
              <FontAwesomeIcon icon={faDollarSign} /> Salary:
              <span className="ps-1"> {salary} (Per Month)</span>
            </p>
            <p className="mt-6 ms-8 font-semibold">
              {" "}
              <FontAwesomeIcon icon={faCalendarAlt} /> Job-Title:
              <span className="ps-1"> {title} </span>
            </p>

            <h1 className=" text-2xl font-semibold ms-7 detail mt-5 text-center">
              Contact Information
            </h1>
            <p className="mt-6 ms-8 font-semibold ">
              {" "}
              <FontAwesomeIcon icon={faPhone} /> Phone:
              <span className="ps-1"> {phone} </span>
            </p>
            <p className="mt-6 ms-8 font-semibold ">
              {" "}
              <FontAwesomeIcon icon={faEnvelope} /> Email:
              <span className="ps-1"> {email} </span>
            </p>
            <p className="mt-6 ms-8 font-semibold ">
              {" "}
              <FontAwesomeIcon icon={faLocationDot} /> Address:
              <span className="ps-1"> {address} </span>
            </p>
          </div>
          <button className="mt-4 mb-0 py-2 px-4 apply text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 w-full">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
