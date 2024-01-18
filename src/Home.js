import React, { useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Logo from './components/Logo';

const Home = () => {
  useEffect(() => {
    document.title = 'Hospitalo | Home';
  }, []);


  return (
    <section id="main" className='min-h-screen'>
      <div className="poster">
        <img src="./images/anime-bg.jpg" alt="poster" />
      </div>
      <div className="anime">
        <Link to="/">
          <div className="box">
            <img
              src="./images/department.png"
              alt=""
              style={{ height: '60%', width: '80%', filter: 'invert(100%)' }}
            />
            <h3>Departments</h3>
          </div>
        </Link>

        <Link to="/">
          <div className="box">
            <img
              src="./images/hospital.png"
              alt=""
              style={{ height: '60%', width: '80%' }}
            />
            <h3>Find Hospital</h3>
          </div>
        </Link>
        <Link to="/">
          <div className="box">
            <img src="./images/bed.png" alt="" />
            <h3>Book a Bed</h3>
          </div>
        </Link>
        <Link to="/">
          <div className="box">
            <img src="./images/appointment.png" alt="" />
            <h3>View Appointment</h3>
          </div>
        </Link>

        <Link to="/">
          <div className="box">
            <img
              src="./images/app.webp"
              alt=""
              style={{ height: '50%', width: '40%' }}
            />
            <h3>Android App</h3>
          </div>
        </Link>

        <Link to="/faq">
          <div className="box">
            <img
              src="./images/faq.png"
              alt=""
              style={{ height: '50%', width: '70%' }}
            />
            <h3>Help</h3>
          </div>
        </Link>
      </div>
      <div className="admin-desk md:flex-wrap">
        <div className="flex flex-col items-center justify-center space-y-2 transition-all cursor-default">
          <Logo
            className='peer border-8 p-1 rounded-full scale-75 transition-all border-[#07294d] shadow-2xl  outline-emerald-700 outline-double outline-8 '
            fill={'rgb(7, 41, 77)'}
          />
        </div>
        <div className="content">
          <h3>From HMS's Desk</h3>
          <p>
            The Hospital Management System (HMS) is a comprehensive solution
            designed to enhance the efficiency and effectiveness of healthcare
            facilities. This project addresses the challenges faced by hospitals
            in managing diverse tasks, from patient information to resource
            allocation.
          </p>
          <p>
            The primary objectives of the HMS project include streamlining
            administrative processes, improving patient care, and facilitating
            seamless communication among healthcare professionals.
          </p>
          <p>
            With a user-friendly interface, the HMS aims to simplify complex
            workflows, reduce paperwork, and minimize errors in medical data.
            The integration of a centralized database ensures real-time access
            to patient information, enabling quick decision-making and enhanced
            coordination among hospital staff.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
