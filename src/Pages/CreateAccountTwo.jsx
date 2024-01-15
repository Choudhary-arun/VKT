import React from "react";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  return (
    <>
      <header className="p-4 pt-20 sm:ml-64 ">
        <div className="w-full h-4/5 mx-auto bg-white p-2  shadow-md border-2 border-solid border-gray-300">
          <form className="space-y-4">
            <h3 className="text-md font-extrabold mb-4">Personal Details</h3>
            <div className="mb-1 ml-8 space-y-2">
              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-gray-600 "
              >
                Mother Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter mother's name"
              />

              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-gray-600 "
              >
                Father Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter father's name"
              />

              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-gray-600 "
              >
                Date of birth <span className="text-red-600">*</span>
              </label>
              <input
                type="date"
                id="projectName"
                name="projectName"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter Date of birth"
              />
              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-gray-600 "
              >
                Gender <span className="text-red-600">*</span>
              </label>
              <input
                type="gender"
                id="projectName"
                name="projectName"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Select Gender"
              />
              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-gray-600 "
              >
                Category <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Select category"
              />
            </div>
            <h3 className="text-md font-extrabold mb-4"> Address</h3>
            <div className="mb-1 ml-8 space-y-2">
              <label
                htmlFor="technology"
                className="block text-sm font-medium text-gray-600"
              >
                Personal Address<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="technology"
                name="technology"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter personal address"
              />
              <label
                htmlFor="technology"
                className="block text-sm font-medium text-gray-600"
              >
                Temporary Address<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="technology"
                name="technology"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter temporary address"
              />
              <label
                htmlFor="technology"
                className="block text-sm font-medium text-gray-600"
              >
                City<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="technology"
                name="technology"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter city name"
              />
              <label
                htmlFor="technology"
                className="block text-sm font-medium text-gray-600"
              >
                State<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="technology"
                name="technology"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter state name"
              />
              <label
                htmlFor="technology"
                className="block text-sm font-medium text-gray-600"
              >
                Pincode<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="technology"
                name="technology"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter Pincode"
              />
            </div>

            <h3 className="text-md font-extrabold mb-4"> Email Address</h3>
            <div className="mb-1 ml-8 space-y-2">
              <label
                htmlFor="technology"
                className="block text-sm font-medium text-gray-600"
              >
                Email Address<span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="technology"
                name="technology"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter email"
              />
            </div>

            <div className="mt-1 space-x-4 col-span-2">
              <Link to="/createAccount">
                <button
                  type="submit"
                  className="bg-gray-100 text-black p-2 rounded-md w-24 text-centre "
                >
                  {" "}
                  back
                </button>
              </Link>

              <button
                type="submit"
                className="bg-blue-950 text-white p-2 rounded-md w-36 text-centre "
              >
                Done Registration
              </button>
            </div>
          </form>
        </div>
      </header>
    </>
  );
};

export default CreateAccount;
