import React from 'react';

const EditProfil = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-100">
      <div className="bg-teal-200 p-8 rounded-lg shadow-md w-3/4 max-w-4xl">
        <div className="flex space-x-8">
          {/* Personal Information Section */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                defaultValue="Anisah Salma Rafida"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-2 border border-gray-300 rounded"
                defaultValue="anisahsalmarafida@mail.ugm.ac.id"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full p-2 border border-gray-300 rounded"
                defaultValue="+62 85704981748"
              />
            </div>
          </div>
          
          {/* Preferences Section */}
          <div className="flex-1 flex flex-col justify-center items-center bg-teal-100 rounded p-4">
            <h2 className="text-lg font-semibold mb-4">Preferences</h2>
            <button className="bg-teal-300 p-4 rounded-full text-2xl flex items-center justify-center">
              +
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-between">
          <button className="bg-teal-300 px-4 py-2 rounded">Edit</button>
          <button className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
          <button className="bg-teal-300 px-4 py-2 rounded">Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfil;
