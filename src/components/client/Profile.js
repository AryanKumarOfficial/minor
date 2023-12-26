import React, { useContext, useEffect, useRef, useState } from "react";
import { HiPencilAlt } from "react-icons/hi";
import EditProfile from "./EditProfile";
import UserContext from "../../context/client/UserContext";
import Typed from "typed.js";

const Profile = () => {
    const { user, loading } = useContext(UserContext);

    useEffect(() => {
        document.title = "Hospitalo | Profile";

    }, [user]);




    if (loading) {
        return <Loading />;
    } else {
        return <Loaded />;

    };
};

const Loading = () => {
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Loading", "Please wait"],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
        });
        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <div className="flex justify-center items-center h-screen">
            <h1 className="text-4xl font-bold"><span ref={el} id="typer"></span></h1>
        </div>
    );
};
const Loaded = () => {
    const { user } = useContext(UserContext);
    const [edit, setEdit] = useState(false);
    const handleEdit = () => {
        setEdit(true);
    };

    const handleClose = () => {
        setEdit(false);
    };
    return (
        <>
            {/* create a profile component for users */}

            <section
                style={{
                    padding: "2rem",
                    margin: "2rem",
                }}
                className="drop-shadow-2xl flex justify-center items-center rounded-lg shadow-lg"
            >
                <div className="flex flex-col justify-center items-center">
                    <img
                        src="/images/avtar.png"
                        alt="profile"
                        className="rounded-full border-4 p-1 border-blue-700 h-40 w-40"
                    />
                    <h1 className="text-2xl font-bold">{`${user?.data?.user?.fname} ${user?.data?.user?.lname}` || 'Jhon Doe'}</h1>
                    <p className="text-sm text-gray-500">
                        <span className="font-bold">Email: {user?.data?.user?.email ?? 'example@mail.com'}</span>
                    </p>
                    <p className="text-sm text-gray-500">
                        <span className="font-bold">Phone: {user?.data?.user?.phone ?? 'Not Available'}</span>
                    </p>
                    <p className="text-sm text-gray-500">
                        <span className="font-bold">Address: {user?.data?.user?.address ?? 'Not Available'}</span>
                    </p>
                    <p className="text-sm text-gray-500">
                        <span className="font-bold">Role: {user?.data?.user?.role || 'user'}</span>
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center absolute top-2 right-2">
                    <button
                        onClick={handleEdit}
                        className="bg-blue-600 shadow-md shadow-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                        <HiPencilAlt className="text-2xl" />
                    </button>
                </div>
            </section>

            {edit && (
                <section id="edit" className="">
                    <EditProfile handleClose={handleClose} user={user?.data?.user} />
                </section>
            )}
        </>
    );
}

export default Profile;