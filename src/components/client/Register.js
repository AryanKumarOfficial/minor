import React, { useEffect, useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Layout from './Layout';
import { HiAtSymbol, HiEye, HiEyeOff, HiFingerPrint } from 'react-icons/hi';
import ReCAPTCHA from 'react-google-recaptcha';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../Redux/slices/userSlice';

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
    const [captcha, setCaptcha] = useState('');
    const captchaRef = React.useRef();
    useEffect(() => {
        document.title = 'Hospitalo | User Registration';
        if (
            form?.fname?.length > 0 &&
            form?.lname?.length > 0 &&
            form?.email?.length > 0 &&
            form?.password?.length >= 6 &&
            form?.cpassword?.length >= 6 &&
            form?.password === form?.cpassword &&
            form?.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) &&
            captcha.length > 0

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

    }, [form.fname, form.lname, form.email, form.password, form.cpassword, captcha]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (e.target.name === 'password') {
            setEyeIcon(e.target.value.length > 0 ? true : false);
        }
        if (e.target.name === 'cpassword') {
            setConfirmEyeIcon(e.target.value.length > 0 ? true : false);
        }
    }
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
        if (captcha) {
            verified = await verifyCaptcha(captcha);
            captchaRef?.current?.reset();
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
            let credentials = {
                fname: form?.fname,
                lname: form?.lname,
                email: form?.email,
                password: form?.password
            }
            dispatch(registerUser(credentials)).then((result) => {
                // check if user is regisetered and verified, registered only but not verified, or not registered at all
                if (result.payload.success) {
                    toast.success(error);
                    navigate('/user/login');
                }
                else {
                    toast.error(error);
                }
            });
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
                    <ReCAPTCHA
                        sitekey={`${process.env.REACT_APP_RECAPTCHA_SITE_KEY}`}
                        className='w-full my-2'
                        onChange={(value) => setCaptcha(value)}
                        onExpired={() => setCaptcha('')}
                        ref={captchaRef}
                    />
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
