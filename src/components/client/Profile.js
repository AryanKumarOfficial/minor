import React from "react";

const Profile = () => {
    return (
        <>
            {/* create a profile component for users */}
            <section
                style={{
                    height: "fit-content",
                    width: "fit-content",
                    padding: "2rem",
                    margin: "2rem",
                    filter: 'drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))',
                }}
                className="drop-shadow-2xl flex justify-center items-center h-auto rounded-lg">
                <div className="flex flex-col justify-center items-center">
                    <img
                        src="https://images.unsplash.com/photo-1612835364902-0f5e9f0a4e3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGZvcmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                        alt="profile"
                        className="rounded-full h-40 w-40"
                    />
                    <h1 className="text-2xl font-bold">John Doe</h1>
                    <p className="text-sm text-gray-500">
                        <span className="font-bold">Email:</span>
                    </p>
                    <p className="text-sm text-gray-500">
                        <span className="font-bold">Phone:</span>
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