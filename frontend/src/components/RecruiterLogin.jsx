import React, { useEffect } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const RecruiterLogin = () => {
  const [state, setState] = React.useState("Login");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [image, setImage] = React.useState(false);

  const [isTextDataSubmitted, setIsTextDataSubmitted] = React.useState(false);

  const { setShowRecruiterLogin } = React.useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (state === "Sign Up" && !isTextDataSubmitted) {
      setIsTextDataSubmitted(true);
    }
  };

  useEffect(() => {
  document.body.style.overflow = "hidden";
  return () => {
    document.body.style.overflow = "unset";
  };
  }, []);



  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form
        onSubmit={onSubmitHandler}
        className=" relative bg-white p-10 rounded-xl shadow-lg text-slate-950"
      >
        <h1 className="text-center text-2xl text-neutral-900 font-medium">
          Recruiter {state}
        </h1>
        <p className="text-center text-sm text-neutral-600">
          Welcome back! Please Sign In to continue
        </p>
        {state === "Sign Up" && isTextDataSubmitted ? (
          <>
            <div className="flex items-center gap-4 my-10">
              <label htmlFor="image">
                <img
                  className="w-16 rounded-full"
                  src={image ? URL.createObjectURL(image) : assets.upload_area}
                  alt=""
                />
                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  type="file"
                  id="image"
                  hidden
                />
              </label>
              <p>
                Upload Company <br /> Logo
              </p>
            </div>
          </>
        ) : (
          <>
            {state !== "Login" && (
              <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
                <img src={assets.person_icon} alt="" />
                <input
                  className="outline-none text-sm hover:border-blue-500"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Company Name"
                  required
                />
              </div>
            )}

            <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
              <img src={assets.email_icon} alt="" />
              <input
                className="outline-none text-sm hover:border-blue-500"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email id"
                required
              />
            </div>
            <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
              <img src={assets.lock_icon} alt="" />
              <input
                className="outline-none text-sm hover:border-blue-500"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                required
              />
            </div>
          </>
        )}

        {state === "Login" && (
          <p className="mt-2 text-sm text-slate-800 hover:underline hover:text-blue-600 cursor-pointer">
            Forgot Password?
          </p>
        )}

        <button
          type="submit"
          className="bg-slate-900 text-white px-6 py-2 rounded-full w-full mt-4 hover:bg-green-600 transition-all duration-300 ease-in-out"
        >
          {state === "Login"
            ? "Login"
            : isTextDataSubmitted
            ? "create account"
            : "Next"}
        </button>
        {state === "Login" ? (
          <p className="text-gray-500 mt-2 text-center">
            Don't have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Sign Up")}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="text-gray-500 mt-5 text-center">
            Already have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Login")}
            >
              Login
            </span>
          </p>
        )}

        <img onClick={() => setShowRecruiterLogin(false)} className="absolute top-5 right-5 cursor-pointer hover:opacity-80 " src={assets.cross_icon} alt="" />
      </form>
    </div>
  );
};

export default RecruiterLogin;
