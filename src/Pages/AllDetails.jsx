import React from "react";

const AllDetails = () => {
  return (
    <div>
      <header className="p-4 pt-16 sm:ml-64 overflow-y-auto">
        <div>
          <h1 className=" text-left pt-1 pl-5 h-9 bg-blue-950 border-solid rounded-sm text-white  ">
            {" "}
            All Details
          </h1>
        </div>
        <div className="w-5/6 h-4/5 mx-auto  bg-gray-100 p-2  shadow-md border-2 border-solid border-gray-200">
          <form className="grid grid-cols-2 gap-x-10 text-left mt-3 ">
            <div className="mb-1">
              <label
                htmlFor="projectID"
                className="block text-sm font-medium text-gray-600"
              >
                Vendor Code <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="projectID"
                name="projectID"
                className="mt-1 p-2 border rounded-md w-5/6 "
                placeholder=""
              />
            </div>

            <div className="mb-1">
              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-gray-600"
              >
                Registration no.<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                className="mt-1 p-2 border rounded-md w-5/6"
                placeholder=""
              />
            </div>
            <div className="mb-1">
              <label
                htmlFor="projectID"
                className="block text-sm font-medium text-gray-600"
              >
                Vendor Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="projectID"
                name="projectID"
                className="mt-1 p-2 border rounded-md w-5/6"
                placeholder=""
              />
            </div>

            <div className="mb-1">
              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-gray-600"
              >
                Company Name<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                className="mt-1 p-2 border rounded-md w-5/6"
                placeholder=""
              />
            </div>
            <div className="mb-1 col-span-2 ">
              <label
                htmlFor="projectID"
                className="block text-sm font-medium text-gray-600 "
              >
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="projectID"
                name="projectID"
                className="mt-1 p-2 border rounded-md w-11/12 "
                placeholder=""
              />
            </div>
            <div className="mb-1 col-span-1">
              <label
                htmlFor="projectID"
                className="block text-sm font-medium text-gray-600"
              >
                Contact 1 <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="projectID"
                name="projectID"
                className="mt-1 p-2 border rounded-md w-5/6"
                placeholder=""
              />
            </div>

            <div className="mb-1">
              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-gray-600"
              >
                Alternate Contact no.
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                className="mt-1 p-2 border rounded-md w-5/6"
                placeholder=""
              />
            </div>

            <div className="mb-1">
              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-gray-600"
              >
                Address<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                className="mt-1 p-2 border rounded-md w-5/6"
                placeholder=""
              />
            </div>
            <div className="mb-1">
              <label
                htmlFor="projectID"
                className="block text-sm font-medium text-gray-600"
              >
                Line 1<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="projectID"
                name="projectID"
                className="mt-1 p-2 border rounded-md w-5/6"
                placeholder=""
              />
            </div>

            <div className="mb-1">
              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-gray-600"
              >
                Line 2<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                className="mt-1 p-2 border rounded-md w-5/6"
                placeholder=" "
              />
            </div>
            <div className="mb-1">
              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-gray-600"
              >
                Line 3<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                className="mt-1 p-2 border rounded-md w-5/6"
                placeholder=""
              />
            </div>
            <div className="mb-1">
              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-gray-600"
              >
                Status<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                className="mt-1 p-2 border rounded-md w-5/6"
                placeholder=""
              />
            </div>
            <div className="mb-1">
              <label
                htmlFor="projectID"
                className="block text-sm font-medium text-gray-600"
              >
                City<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="projectID"
                name="projectID"
                className="mt-1 p-2 border rounded-md w-5/6"
                placeholder=""
              />
            </div>

            <div className="mb-1">
              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-gray-600"
              >
                State<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                className="mt-1 p-2 border rounded-md w-5/6"
                placeholder=" "
              />
            </div>
            <div className="mb-1">
              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-gray-600"
              >
                Country<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                className="mt-1 p-2 border rounded-md w-5/6"
                placeholder=""
              />
            </div>
            <div className="mb-1">
              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-gray-600"
              >
                ZipCode<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                className="mt-1 p-2 border rounded-md w-5/6"
                placeholder=""
              />
            </div>
          </form>
        </div>
      </header>
    </div>
  );
};

export default AllDetails;
