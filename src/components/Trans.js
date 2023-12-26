// TransitionExample.jsx

import React from 'react';
import './Trans.css'; // Import your custom CSS file

const TransitionExample = () => {
    return (
        <div className="flex justify-between">
            <div className="animate-slide-left">Element from Left</div>
            <div className="animate-slide-right">Element from Right</div>
        </div>
    );
};

export default TransitionExample;
