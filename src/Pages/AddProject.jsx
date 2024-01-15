import React from "react";

const AddProject = () => {
  return (
    <>
      <header className="p-4 pt-20 sm:ml-64 ">
        <div>
          <h1 className="text-left pt-1 pl-5 h-9 bg-blue-950 border-solid  text-white  ">
            {" "}
            Add Project
          </h1>
        </div>
        <div className="w-full h-4/5 mx-auto bg-white p-2  shadow-md border-2 border-solid border-gray-300">
          <h2 className="text-2xl font-bold mb-4 ">Project Details</h2>

          <form className="grid  gap-3 grid-cols-3">
            <div className="mb-1">
              <label
                htmlFor="projectID"
                className="block text-sm font-medium text-gray-600"
              >
                Project ID<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="projectID"
                name="projectID"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter Project ID"
              />
            </div>

            <div className="mb-1">
              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-gray-600"
              >
                Project Name<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter Project Name"
              />
            </div>

            <div className="mb-1">
              <label
                htmlFor="technology"
                className="block text-sm font-medium text-gray-600"
              >
                Technology
              </label>
              <input
                type="text"
                id="technology"
                name="technology"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter Technology"
              />
            </div>

            <div className="mb-1">
              <label
                htmlFor="startDate"
                className="block text-sm font-medium text-gray-600"
              >
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            <div className="mb-1">
              <label
                htmlFor="endDate"
                className="block text-sm font-medium text-gray-600"
              >
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div className="mb-1">
              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-gray-600"
              >
                Vendor Id<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter Project Name"
              />
            </div>

            <div className="col-span-3">
              <label
                htmlFor="remarks"
                className="block text-sm font-medium text-gray-600"
              >
                Remarks
              </label>
              <textarea
                id="remarks"
                name="remarks"
                rows="3"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter Remarks"
              ></textarea>
            </div>

            <div className="mt-1 flex space-x-4 grid-cols-2 ">
              <button
                type="submit"
                className="bg-green-500 text-white p-2 rounded-md w-24 "
              >
                Save
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-md w-24"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </header>
    </>
  );
};

export default AddProject;
