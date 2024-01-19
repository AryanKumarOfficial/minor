import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { HiAtSymbol, HiEye, HiEyeOff, HiFingerPrint } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { registerUser } from '../../Redux/slices/userSlice';
import Layout from './Layout';
import './Register.css';

function UserRegistration() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { error, loading } = useSelector(state => state.user);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [eyeIcon, setEyeIcon] = useState(false);
    const [confirmEyeIcon, setConfirmEyeIcon] = useState(false);
    const [form, setForm] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        cpassword: ''
    });
    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        document.title = 'Hospitalo | User Registration';
        if (
            form?.fname?.length > 0 &&
            form?.lname?.length > 0 &&
            form?.email?.length > 0 &&
            form?.password?.length >= 6 &&
            form?.cpassword?.length >= 6 &&
            form?.password === form?.cpassword &&
            form?.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)

        ) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }

        // destroy toast after 2000

        const timer = setTimeout(() => {
            toast.dismiss();
        }, 2000);

        return () => {
            setDisabled(true);
            clearTimeout(timer);

        }

    }, [form.fname, form.lname, form.email, form.password, form.cpassword]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (e.target.name === 'password') {
            setEyeIcon(e.target.value.length > 0 ? true : false);
        }
        if (e.target.name === 'cpassword') {
            setConfirmEyeIcon(e.target.value.length > 0 ? true : false);
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            let credentials = {
                fname: form?.fname,
                lname: form?.lname,
                email: form?.email,
                password: form?.password
            }
            dispatch(registerUser(credentials)).then((result) => {
                // check if user is regisetered and verified, registered only but not verified, or not registered at all
                console.log(result, 'result');
                if (result?.payload?.success) {
                    toast.success(error, {
                        duration: 2000,
                        position: 'top-center',
                        style: {
                            background: '#d2bfb2',
                            color: '#000',
                            border: '2px solid #000',
                            padding: '16px',
                            zIndex: 1,
                            width: "fit-content",
                            maxWidth: "100vw"
                        },
                        iconTheme: {
                            primary: '#000',
                            secondary: '#FFFAEE',
                        },
                    });
                    setTimeout(() => {
                        redirect('/user/login');
                    }, 2000);
                }
                else {
                    toast.error(error, {
                        duration: 2000,
                        position: 'top-center',
                        style: {
                            background: '#d2bfb2',
                            color: '#000',
                            border: '2px solid #000',
                            padding: '16px',
                            zIndex: 1,
                            width: "fit-content",
                            maxWidth: "100vw"
                        },
                        iconTheme: {
                            primary: '#000',
                            secondary: '#FFFAEE',
                        },
                    });
                }
            });
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <>
            <Layout>
                <form
                    className="login-form flex flex-col justify-center items-center rounded p-4 "
                    onSubmit={handleSubmit}
                    autoComplete='off'
                >
                    <h1 className='text-maroon text-xl font-bold'>User Registration</h1>
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
                            type="text"
                            name="fname"
                            placeholder="First Name"
                            required
                            autoComplete='off'
                            className='pl-7 pr-1 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-maroon focus-within:ring-opacity-50 w-full p-1'
                            style={{ color: '#000' }}
                            onChange={handleChange}
                        />
                    </div>
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
                            type="text"
                            name="lname" placeholder="Last Name"
                            required
                            autoComplete='off'
                            className='pl-7 pr-1 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-maroon focus-within:ring-opacity-50 w-full p-1'
                            style={{ color: '#000' }}
                            onChange={handleChange}
                        />
                    </div>
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
                            autoComplete='off'
                            className='pl-7 pr-1 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-maroon focus-within:ring-opacity-50 w-full p-1'
                            style={{ color: '#000' }}
                            onChange={handleChange}
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
                            type={`${showPassword ? 'text' : 'password'}`}
                            name="password" placeholder="Password"
                            required
                            className='pl-7 pr-7 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-maroon focus-within:ring-opacity-50 w-full p-1'
                            style={{ color: '#000' }}
                            onChange={handleChange}
                        />
                        {eyeIcon && (showPassword ?
                            <HiEyeOff
                                className='mx-6 absolute right-0 cursor-pointer'
                                style={{
                                    padding: '1px',
                                    marginTop: '4px',
                                }}
                                size={20}
                                onClick={() => setShowPassword(!showPassword)}
                            /> :
                            <HiEye
                                className='mx-6 absolute right-0 cursor-pointer'
                                style={{
                                    padding: '1px',
                                    marginTop: '4px',
                                }}
                                size={20}
                                onClick={() => setShowPassword(!showPassword)}
                            />)}

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
                            type={`${showConfirmPassword ? 'text' : 'password'}`}
                            name="cpassword" placeholder="Retype Your Password"
                            required
                            className='pl-7 pr-7 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-maroon focus-within:ring-opacity-50 w-full p-1'
                            style={{ color: '#000' }}
                            onChange={handleChange}
                            onBlur={() => {
                                if (form.password !== form.cpassword) {
                                    toast.error('Password does not match');
                                    setDisabled(true);
                                }
                                else {
                                    setDisabled(false);
                                }
                            }}
                        />
                        {confirmEyeIcon && (showConfirmPassword ?
                            <HiEyeOff
                                className='mx-6 absolute right-0 cursor-pointer'
                                style={{
                                    padding: '1px',
                                    marginTop: '4px',
                                }}
                                size={20}
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            /> :
                            <HiEye
                                className='mx-6 absolute right-0 cursor-pointer'
                                style={{
                                    padding: '1px',
                                    marginTop: '4px',
                                }}
                                size={20}
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            />)}
                    </div>
                    <button
                        type="submit"
                        className="rounded-lg w-full bg-maroon text-white font-bold  hover:bg-opacity-80 transition-all duration-300 ease-in-out disabled:!cursor-not-allowed disabled:!bg-[#d2bfb2] disabled:hover:!text-white disabled:hover:!shadow-none"
                        disabled={disabled}
                    >{
                            loading ? "Loading..." : "Register"
                        }</button>
                    <div className="flex py-2 justify-center items-baseline h-full w-full cursor-pointer  text-lg">
                        <p className='group text-maroon'>Alredy Register?
                            <Link className='group-hover:text-light transition-colors duration-500' to="/user/login">
                                Login Now
                            </Link>
                        </p>
                    </div>
                </form>
            </Layout>
        </>
    )
}

export default UserRegistration;
