import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const SelectReferences = () => {
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
      const response = await axios.get("/api/roles"); // Replace with your API endpoint
      setRoles(response.data);
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
      console.log(token);
      await axios.post(
        "/api/user/roles",
        { roles: selectedRoles },
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
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-96">
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
              <div className="grid grid-cols-2 gap-4 mb-4">
                {roles.map((role) => (
                  <button
                    key={role.id}
                    onClick={() => handleRoleSelect(role.id)}
                    className={`px-4 py-2 rounded-full ${
                      selectedRoles.includes(role.id)
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {role.name}
                  </button>
                ))}
              </div>
              <button
                onClick={handleSave}
                className="w-full bg-green-600 text-white py-2 rounded-lg"
              >
                Save Role
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SelectReferences;
