import React, { useContext, useRef } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";


const Hero = () => {
   
  const {setSearchFilter, setIsSearched} = useContext(AppContext)
   
  

  const titleRef = useRef(null)
  const locationRef = useRef(null)
  

  const onSearch = () =>{
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value
    })
    setIsSearched(true)

    // console.log({
    //   title:titleRef.current.value,
    //   location: locationRef.current.value
    // }); 
  }

    


  return (
    <div className="container 2xl:px-20 mx-auto my-10">
      <div className="bg-gradient-to-r from-slate-800 to-slate-950 text-white py-16 text-center mx-2 rounded-xl p-10 rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
          Over 10,000+ jobs to apply
        </h2>
        <p className="mb-8 max-w-xl mx-auto text-sm font-light px-5 ">
          Find your next big opportunity — where talent meets the right career{" "}
          <br /> Your dream job is just a click away — let's find it together.
        </p>
        <div className="flex items-center justify-between bg-white rounded-xl text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto shadow-[0_8px_15px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.2)] transform hover:-translate-y-1 transition duration-300 ease-in-out">
          <div className="flex items-center">
            <img
              className="h-4 sm:h-5"
              src={assets.search_icon}
              alt="search icon"
            />
            <input
              type="text"
              placeholder="Search for jobs"
              className="max-sm:text-xs p-2 rounded outline-none w-full"
              ref={titleRef}
            />
          </div>
          <div className="flex items-center">
            <img
              className="h-4 sm:h-5"
              src={assets.location_icon}
              alt="location icon"
            />
            <input
              type="text"
              placeholder="Search for jobs"
              className="max-sm:text-xs p-2 rounded outline-none w-full"
              ref={locationRef}
            />
          </div>
          {/* <button className="bg-slate-400 text-white py-2 px-6 rounded hover:bg-slate-800 hover:text-white m-1">Search</button> */}
          {/* <button className="bg-slate-400 text-white py-2 px-6 rounded hover:bg-slate-800 hover:text-white m-1">Search</button> */}
          {/* <button className="bg-slate-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-slate-900 hover:shadow-lg transition duration-300 ease-in-out m-1 drop-shadow-sm">
            Search
          </button> */}
          <button onClick={onSearch} className="bg-slate-500 text-white py-2 px-6 rounded-lg shadow-[0_3px_0_#334155] hover:bg-slate-900 hover:translate-y-[1px] hover:shadow-[0_2px_0_#334155] transition-all duration-200 ease-in-out mb-1.5 mr-1 mt-1 font-semibold">
            Search
          </button>
        </div>
      </div>

      <div className="border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex ">
             <div className="flex justify-center gap-10 lg:gap-16 flex-wrap ">
             <p className="font-medium">Trusted By</p>
             <img className="h-6" src={assets.microsoft_logo} alt="Company 1" />
             <img className="h-6" src={assets.amazon_logo} alt="Company 2" />
             <img className="h-6" src={assets.accenture_logo} alt="Company 3" />
             <img className="h-6" src={assets.samsung_logo} alt="Company 4" />
             <img className="h-6" src={assets.adobe_logo} alt="Company 5" />
             <img className="h-6" src={assets.accenture_logo} alt="Company 6" />
      </div>
      </div>



     


    </div>
  );
};

export default Hero;
