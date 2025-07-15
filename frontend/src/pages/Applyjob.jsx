import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import kconvert from "k-convert";
import moment from "moment";
import JobCard from "../components/JobCard";
import Footer from "../components/Footer";

const Applyjob = () => {
  const { id } = useParams();

  const [jobsData, setJobsData] = React.useState(null);

  const { jobs } = useContext(AppContext);

  const fetchJob = async () => {
    const data = jobs.filter((jobs) => jobs._id === id);
    if (data.length > 0) {
      setJobsData(data[0]);
      console.log(data[0]);
    }
  };

  React.useEffect(() => {
    if (jobs.length > 0) {
      fetchJob();
    }
  }, [id, jobs]);

  return jobsData ? (
    <>
      <Navbar />
      <div className="min-h-screen flex-col py-10 container px-4 2xl:px-20 mx-auto">
        <div className="bg-white shadow-md rounded-lg text-black w-full">
          <div className="flex justify-between md:justify-between flex-wrap gap-8 px-14 py-20 mb-6 bg-sky-50 border border-sky-600  rounded-xl">
            <div className="flex flex-col md:flex-row items-center">
              <img
                className="h-24 bg-white rounded-lg p-4 mr-4 max-md:mb-4 border "
                src={jobsData.companyId.image}
                alt=""
              />
              <div className="text-center md:text-left text-neutral-800">
                <h1 className="text-2xl sm:text-4xl font-medium">
                  {jobsData.title}
                </h1>
                <div className="flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 items-center text-gray-600 mt-2">
                  <span className="flex items-center gap-1">
                    <img src={assets.suitcase_icon} alt="" />
                    {jobsData.companyId.name}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.location_icon} alt="" />
                    {jobsData.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.person_icon} alt="" />
                    {jobsData.level}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.money_icon} alt="" />
                    CTC : {kconvert.convertTo(jobsData.salary)}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-end max-md:items-center text-sm">
              <button className="bg-gradient-to-br from-slate-800 to-slate-950 text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ease-in-out">
                Apply Now
              </button>
              <p className="mt-2 text-gray-500 text-xs italic">
                Posted {moment(jobsData.date).fromNow()}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mt-8">
          {/* LEFT SECTION: JOB DESCRIPTION */}
          <div className="w-full lg:w-2/3">
            <h2 className="font-bold text-2xl mb-4">Job Description</h2>
            <div
              dangerouslySetInnerHTML={{ __html: jobsData.description }}
              className="rich-text"
            ></div>
            <button className="mt-10 bg-gradient-to-br from-slate-800 to-slate-950 text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ease-in-out">
              Apply Now
            </button>
          </div>

          {/* RIGHT SECTION: MORE JOBS */}
          <div className="w-full lg:w-1/3 space-y-5">
            <h2 className="font-bold text-xl mb-3">
              More Jobs from {jobsData.companyId.name}
            </h2>
            {jobs
              .filter(
                (job) =>
                  job._id !== jobsData._id &&
                  job.companyId._id === jobsData.companyId._id
              )
              .slice(0, 4)
              .map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
          </div>
        </div> 
      </div>
      <Footer />
    </>
  ) : (
    <Loading />
  );
};

export default Applyjob;
