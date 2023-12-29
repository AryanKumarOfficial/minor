import React, { useEffect, useState } from 'react';
import './Login.css';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import toast, { ToastBar, Toaster } from 'react-hot-toast';
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../Redux/slices/userSlice';
import ReCAPTCHA from 'react-google-recaptcha';

const UserLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const captchaRef = React.useRef();

    // const { loginUser, user, showToast } = useContext(UserContext);
    // states
    const [showPassword, setShowPassword] = useState(false);
    const [eyeIcon, setEyeIcon] = useState(false); // [1,2,3,4,5,6,7,8,9,10]
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [captchaToken, setCaptchaToken] = useState('');
    // redux states
    const { isAuthenticated, loading, error } = useSelector(state => state.user);

    useEffect(() => {
        document.title = 'Hospitalo | User Login';

        if (
            email.length > 0 &&
            password.length >= 6 &&
            email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        ) {
            setDisabled(false);

        }
        else {
            setDisabled(true);
        }

        if (isAuthenticated) {
            navigate('/user/dashboard/profile');
        }

        // destroy toast after 2000
        const timer = setTimeout(() => {
            toast.remove();
        }
            , 2000);
        return () => clearTimeout(timer);

    }, [email, password, isAuthenticated]);

    const verifyCaptcha = async (captchaToken) => {
        const req = await fetch(`${process.env.REACT_APP_API_HOST}/user/verify-captcha`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ captchaToken }),
        });
        const data = await req.json();
        return data;
    }

    const handleSubmit = async (e) => {
        let verified;
        e.preventDefault();
        if (captchaToken) {
            verified = await verifyCaptcha(captchaToken);
            captchaRef.current.reset();
        }
        else {
            toast.error('Please verify captcha', {
                duration: 2000,
                position: 'top-center',
                style: {
                    background: '#d2bfb2',
                    color: '#000',
                    border: '2px solid #000',
                    padding: '16px',
                    zIndex: 1,
                },
                iconTheme: {
                    primary: '#000',
                    secondary: '#FFFAEE',
                },
            });
            return;
        }

        if (verified.success) {
            let credentials = { email, password };
            dispatch(loginUser(credentials)).then((result) => {
                if (result?.payload?.success) {
                    toast.success('Logged In successfully', {
                        duration: 2000,
                        position: 'top-center',
                        style: {
                            background: '#d2bfb2',
                            color: '#000',
                            border: '2px solid #000',
                            padding: '16px',
                            zIndex: 1,
                        },
                        iconTheme: {
                            primary: '#000',
                            secondary: '#FFFAEE',
                        },
                    });
                    setEmail('');
                    setPassword('');
                    setTimeout(() => {
                        redirect('/user/dashboard/profile');
                    }, 2000);
                }
                else {
                    toast.error('Invalid Credentials', {
                        duration: 2000,
                        position: 'top-center',
                        style: {
                            background: '#d2bfb2',
                            color: '#000',
                            border: '2px solid #000',
                            padding: '16px',
                            zIndex: 1,
                        },
                        iconTheme: {
                            primary: '#000',
                            secondary: '#FFFAEE',
                        },
                    });
                }
            });

        }
        else {
            toast.error('Please verify captcha', {
                duration: 2000,
                position: 'top-center',
                style: {
                    background: '#d2bfb2',
                    color: '#000',
                    border: '2px solid #000',
                    padding: '16px',
                    zIndex: 1,
                },
                iconTheme: {
                    primary: '#000',
                    secondary: '#FFFAEE',
                },
            });
        }

    }

    return (
        <>
            <main
                className="flex justify-center items-center flex-col relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
                style={{
                    minHeight: 'calc(100vh - 4rem)',
                    backgroundImage: 'url(/images/bg-img.png)',
                }}
            >

                <form
                    className="login-form flex flex-col justify-center items-center  rounded shadow-lg p-4 backdrop-blur-[10px]"
                    onSubmit={handleSubmit}
                    autoComplete='off'
                    style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
                >
                    <h1 className='text-maroon text-xl font-bold'>User Login</h1>
                    <div className="flex focus-within:text-maroon py-2 w-full">
                        <HiAtSymbol
                            className='icon-at mx-1 absolute'
                            style={{
                                padding: '1px',
                                marginTop: '4px',

                            }}
                            size={20}
                        />
                        <input
                            type="email"
                            name="email" placeholder="Email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            value={email} autoComplete='off'
                            className='pl-7 pr-1 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-maroon focus-within:ring-opacity-50 w-full p-1'
                            style={{ color: '#000' }}
                        />
                    </div>
                    <div className="flex focus-within:text-maroon py-2 w-full">
                        <HiFingerPrint
                            className='icon-at mx-1 absolute'
                            style={{
                                padding: '1px',
                                marginTop: '4px',

                            }}
                            size={20}
                        />
                        <input
                            type="password"
                            name="password" placeholder="Password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            value={password} autoComplete='off'
                            className='pl-7 pr-1 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-maroon focus-within:ring-opacity-50 w-full p-1'
                            style={{ color: '#000' }}
                        />
                    </div>
                    {/* forgot password */}
                    <div className="flex justify-end items-start pb-1 w-full">
                        <Link to='/user/forgot-password' className='text-sm text-maroon hover:underline transition-all duration-500'>Forgot Password?</Link>
                    </div>
                    <ReCAPTCHA
                        sitekey={`6Lfr2T8pAAAAADsGJngNctu36nb4s1DMixICafnD`}
                        className='my-2'
                        onChange={(token) => {
                            setCaptchaToken(token)
                        }}
                        onExpired={() => setCaptchaToken('')}
                        onErrored={() => setCaptchaToken('')}
                        ref={captchaRef}
                    />
                    <button
                        type="submit"
                        className="rounded-lg w-full bg-maroon text-white font-bold  hover:bg-opacity-80 transition-all duration-300 ease-in-out disabled:!cursor-not-allowed disabled:!bg-[#d2bfb2] disabled:hover:!text-white disabled:hover:!shadow-none"
                        disabled={disabled}
                    >{loading ? 'Login...' : "login"}</button>
                    <div className="flex py-2 justify-center items-baseline h-full w-full cursor-pointer  text-lg">
                        <p className='group text-maroon'>New to plateform?
                            <Link className='group-hover:text-light transition-colors duration-500' to="/user/register">
                                Register
                            </Link>
                        </p>
                    </div>
                </form>
                <div className="adm-btn">
                    <Link className='btn' to="/admin/login">
                        Hospital?
                    </Link>
                </div>





                <Toaster>
                    {(t) => (
                        <ToastBar
                            toast={t}
                            style={{
                                ...t.style,
                                animation: t.visible ? 'custom-enter 1s ease' : 'custom-exit 1s ease',
                            }}
                        />
                    )}
                </Toaster>
            </main >
        </>
    );
}

export default UserLogin;
