// edit profile modal
import React, { useEffect, useState } from 'react';
import { CgClose } from "react-icons/cg";
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../../Redux/slices/userSlice';
import toast from 'react-hot-toast';
const EditProfile = ({ handleClose }) => {
    const dispatch = useDispatch()
    const { user, token } = useSelector(state => state.user);
    const captalise = (str) => {
        return str ?? str?.charAt(0)?.toUpperCase() + str?.slice(1);
    };
    useEffect(() => {
        document.title = `Edit Profile - ${captalise(user.fname)} ${captalise(user.lname)}`;

        // When the component is rendered, add 'no-scroll' class to the body
        document.body.classList.add('overflow-y-hidden');
        console.log(user);
        // When the component is unmounted, remove 'no-scroll' class from the body
        return () => {
            document.body.classList.remove('overflow-y-hidden');
        };
    }, [user]); // Empty dependency array ensures this runs on mount and unmount only

    const [formData, setFormData] = useState({
        fname: user.fname,
        lname: user.lname,
        email: user.email,
        phone: user.phone,
        address: user.address,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    }


    const handleSubmit = async (e) => {
        const data = { token, formData }
        await e.preventDefault();
        console.log(data, 'form data');
        dispatch(updateUser(data)).then((res) => {
            if (res.payload.success) {
                handleClose();
                toast.success(res.payload.msg);
            }
            else {
                handleClose();
                toast.error(res.payload.error);
            }
        })
        await handleClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-500 backdrop-filter backdrop-blur-sm">
            <div className="bg-white w-1/4 rounded-lg p-8 relative">
                <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
                <div className="absolute top-4 right-4">
                    <CgClose size={25} onClick={handleClose} className="text-gray-500 font-bold  hover:text-gray-700 cursor-pointer" />
                </div>
                <form onSubmit={handleSubmit} >
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">First Name:</label>
                        <input type="text" id="name" value={formData.fname} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Last Name:</label>
                        <input type="text" id="name" value={formData.lname} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email:</label>
                        <input type="email" id="email" value={formData.email} className="border border-gray-300 rounded-md px-3 py-2 w-full read-only:bg-gray-300" readOnly />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700">Phone:</label>
                        <input type="text" id="phone" value={formData.phone} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700">Address:</label>
                        <textarea id="address" value={formData.address} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full h-20" placeholder="Enter your address" />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white w-full px-4 py-2 rounded-md ml-auto hover:bg-blue-600">Save</button>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;
