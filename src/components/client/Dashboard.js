// Desc: Dashboard component for users
import React, { useContext } from 'react'
import Profile from './Profile'
import UserContext from '../../context/client/UserContext';

const Dashboard = () => {
    return (
        <>
            {/* create a dashboard component for users  */}
            <main
                className='min-h-screen flex justify-center items-center flex-col'
            >
                <h1 className='text-center text-6xl font-bold'>Dashboard</h1>
                {/* user profile card */}
                <Profile />
            </main>
        </>
    )
}

export default Dashboard