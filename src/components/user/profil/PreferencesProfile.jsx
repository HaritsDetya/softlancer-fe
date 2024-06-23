import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const PreferencesProfile = ({ refferences }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [roles, setRoles] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);

  useEffect(() => {
    if (isOpen) {
      fetchRoles();
    }
  }, [isOpen]);

  const fetchRoles = async () => {
    try {
      const response = await axios.get(`${process.env.API_URL}/roles`); // Replace with your API endpoint
      setRoles(response.data.data);
    } catch (error) {
      toast.error("Failed to fetch roles");
    }
  };

  const handleRoleSelect = (role) => {
    setSelectedRoles((prevSelected) =>
      prevSelected.includes(role)
        ? prevSelected.filter((r) => r !== role)
        : [...prevSelected, role],
    );
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${process.env.API_URL}/refferences`,
        { role_id: selectedRoles },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      ); // Replace with your API endpoint
      toast.success("Roles saved successfully");
      setIsOpen(false);
    } catch (error) {
      toast.error("Failed to save roles");
    }
  };

  return (
    <>
      {/* Prefferences */}
      <div className="w-full h-full">
        <div className="grid grid-cols-2 gap-2 w-full text-black whitespace-nowrap rounded-xl px-10 py-7 bg-light max-md:max-w-full">
          <p className="font-semibold col-span-2">Preferences</p>
          {refferences.map((refference) => (
            <div
              key={refference.id}
              onClick={() => handleRoleSelect(refference.id)}
              className="justify-center text-black px-3 text-center py-2 text-[14px] font-medium rounded-3xl bg-accent3/35"
            >
              {refference.role.role}
            </div>
          ))}
          <button
            onClick={() => setIsOpen(true)}
            className="justify-center items-center self-center px-10 py-2 text-[14px] font-medium rounded-3xl bg-accent3/35 max-md:px-5"
          >
            +
          </button>
        </div>
      </div>
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-3xl">
            <div className="p-5">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Role</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-800"
                >
                  &times;
                </button>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Please select roles according to your interests and feel free to choose more than
                one role!
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4 overflow-y-scroll h-48">
                {roles.map((role) => (
                  <button
                    key={role.id}
                    onClick={() => handleRoleSelect(role.id)}
                    className={`px-4 py-2 rounded-md ${
                      selectedRoles.includes(role.id)
                        ? "bg-accent text-white"
                        : "bg-accent2 text-white"
                    }`}
                  >
                    {role.role}
                  </button>
                ))}
              </div>
              <button onClick={handleSave} className="w-full bg-primary text-white py-2 rounded-lg">
                Save Role
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PreferencesProfile;
