import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div className="border p-6 rounded-xl bg-white shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
      <div className="flex items-center justify-between">
        <img className="h-8" src={assets.company_icon} alt="Company Icon" />
      </div>
      <h4 className="font-semibold text-xl mt-3 text-gray-800">{job.title}</h4>
      <div className="flex items-center gap-3 text-xs mt-3">
        <span className="bg-blue-100 text-blue-700 border border-blue-200 px-4 py-1.5 rounded-full">
          {job.location}
        </span>
        <span className="bg-red-100 text-red-700 border border-red-200 px-4 py-1.5 rounded-full">
          {job.level}
        </span>
      </div>
      <p
        className="text-gray-600 text-sm mt-4"
        dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) }}
      ></p>

      <div className="mt-5 flex gap-4 text-sm">
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => {
              navigate(`/apply-job/${job._id}`);
              scrollTo(0, 0);
            }}
            className="bg-gradient-to-br from-slate-800 to-slate-950 text-white px-5 py-2 rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ease-in-out"
          >
            Apply Now!
          </button>

          <button
            onClick={() => {
              navigate(`/apply-job/${job._id}`);
              scrollTo(0, 0);
            }}
            className="text-slate-700 border border-slate-300 hover:border-slate-600 hover:text-slate-900 bg-white px-5 py-2 rounded-full shadow hover:shadow-md transform hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ease-in-out"
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
