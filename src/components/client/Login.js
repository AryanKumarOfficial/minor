import React, { useEffect, useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import toast, { ToastBar, Toaster } from 'react-hot-toast';
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import useAuthToken from '../../context/hooks/useAuthToken';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../Redux/slices/userSlice';

const UserLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const { loginUser, user, showToast } = useContext(UserContext);
    // states
    const [showPassword, setShowPassword] = useState(false);
    const [eyeIcon, setEyeIcon] = useState(false); // [1,2,3,4,5,6,7,8,9,10]
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(true);
    // redux states
    const { isAuthenticated, loading, error } = useSelector(state => state.user);

    useEffect(() => {
        document.title = 'Hospitalo | User Login';
        if (
            email.length > 0 &&
            password.length >= 6
        ) {
            setDisabled(false);

        }
        else {
            setDisabled(true);
        }

        // destroy toast after 2000


    }, [email, password]);



    const handleSubmit = async (e) => {
        e.preventDefault();
        let credentials = { email, password };
        dispatch(loginUser(credentials)).then((result) => {
            if (result.payload) {
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
                    navigate('/user/dashboard/profile');
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

    return (
        <>
            <main className="usr-login">
                <div className="login-content">
                    <form className='login-form' onSubmit={handleSubmit} autoComplete='off'>
                        <h1>User Login</h1>
                        <div className="form-group">
                            <HiAtSymbol className='icon-at'
                                size={20}
                            />
                            <input type="email" name="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} value={email} autoComplete='off' />
                        </div>
                        <div className="form-group">
                            <HiFingerPrint className='icon-at'
                                size={20}
                            />
                            <input type={`${showPassword ? "text" : "password"}`} name="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} value={password} autoComplete='new-password' />
                            {!showPassword ? <FaRegEye className='eye-icon'
                                style={{ display: `${eyeIcon ? "block" : "none"}` }}
                                onClick={() => setShowPassword(!showPassword)}
                            /> :
                                <FaRegEyeSlash className='eye-icon'
                                    style={{ display: `${eyeIcon ? "block" : "none"}` }}
                                    onClick={() => setShowPassword(!showPassword)}
                                />}
                            <span className={`tooltip relative right-80 bottom-14 ${password.length >= 6 ? "!transition-all !invisible" : ""}`}>
                                <span className="tooltip-text absolute w-full bg-gray-800 rounded-lg text-rose-700 p-4 font-bold">
                                    <li>
                                        Password must be at least 6 characters
                                    </li>
                                </span>
                            </span>
                        </div>
                        <button type="submit" className="btn disabled:!cursor-not-allowed disabled:!bg-[#d2bfb2] disabled:hover:!text-white disabled:hover:!shadow-none" disabled={disabled}>{loading ? 'Login...' : "login"}</button>
                        {error && <p className='text-red-500 text-center'>{error}</p>}
                        <div className="logined">
                            <p>New to plateform?
                                <Link to="/user/register">
                                    Register
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
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
                </Toaster>;
            </main>
        </>
    );
}

export default UserLogin;
