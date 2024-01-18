import React, { useEffect, useState } from 'react';
import { CgClose } from 'react-icons/cg';

const AddAppointments = ({ toggleModal, user }) => {

    const captalise = (str) => {
        return str ?? str?.charAt(0)?.toUpperCase() + str?.slice(1);
    };

    useEffect(() => {
        document.title = `Add Appointment - ${captalise(user?.fname)} ${captalise(user?.lname)}`;

        document.body.classList.add('overflow-y-hidden');

        return () => {
            document.body.classList.remove('overflow-y-hidden');
        };
    }, [user]);

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
        toggleModal();
    };

    return (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-opacity-50 bg-gray-500 backdrop-filter backdrop-blur-sm  overflow-y-auto" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>

            <div
                className="bg-white sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/3 rounded-lg p-4 md:p-8 py-8 relative mt-20 z-50"
                style={{ overflowY: "scroll" }}
            >
                <h2 className="text-2xl font-bold mt-4">Add Appointment</h2>
                <div className="absolute top-4 right-4">
                    <CgClose
                        size={25}
                        onClick={toggleModal}
                        className="text-gray-500 font-bold hover:text-gray-700 cursor-pointer"
                    />
                </div>
                <form onSubmit={handleSubmit} >
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

                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700">Phone:</label>
                        <input type="tel" id="phone" value={formData.phone} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="department" className="block text-gray-700">Department:</label>
                        <select name="department" id="department" className='border border-gray-300 rounded-md px-3 py-2 w-full appearance-none'>
                            <option value="default" selected>Select a Department</option>
                            <option value="Anaesthesiology">Anaesthesiology</option>
                            <option value="Cardiothoracic and Vascular Surgery">Cardiothoracic and Vascular Surgery</option>
                            <option value="Dentistry" >Dentistry</option>
                            <option value="Dermatology">Dermatology</option>
                            <option value="Gastroenterology">Gastroenterology</option>
                            <option value="Neurology">Neurology</option>
                            <option value="Neuro Surgery">Neuro Surgery</option>
                            <option value="Obstetrics and Gynaecology">Obstetrics and Gynaecology</option>
                            <option value="Ophthalmology">Ophthalmology</option>
                            <option value="Orthopaedics">Orthopaedics</option>
                            <option value="Paediatrics">Paediatrics</option>
                            <option value="Plastic Surgery">Plastic Surgery</option>
                            <option value="Psychiatry">Psychiatry</option>
                            <option value="Urology">Urology</option>
                            <option value="Surgery">Surgery</option>
                            <option value="Radio Diagnosis">Radio Diagnosis</option>
                            <option value="Radiotherapy">Radiotherapy</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label>
                            Bed Type:
                            <select className='border border-gray-300 rounded-md px-3 py-2 w-full appearance-none'>
                                <option value="default" selected>Choose a Bed</option>
                                <option value="single">Single Bed</option>
                                <option value="double">Double Bed</option>
                                <option value="ward">Ward</option>
                            </select>
                        </label>
                    </div>
                    <div className="mb-4">

                        <label htmlFor="date" className="block text-gray-700">Appointment Date:</label>
                        <input type="date" id="date" value={formData.date} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700">Address:</label>
                        <input type="text" id="address" value={formData.address} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                    </div>


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