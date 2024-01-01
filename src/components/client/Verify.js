import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { set } from 'mongoose';

function Verify() {
    const { token } = useParams();
    const [email, setEmail] = useState('');
    const [verificationStatus, setVerificationStatus] = useState('');
    const [resendStatus, setResendStatus] = useState('');
    const [isVerified, setIsVerified] = useState(false);

    const verifyUser = async (token) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_HOST}/user/verify/${token}`);
            const data = await response.json();
            console.log('data:', data);
            if (!data?.success && !data?.verified && data?.invalidToken) {
                console.log('Error during verification. Please try again.');
                setVerificationStatus('Error during verification. Please try again.');
                setIsVerified(false);
            }
            else if (!data?.success && !data?.verified) {
                setVerificationStatus(data?.msg);
                setIsVerified(false);
            }
            else {
                setVerificationStatus(data?.msg);
                setIsVerified(true);

            }

        } catch (error) {
            console.error('Error during verification:', error);
            toast.error('Error during verification. Please try again.');
        }
    };

    const resendVerificationEmail = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_HOST}/user/resend-verification`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setResendStatus(data?.msg);
            } else {
                setResendStatus(`Error: ${data?.error}`);
            }
        } catch (error) {
            console.error('Error during resend verification email:', error);
            setResendStatus('Error during resend verification email. Please try again.');
        }
    };

    useEffect(() => {
        console.log('token:', token);
        if (token) {
            verifyUser(token);
            console.log(isVerified, verificationStatus, resendStatus, email);
        }
    }, [token]);



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full">
                {!isVerified ? <div className="bg-white p-8 shadow-md rounded-md">
                    <h3 className="text-3xl font-semibold text-center mb-6">Verify your email</h3>
                    <p className="text-center mb-4">
                        We have sent you an email with a verification link to the email address you provided when you signed up.
                    </p>
                    <p className="text-center mb-4">
                        Please check your inbox and click on the link in the email to verify your email address and complete the registration process.
                    </p>
                    <p className="text-center mb-4">
                        If you do not receive an email within 5 minutes, please click on the Resend Verification Email button below.
                    </p>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={async () => await resendVerificationEmail()}
                            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                        >
                            Resend Verification Email
                        </button>
                    </div>
                    <div className="text-center mt-4">
                        <p>{resendStatus}</p>
                        <p>{verificationStatus}</p>
                    </div>
                </div> :
                    <div className="bg-white p-8 shadow-md rounded-md">
                        <h3 className="text-3xl font-semibold text-center mb-6">Email verified</h3>
                        <p className="text-center mb-4">
                            Your email has been verified successfully. Please login to continue.
                        </p>
                        <div className="flex justify-center mt-4">
                            <Link
                                to={'/user/login'}
                                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Verify;
