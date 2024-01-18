import React, { useState } from "react";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS

const Demo = () => {
  const [name, setName] = useState("");
  const [fName, setFName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [selectedBedType, setSelectedBedType] = useState("single");
  const [selectedDate, setSelectedDate] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleBedTypeChange = (e) => {
    setSelectedBedType(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add logic here to send booking details to the server

    // For simplicity, let's just log the details for now
    console.log("Booking Details:", { name, selectedBedType, selectedDate });
  };

  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Hospital Bed Booking</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Bed Type:
          </label>
          <select
            value={selectedBedType}
            onChange={handleBedTypeChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="single">Single Bed</option>
            <option value="double">Double Bed</option>
            <option value="ward">Ward</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Preferred Date:
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Demo;
