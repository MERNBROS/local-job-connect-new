import React, {  useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { assets, JobCategories, JobLocations } from "../assets/assets";
import JobCard from "./JobCard";

const Joblisting = () => {
  const { isSearched, searchFilter, setSearchFilter, jobs } =
    useContext(AppContext);

  const [showFilters, setShowFilters] = React.useState(true);

  const [currentPage, setCurrentPage] = React.useState(1);

  const [selectedCategory, setSelectedCategory] = React.useState([]);

  const [selectedLocations, setSelectedLocations] = React.useState([]);

  const [filteredJobs, setFilteredJobs] = React.useState(jobs);

  const handleCategoryChange = (category) => {
    setSelectedCategory((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleLocationChange = (location) => {
    setSelectedLocations((prev) =>
      prev.includes(location)
        ? prev.filter((item) => item !== location)
        : [...prev, location]
    );
  };

  useEffect(() => {

    const matchesCategory = job => selectedCategory.length === 0 || selectedCategory.includes(job.category);
    const matchesLocation = job => selectedLocations.length === 0 || selectedLocations.includes(job.location);

    const matchesTitle = job => searchFilter.title === "" || job.title.toLowerCase().includes(searchFilter.title.toLowerCase());
    const matchesSearchLocation = job => searchFilter.location === "" || job.location.toLowerCase().includes(searchFilter.location.toLowerCase());

    const newfilteredJobs = jobs.slice().reverse().filter(job =>
      matchesCategory(job) &&
      matchesLocation(job) &&
      matchesTitle(job) &&
      matchesSearchLocation(job)
    );

    setFilteredJobs(newfilteredJobs);
    setCurrentPage(1); // Reset to first page when filters change

  },[jobs, selectedCategory, selectedLocations, searchFilter]);

  return (
    <div className="container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8">
      {/* SIDEBAR  */}

      <div className="w-full lg:w-1/4 bg-white px-4">
        {/* SEARCH FILTER FROM HERO COMPONENT */}

        {isSearched &&
          (searchFilter.title !== "" || searchFilter.location !== "") && (
            <>
              <h3 className="font-medium text-lg mb-4">Current Search</h3>
              <div className="mb-4 text-gray-600">
                {searchFilter.title && (
                  <span className="inline-flex items-center gap-2.5 bg-blue-50 border-blue-200 px-4 py-1.5 rounded ">
                    {searchFilter.title}
                    <img
                      onClick={() =>
                        setSearchFilter((prev) => ({ ...prev, title: "" }))
                      }
                      className="cursor-pointer"
                      src={assets.cross_icon}
                    />
                  </span>
                )}
                {searchFilter.location && (
                  <span className="ml-2 inline-flex items-center gap-2.5 bg-slate-50 border-blue-200 px-4 py-1.5 rounded ">
                    {searchFilter.location}
                    <img
                      onClick={() =>
                        setSearchFilter((prev) => ({ ...prev, location: "" }))
                      }
                      className="cursor-pointer"
                      src={assets.cross_icon}
                    />
                  </span>
                )}
              </div>
            </>
          )}

        <button
          className="px-6 py-1.5 rounded border border-gray-400 lg:hidden"
          onClick={() => setShowFilters((prev) => !prev)}
        >
          {showFilters ? "Close" : "Filters"}
        </button>

        {/* category filter */}
        <div className={showFilters ? "" : "max-lg:hidden"}>
          {/* max-lg:hidden it is invisible on small screens */}
          <h4 className="font-medium text-lg py-4">Search by Categories</h4>
          <ul className="space-y-4 text-gray-600">
            {JobCategories.map((category, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input
                  className="scale-125"
                  type="checkbox"
                  onChange={() => {
                    handleCategoryChange(category);
                  }}
                  checked={selectedCategory.includes(category)}
                />
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* location filter */}
        <div className={showFilters ? "" : "max-lg:hidden"}>
          {/* max-lg:hidden it is invisible on small screens */}
          <h4 className="font-medium text-lg py-4 pt-14">Search by Location</h4>
          <ul className="space-y-4 text-gray-600">
            {JobLocations.map((location, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input
                  className="scale-125"
                  type="checkbox"
                  onChange={() => {
                    handleLocationChange(location);
                  }}
                  checked={selectedLocations.includes(location)}
                />
                {location}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* job listings */}
      <section className="w-full lg:w-3/4 max-lg:px-4 text-gray-800">
        <h3 className="font-medium text-3xl py-2" id="job-list">
          Latest Jobs
        </h3>
        <p className="mb-8">Get Your Desired Job From Top Companies</p>
        {/* grid created for placing JOB CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredJobs
            .slice((currentPage - 1) * 6, currentPage * 6)
            .map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
        </div>

        {/* Pagination */}
        {filteredJobs.length > 0 && (
          <div className="flex items-center justify-center space-x-2 mt-10">
            <a href="#job-list">
              <img
                onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                src={assets.left_arrow_icon}
                alt="Arrow Icon"
              />
            </a>
            {Array.from({ length: Math.ceil(filteredJobs.length / 6) }).map(
              (_, index) => (
                <a href="#job-list" key={index}>
                  <button
                    onClick={() => setCurrentPage(index + 1)}
                    className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${
                      currentPage === index + 1
                        ? "bg-slate-800 text-white"
                        : "bg-white text-gray-800"
                    }`}
                  >
                    {index + 1}
                  </button>
                </a>
              )
            )}
            <a href="#job-list">
              <img
                onClick={() =>
                  setCurrentPage(
                    Math.min(currentPage + 1, Math.ceil(filteredJobs.length / 6))
                  )
                }
                src={assets.right_arrow_icon}
                alt="Arrow Icon"
              />
            </a>
          </div>
        )}
      </section>
    </div>
  );
};

export default Joblisting;
