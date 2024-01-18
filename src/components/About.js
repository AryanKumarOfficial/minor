import React, { useEffect } from 'react'

function About() {
    useEffect(() => {
        document.title = 'Hospitalo | About Us';
    }
        , []);
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="about"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            {/* Let Hospitalo Care you, Anytime, Anywhere. */}
                            About Us
                        </h2>
                        <p className="mt-6 text-gray-600 text-xl">

                            Welcome to <span className="font-bold">HOSPITALO</span>, where we believe in making healthcare accessible, convenient, and efficient. Our mission is to empower patients by providing a seamless online platform for booking hospital beds and scheduling doctor appointments. In a world where health is paramount, we strive to bridge the gap between patients and healthcare facilities, making the process of accessing quality medical services as easy as a few clicks.
                        </p>
                        <p className="mt-4 text-gray-600 text-xl">

                            At <span className="font-bold">HOSPITALO</span>, we understand the challenges that patients often face when navigating the complexities of healthcare. Our dedicated team is committed to simplifying this journey by offering a user-friendly interface that allows individuals to book hospital beds and secure appointments with healthcare professionals from the comfort of their homes.
                        </p>
                        <p className="mt-4 text-gray-600 text-xl">

                            We take pride in our real-time booking system that ensures up-to-date information on bed availability and doctors' schedules. Our platform is designed to be secure and reliable, prioritizing the privacy and confidentiality of patient data. We work closely with hospitals and healthcare providers to ensure seamless integration and accurate information.
                        </p>
                        <p className="mt-4 text-gray-600 text-xl">
                            Customer satisfaction is at the core of our values. We encourage transparency and trust by allowing users to leave reviews and ratings, fostering a community where individuals can make informed decisions about their healthcare choices.
                        </p>
                        <p className="mt-4 text-gray-600 text-xl">
                            Thank you for choosing <span className="font-bold">HOSPITALO</span> as your healthcare companion. We are dedicated to revolutionizing the way patients access medical services, making healthcare a personalized and convenient experience for everyone.
                        </p>
                        <p className="mt-4 text-gray-600 text-xl">
                            Feel free to reach out to our support team if you have any questions or need assistance. Your well-being is our priority.
                        </p>
                        <p className="mt-4 text-gray-600 text-xl">
                            <span className="font-bold">HOSPITALO</span> - Your Path to Health, Simplified.
                        </p>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default About
