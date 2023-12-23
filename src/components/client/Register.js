import React, { useEffect, useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import toast, { ToastBar, Toaster } from 'react-hot-toast';

function UserRegistration() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [eyeIcon, setEyeIcon] = useState(false); // [1,2,3,4,5,6,7,8,9,10]
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [confirmEyeIcon, setConfirmEyeIcon] = useState(false); // [1,2,3,4,5,6,7,8,9,10]
    const [form, setForm] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        cpassword: ''
    });
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (
            form.fname.length > 0 &&
            form.lname.length > 0 &&
            form.email.length > 0 &&
            form.password.length >= 6 &&
            form.cpassword.length >= 6 &&
            form.password === form.cpassword
        ) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
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
        console.log(form);
        const { fname, lname, email, password } = form;
        const res = await fetch(`${process.env.REACT_APP_API_PORT}/user/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fname,
                lname,
                email,
                password
            })
        });
        const data = await res.json();
        if (data.success) {
            toast.success(data.msg);
            setForm({
                fname: '',
                lname: '',
                email: '',
                password: '',
                cpassword: ''
            });
            setTimeout(() => {
                navigate('/user/login');
            }, 5000);
        }
        else {
            toast.error(data.msg);
        }
    }

    return (
        <>
            <main className="usr-register">
                <div className="register-content">
                    <form className='register-form' onSubmit={handleSubmit}>
                        <h1>User Registration</h1>
                        <div className="form-group">
                            <input type="text" name="fname" placeholder="First Name" required onChange={handleChange} value={form.fname} />
                        </div>
                        <div className="form-group">
                            <input type="text" name="lname" placeholder="Last Name" required onChange={handleChange} value={form.lname} />
                        </div>
                        <div className="form-group">
                            <input type="text" name="email" placeholder="Email" required onChange={handleChange} value={form.email} />
                        </div>
                        <div className="form-group">
                            <input type={`${showPassword ? "text" : "password"}`} name="password" placeholder="Password" required onChange={handleChange} value={form.password} />
                            {!showPassword ? <FaRegEye className='eye-icon'
                                style={{ display: `${eyeIcon ? "block" : "none"}` }}
                                onClick={() => setShowPassword(!showPassword)}
                            /> :
                                <FaRegEyeSlash className='eye-icon'
                                    style={{ display: `${eyeIcon ? "block" : "none"}` }}
                                    onClick={() => setShowPassword(!showPassword)}
                                />}
                        </div>
                        <div className="form-group">
                            <input type={`${showConfirmPassword ? "text" : "password"}`} name="cpassword" placeholder="Confirm Password" required onChange={handleChange} value={form.cpassword} />
                            {!showConfirmPassword ? <FaRegEye
                                style={{ display: `${confirmEyeIcon ? "block" : "none"}` }}
                                className='eye-icon'
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            /> :
                                <FaRegEyeSlash className='eye-icon'
                                    style={{ display: `${confirmEyeIcon ? "block" : "none"}` }}
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                />}
                            <span className="error">
                                {form.password !== form.cpassword ? 'Password not matched' : ''}
                            </span>
                        </div>
                        <button type="submit" className="btn disabled:!cursor-not-allowed disabled:!bg-[#d2bfb2] disabled:hover:!text-white disabled:hover:!shadow-none" disabled={disabled}>Register</button>
                        <div className="registered">
                            <p>Already have an account?
                                <a href="/user/login">
                                    Login
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

export default UserRegistration;
