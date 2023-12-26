import React, { useEffect, useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import toast, { ToastBar, Toaster } from 'react-hot-toast';
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useContext } from 'react';
import UserContext from '../../context/client/UserContext';

function UserLogin() {
    const { loginUser, user } = useContext(UserContext);

    const [showPassword, setShowPassword] = useState(false);
    const [eyeIcon, setEyeIcon] = useState(false); // [1,2,3,4,5,6,7,8,9,10]
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (
            form.email.length > 0 &&
            form.password.length >= 6
        ) {
            setDisabled(false);

        }
        else {
            setDisabled(true);
        }

        // destroy toast after 2000


    }, [form.email, form.password]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (e.target.name === 'password') {
            setEyeIcon(e.target.value.length > 0 ? true : false);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(form);
        const formData = {
            email: form.email,
            password: form.password,
        };
        await loginUser(formData);

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
                            <input type="email" name="email" placeholder="Email" required onChange={handleChange} value={form.email} autoComplete='off' />
                        </div>
                        <div className="form-group">
                            <HiFingerPrint className='icon-at'
                                size={20}
                            />
                            <input type={`${showPassword ? "text" : "password"}`} name="password" placeholder="Password" required onChange={handleChange} value={form.password} autoComplete='new-password' />
                            {!showPassword ? <FaRegEye className='eye-icon'
                                style={{ display: `${eyeIcon ? "block" : "none"}` }}
                                onClick={() => setShowPassword(!showPassword)}
                            /> :
                                <FaRegEyeSlash className='eye-icon'
                                    style={{ display: `${eyeIcon ? "block" : "none"}` }}
                                    onClick={() => setShowPassword(!showPassword)}
                                />}
                            <span className={`tooltip relative right-80 bottom-14 ${form.password.length >= 6 ? "!transition-all !invisible" : ""}`}>
                                <span className="tooltip-text absolute w-full bg-gray-800 rounded-lg text-rose-700 p-4 font-bold">
                                    <li>
                                        Password must be at least 6 characters
                                    </li>
                                </span>
                            </span>
                        </div>
                        <button type="submit" className="btn disabled:!cursor-not-allowed disabled:!bg-[#d2bfb2] disabled:hover:!text-white disabled:hover:!shadow-none" disabled={disabled}>Login</button>
                        <div className="logined">
                            <p>New to plateform?
                                <a href="/user/register">
                                    Register
                                </a>
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
