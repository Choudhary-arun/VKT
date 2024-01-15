import React from "react";

const FindProject = () => {
  return (
    <div className="w-7/12 h-4/5 mx-auto bg-gray-200 p-2 rounded-lg shadow-md border-2 mt-8 border-black">
      <h2 className="text-2xl font-bold mb-4">Find Project </h2>{" "}
      <form className="grid grid-cols-4 gap-8  text-center mt-8">
        <div className="mb-1">
          <label
            htmlFor="projectID"
            className="block text-sm font-medium text-gray-600"
          >
            Project Id
          </label>
          <input
            type="text"
            id="projectID"
            name="projectID"
            className="mt-1  rounded-full w-32 h-8"
            placeholder=""
          />
        </div>
        <div className="mb-1">
          <label
            htmlFor="projectName"
            className="block text-sm font-medium text-gray-600"
          >
            Project Name
          </label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            className="mt-1  rounded-full w-32 h-8"
            placeholder=""
          />
        </div>
        <div className="mb-1">
          <label
            htmlFor="projectID"
            className="block text-sm font-medium text-gray-600"
          >
            Starting Date
          </label>
          <input
            type="date"
            id="SdateID"
            name="Starting Date"
            clclassName="mt-1 rounded-full w-32 h-8"
            placeholder=""
          />
        </div>
        <div className="mb-1">
          <label
            htmlFor="projectID"
            className="block text-sm font-medium text-gray-600"
          >
            Ending Date
          </label>
          <input
            type="date"
            id="projectID"
            name="projectID"
            className="mt-1  rounded-full w-32 h-8"
            placeholder=""
          />
        </div>
        <div className="mb-1">
          <label
            htmlFor="Technology Name"
            className="block text-sm font-medium text-gray-600"
          >
            Technology
          </label>
          <input
            type="text"
            id=""
            name="Technology Name"
            className="mt-1  rounded-full w-32 h-8"
            placeholder=""
          />
        </div>
        <div className="mb-1">
          <label
            htmlFor="Status"
            className="block text-sm font-medium text-gray-600"
          >
            Status
          </label>
          <input
            type="text"
            id="StatusId"
            name="Status"
            className="mt-1  rounded-full w-32 h-8"
            placeholder=""
          />
        </div>
        <div className="mb-1">
          <label
            htmlFor="Remark"
            className="block text-sm font-medium text-gray-600"
          >
            Remark
          </label>
          <input
            type="text"
            id="RemarkId"
            name="Remark"
            clclassName="mt-1 rounded-full w-32 h-8"
            placeholder=""
          />
        </div>
        <div className="mb-1">
          <label
            htmlFor="VendorName"
            className="block text-sm font-medium text-gray-600"
          >
            Vendor Id
          </label>
          <input
            type="text"
            id="VendorId"
            name="VendorName"
            className="mt-1  rounded-full w-32 h-8"
            placeholder=""
          />
        </div>
        <div className="mt-1 flex space-x-4 grid-cols-2 ">
          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded-md w-24 "
          >
            Search
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
  );
};

export default FindProject;
