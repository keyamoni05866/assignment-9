import React from "react";
import "./Job.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollarSign } from "@fortawesome/free-solid-svg-icons";
const Job = ({ job }) => {
  const { title, company_name, location, Image, salary, job_type1, job_type2 } =
    job;

  return (
    <div className="single-job ">
      <img src={Image} alt="" className="w-28" />
      <h1 className="text-xl font-semibold pt-2 pb-2">{title}</h1>
      <p className="text-lg pb-2">{company_name}</p>
      <button className=" px-3 py-1 span1 me-2 mb-3">
        <span className="span">{job_type1}</span>
      </button>
      <button className=" px-4 py-1 span1 ms-2">
        <span className="span">{job_type2}</span>
      </button>
      <div className="flex">
        <div className="">
          <p>
            {" "}
            <FontAwesomeIcon icon={faLocationDot} /> {location}
          </p>
        </div>
        <div className="ms-8">
          <p>
            {" "}
            <FontAwesomeIcon icon={faDollarSign} /> {salary}
          </p>
        </div>
      </div>

      <button className="mt-4 mb-0 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        View Details
      </button>
    </div>
  );
};

export default Job;
