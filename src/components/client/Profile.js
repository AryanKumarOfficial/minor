import React, { useContext, useEffect, useState } from "react";
import { HiPencilAlt } from "react-icons/hi";
import EditProfile from "./EditProfile";

const Profile = () => {
    const [userDetail, setUserDetail] = useState({
        fname: null,
        lname: null,
        email: null,
        phone: null,
        address: null,
        role: null,

    });
    const [edit, setEdit] = useState(false);
    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    useEffect(() => {
        document.title = "Profile";
        // function to captalize first letter of string
        let user = localStorage.getItem('user')
        user = JSON.parse(user);
        setUserDetail({
            ...userDetail,
            id: user._id,
            fname: capitalize(user.fname),
            lname: capitalize(user.lname),
            email: user.email,
            phone: user.phone,
            address: user.address,
            role: user.role,
        });
    }
        , []);

    const handleEdit = () => {
        // edit profile
        // show edit profile component
        setEdit(true);
        // hide profile component
    }

    const handleClose = () => {
        setEdit(false);
    }



    return (
        <>
            {/* create a profile component for users */}

            <section
                style={{
                    padding: "2rem",
                    margin: "2rem",
                }}
                className="drop-shadow-2xl flex justify-center items-center rounded-lg shadow-lg">

                <div className="flex flex-col justify-center items-center">
                    <img
                        src="/images/avtar.png"
                        alt="profile"
                        className="rounded-full border-4 p-1 border-blue-700 h-40 w-40"
                    />
                    <h1 className="text-2xl font-bold">{userDetail?.fname?.concat(" ", userDetail?.lname) || 'Jhon Doe'}</h1>
                    <p className="text-sm text-gray-500">
                        <span className="font-bold">Email: {userDetail?.email || 'example@mail.com'}</span>
                    </p>
                    <p className="text-sm text-gray-500">
                        <span className="font-bold">Phone: {userDetail?.phone || null}</span>
                    </p>
                    <p className="text-sm text-gray-500">
                        <span className="font-bold">Address: {userDetail?.address || null}</span>
                    </p>
                    <p className="text-sm text-gray-500">
                        <span className="font-bold">Role: {userDetail?.role || null}</span>
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center absolute top-2 right-2">
                    <button
                        onClick={handleEdit}
                        className="bg-blue-600 shadow-md shadow-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        <HiPencilAlt className="text-2xl" />
                    </button>
                </div>
            </section>

            {
                edit &&
                <section id="edit" className="">
                    <EditProfile handleClose={handleClose} user={userDetail} />
                </section>
            }



        </>
    );
};

export default Profile;