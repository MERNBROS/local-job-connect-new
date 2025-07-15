import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { Box, Typography } from "@mui/material";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Navbar for recruiter Panel */}
      <div className="shadow py-4 bg-slate-900">
        <div className="px-5 flex justify-between items-center text-white">
          <Box
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ display: "flex", alignItems: "center" }}
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            <WorkRoundedIcon sx={{ mr: 1, fontSize: { xs: 24, md: 30 } }} />
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontSize: { xs: "1rem", md: "1.25rem" },
                fontWeight: 600,
                color: "#fff",
                letterSpacing: 1,
              }}
            >
              Local Job Connect
            </Typography>
          </Box>

          <div className="flex items-center gap-3">
            <p className="max-sm:hidden">Welcome Recruiter</p>
            <div className="relative group">
              <img
                className="h-8 w-8 rounded-full cursor-pointer"
                src={assets.company_icon}
                alt="company icon"
              />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black  rounded pt-12">
                <ul className="list-none m-0 p-2 bg-white rounded-md border shadow-lg border-white text-sm">
                  <li className="py-1 px-2 cursor-pointer pr-10">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start">
        {/* left sidebar with option to add job, manage jobs, view applications*/}
        <div className="inline-block min-h-screen border r-2">
          <ul className="flex flex-col items-start pt-5 text-gray-800">
            <NavLink className={({ isActive }) => `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && `bg-blue-100 border-r-4 border-blue-500`}`} to={"/dashboard/add-job"}>
              <img className="min-w-4" src={assets.add_icon} alt="" />
              <p className="max-sm:hidden">Add Job</p>
            </NavLink>
            <NavLink className={({ isActive }) => `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && `bg-blue-100 border-r-4 border-blue-500`}`} to={"/dashboard/manage-jobs"}>
              <img className="min-w-4" src={assets.home_icon} alt="" />
              <p className="max-sm:hidden">Manage Jobs</p>
            </NavLink>
            <NavLink className={({ isActive }) => `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && `bg-blue-100 border-r-4 border-blue-500`}`} to={"/dashboard/view-applications"}>
              <img className="min-w-4" src={assets.person_icon} alt="" />
              <p className="max-sm:hidden">View Applications</p>
            </NavLink>
          </ul>
        </div>

              <div>
                <Outlet />
              </div>

      </div>

      {/* Main content */}
      <div className="p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
