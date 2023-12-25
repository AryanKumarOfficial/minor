import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/client/UserContext";

const Profile = () => {
    const [userDetail, setUserDetail] = useState({
        fname: null,
        lname: null,
        email: null,
        phone: null,

    });
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
            fname: capitalize(user.fname),
            lname: capitalize(user.lname),
            email: user.email,
            phone: user.phone,
        });
    }
        , []);

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
                        <span className="font-bold">Phone: {null}</span>
                    </p>
                    <p className="text-sm text-gray-500">
                        <span className="font-bold">Address:</span>
                    </p>
                </div>
            </section>
        </>
    );
};

export default Profile;