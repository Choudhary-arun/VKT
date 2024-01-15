import React from "react";

const VendorForm = () => {
  return (
    <header className="p-4 pt-16 sm:ml-64 overflow-y-auto">
      <div>
        <h1 className=" text-left pt-1 pl-5 h-9 bg-blue-950 border-solid rounded-sm text-white  ">
          {" "}
          Vendor Form
        </h1>
      </div>
      <div className="w-full h-4/5 mx-auto  bg-white p-2  shadow-md border-2 border-solid border-gray-200">
        <form className="grid grid-cols-4 gap-8  text-left mt-8">
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
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Vendor code"
            />
          </div>

          <div className="mb-1">
            <label
              htmlFor="projectName"
              className="block text-sm font-medium text-gray-600"
            >
              Vendor Name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Vendor Name"
            />
          </div>
          <div className="mb-1">
            <label
              htmlFor="projectID"
              className="block text-sm font-medium text-gray-600"
            >
              Company reg number <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="projectID"
              name="projectID"
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Company reg number"
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
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Company Name"
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
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Contact 1"
            />
          </div>

          <div className="mb-1">
            <label
              htmlFor="projectName"
              className="block text-sm font-medium text-gray-600"
            >
              Contact 2
            </label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Contact 2"
            />
          </div>
          <div className="mb-1 col-span-2">
            <label
              htmlFor="projectID"
              className="block text-sm font-medium text-gray-600"
            >
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="projectID"
              name="projectID"
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="xyz@gmail.com"
            />
          </div>

          <div className="mb-1 col-span-2">
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
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Status"
            />
          </div>
          <div className="mb-1 col-span-2">
            <label
              htmlFor="projectID"
              className="block text-sm font-medium text-gray-600"
            >
              Line 1
            </label>
            <input
              type="text"
              id="projectID"
              name="projectID"
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Address 1"
            />
          </div>
          <div className="mb-1 col-span-2">
            <label
              htmlFor="projectID"
              className="block text-sm font-medium text-gray-600"
            >
              Line 2
            </label>
            <input
              type="text"
              id="projectID"
              name="projectID"
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Address 1"
            />
          </div>
          <div className="mb-1 col-span-2">
            <label
              htmlFor="projectID"
              className="block text-sm font-medium text-gray-600"
            >
              Line 3
            </label>
            <input
              type="text"
              id="projectID"
              name="projectID"
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Address 1"
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
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Address 2"
            />
          </div>
          <div className="mb-1">
            <label
              htmlFor="projectID"
              className="block text-sm font-medium text-gray-600"
            >
              State<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="projectID"
              name="projectID"
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Address 3"
            />
          </div>

          <div className="mb-1">
            <label
              htmlFor="projectName"
              className="block text-sm font-medium text-gray-600"
            >
              City<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              className="mt-1 p-2 border rounded-md w-full"
              placeholder=" Address 4"
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
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="City"
            />
          </div>

          <div className="mt-1  space-x-4 flex  ">
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
  );
};

export default VendorForm;
