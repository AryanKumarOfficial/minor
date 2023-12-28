import React, { useContext, useEffect, useState } from 'react';
import { CgClose } from 'react-icons/cg';

const AddAppointments = ({ handleClose, user }) => {

    const captalise = (str) => {
        return str ?? str?.charAt(0)?.toUpperCase() + str?.slice(1);
    };

    useEffect(() => {
        document.title = `Add Appointment - ${captalise(user?.fname)} ${captalise(user?.lname)}`;

        document.body.classList.add('overflow-y-hidden');

        return () => {
            document.body.classList.remove('overflow-y-hidden');
        };
    }, []);

    const [formData, setFormData] = useState({
        fname: user?.fname,
        lname: user?.lname,
        email: user?.email,
        phone: user?.phone,
        address: user?.address,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-500 backdrop-filter backdrop-blur-sm" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>

            <div
                className="bg-white sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/3 rounded-lg p-4 md:p-8 py-8 relative"
                style={{ overflowY: "auto" }}>
                <h2 className="text-2xl font-bold mb-4">Add Appointment</h2>
                <div className="absolute top-4 right-4">
                    <CgClose
                        size={25}
                        onClick={handleClose}
                        className="text-gray-500 font-bold hover:text-gray-700 cursor-pointer"
                    />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="fname" className="block text-gray-700">First Name:</label>
                        <input type="text" id="fname" value={formData.fname} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lname" className="block text-gray-700">Last Name:</label>
                        <input type="text" id="lname" value={formData.lname} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email:</label>
                        <input type="email" id="email" value={formData.email} className="border border-gray-300 rounded-md px-3 py-2 w-full read-only:bg-gray-300" readOnly />
                    </div>

                    {/* <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700">Phone:</label>
                        <input type="tel" id="phone" value={formData.phone} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700">Address:</label>
                        <input type="text" id="address" value={formData.address} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                    </div>

                    <div className="mb-4">

                        <label htmlFor="date" className="block text-gray-700">Date:</label>
                        <input type="date" id="date" value={formData.date} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="time" className="block text-gray-700">Time:</label>
                        <input type="time" id="time" value={formData.time} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="type" className="block text-gray-700">Type:</label>
                        <select id="type" value={formData.type} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full">
                            <option value="online">Online</option>
                            <option value="offline">Offline</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700">Description:</label>
                        <textarea id="description" value={formData.description} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full h-20" placeholder="Enter your description" />
                    </div> */}

                    <button
                        type="submit"
                        className="bg-blue-500 text-white w-full px-4 py-2 rounded-md ml-auto hover:bg-blue-600"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddAppointments;