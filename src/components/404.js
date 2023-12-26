// NotFound.js
import React, { useEffect } from 'react';
import './404.css';

const NotFound = () => {

    useEffect(() => {
        document.title = 'Hospitalo | page not found';
    }, []);

    return (
        <div id='main-404' className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">404 - Not Found</h1>
            <p className="text-lg">Sorry, the page you are looking for does not exist.</p>
        </div>
    );
};

export default NotFound;
