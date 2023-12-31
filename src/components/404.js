// NotFound.js
import React, { useEffect } from 'react';
import './404.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
    useEffect(() => {
        document.title = 'Hospitalo | Page Not Found';
    }, []);

    return (
        <main
            id="main-404"
            className="flex  md:grid bg-[#F7BB20] flex-col-reverse lg:grid-cols-2 items-center justify-around md:justify-center h-screen"
        >
            <div className="flex flex-wrap items-center justify-start">
                <img
                    src="/images/404.png"
                    alt="not found png"
                    className="w-full md:w-auto mix-blend-co"
                />
            </div>
            <div
                className="flex px-4 md:px-0 flex-col items-start  justify-center flex-wrap"
                style={{
                    fontFamily: 'Poppins',
                    fontWeight: '600',
                    color: '#000',
                    width: '100%',
                    maxWidth: '600px',
                }}
            >
                <h1 className="text-6xl md:text-9xl font-bold text-black">404</h1>
                <h2 className="text-2xl md:text-4xl font-bold text-black">
                    Sorry, page not found
                </h2>
                <p className="text-xs md:text-xl text-black">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                {/* Home and contact us buttons */}
                <div className="flex flex-row items-center my-5 justify-center gap-4 md:gap-10">
                    <Link
                        to="/"
                        className="bg-transparent border-2 border-black text-black font-bold py-2 px-6 md:px-10 rounded-full transition duration-300 ease-in-out hover:bg-black hover:text-white hover:border-transparent  [text-shadow:_0_1px_0_rgb(255_255_255)]"
                    >
                        Home
                    </Link>
                    <Link
                        to="/contact"
                        className="bg-transparent border-2 border-black text-black font-bold py-2 px-4 md:px-8 rounded-full transition duration-300 ease-in-out hover:bg-black hover:text-white hover:border-transparent [text-shadow:_0_1px_0_rgb(255_255_255)]"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default NotFound;
