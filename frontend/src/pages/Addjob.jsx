import React from "react";
import Quill from "quill";
import { JobCategories, JobLocations } from "../assets/assets";

const Addjob = () => {
  const [title, setTitle] = React.useState("");
  const [location, setLocation] = React.useState("Kochi");
  const [category, setCategory] = React.useState("Programming");
  const [level, setLevel] = React.useState("Beginner Level");
  const [salary, setSalary] = React.useState(0);

  const editorRef = React.useRef(null);
  const quillRef = React.useRef(null);

  React.useEffect(() => {
    // Initialize Quill editor only once
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);

  return (
    <form className="container p-4 flex flex-col w-full items-start gap-3">
      <div className="w-full ">
        <p className="mb-2">Job Title</p>
        <input
          type="text"
          placeholder="Type here..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
          className="w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded"
        />
      </div>

      <div className="w-full max-w-lg">
        <p className="my-2">Job Description</p>
        <div ref={editorRef}></div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <div>
            <p className="mb-2">Job Category</p>
            <select className="w-full px-3 py-2 border-2 border-gray-300 rounded" onChange={(e) => setCategory(e.target.value)}>
              {JobCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <div>
            <p className="mb-2">Job Location</p>
            <select className="w-full px-3 py-2 border-2 border-gray-300 rounded" onChange={(e) => setLocation(e.target.value)}>
              {JobLocations.map((location, index) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <div>
            <p className="mb-2">Job Level</p>
            <select className="w-full px-3 py-2 border-2 border-gray-300 rounded" onChange={(e) => setLevel(e.target.value)}>
              <option value={"Beginner Level"}>Beginner Level</option>
              <option value={"Intermediate Level"}>Intermediate Level</option>
              <option value={"Senior Level"}>Senior Level</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <p className="mb-2">Job Salary</p>
        <input
        min={0}
        className="w-full px-3 py-2 border-2 border-gray-300 rounded sm:w-[120px]"
          onChange={(e) => setSalary(e.target.value)}
          type="number"
          placeholder="2500"
        />
      </div>
      <button className="bg-slate-800 text-white font-semibold px-6 py-2 rounded-xl shadow-[0_6px_10px_rgba(0,0,0,0.5)] hover:scale-105 hover:shadow-[0_10px_15px_rgba(0,0,0,0.7)] transition-all duration-300 ease-in-out">
  ADD
</button>

    </form>
  );
};

export default Addjob;
