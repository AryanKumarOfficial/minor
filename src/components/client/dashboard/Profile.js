import React, { useEffect, useRef, useState } from "react";
import { HiPencilAlt } from "react-icons/hi";
import EditProfile from "./EditProfile";
import Typed from "typed.js";
import { useSelector } from "react-redux";

const Profile = () => {
    const { user, loading } = useSelector(state => state.user);
    const [error, setError] = useState(null);

    useEffect(() => {
        document.title = "Hospitalo | Profile";
        console.log(user, loading, 'user, loading');
        document.body.classList.add('overflow-x-hidden');

        if (!user) {
            setError('Please login to view your profile');
        }

        return () => {
            document.body.classList.remove('overflow-x-hidden');
        };

    }, [user, loading]);

    if (loading) {
        return <Loading />;
    } else if (error) {
        return <ErrorComponent error={error} />;
    } else {
        return <Loaded />;
    }
};

const Loading = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Loading...", "Please wait..."],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
            cursorChar: "",
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
    const { user } = useSelector(state => state.user);
    const [edit, setEdit] = useState(false);

    const handleEdit = () => {
        setEdit(true);
    };

    const handleClose = () => {
        document.title = "Hospitalo | Profile";
        setEdit(false);
    };

    const captalise = (str) => {
        return str && str?.charAt(0)?.toUpperCase() + str?.slice(1);
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
                    <h1 className="text-2xl font-bold">{`${captalise(user?.fname)} ${captalise(user?.lname)}` || 'Jhon Doe'}</h1>
                    <p className="text-sm text-gray-500">
                        <span className="font-bold">Email: {user?.email ?? 'example@mail.com'}</span>
                    </p>
                    <p className="text-sm text-gray-500">
                        <span className="font-bold">Phone: {user?.phone ?? 'Not Available'}</span>
                    </p>
                    <p className="text-sm text-gray-500">
                        <span className="font-bold">Address: {user?.address ?? 'Not Available'}</span>
                    </p>
                    <p className="text-sm text-gray-500">
                        <span className="font-bold">Role: {user?.role || 'user'}</span>
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
                    <EditProfile handleClose={handleClose} />
                </section>
            )}
        </>
    );
}
const ErrorComponent = ({ error }) => {
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Loading...", "Please wait..."],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
            cursorChar: "",
        });

        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <div ref={el} className="flex justify-center items-center h-screen">
            <p className="text-red-500 text-lg">{error}</p>
        </div>
    );
};

export default Profile;