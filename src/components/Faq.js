import React, { useEffect } from 'react'

function Faq() {
    useEffect(() => {
        document.title = 'Hospitalo | FAQs';
    }
        , []);
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-black md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">

                    <div className="md:w-7/12 lg:w-full text-xl">
                        <h2 className="text-2xl text-black font-bold md:text-4xl">
                            {/* Let Hospitalo Care you, Anytime, Anywhere. */}
                            FAQs (Frequently Asked Questions)
                        </h2>

                        <ol className='my-10 mx-8 list-decimal'>
                            <li>
                                <h2 className="text-xl font-bold mb-2">Q: How do I book a hospital bed using your website?</h2>
                                <p className="mb-4">
                                    - A: To book a hospital bed, navigate to the "Hospital Bed Booking" section on our website, choose your preferred bed type, enter the necessary details, and follow the prompts to complete the booking.
                                </p>
                            </li>
                            <li>
                                <h2 className="text-xl font-bold mb-2">Q: Can I schedule an appointment with a specific doctor online?</h2>
                                <p className="mb-4">
                                    - A: Yes, our website allows you to schedule appointments with specific doctors. Visit the "Doctor Appointments" section, select your preferred doctor, and choose an available time slot that suits you.
                                </p>
                            </li>
                            <li>
                                <h2 className="text-xl font-bold mb-2">
                                    Q: What types of hospital beds are available for booking?
                                </h2>
                                <p className="mb-4">
                                    - A: We offer a variety of hospital beds, including single beds, double beds, and ward accommodations. You can choose the bed type that best suits your needs during the booking process.
                                </p>
                            </li>
                            <li>
                                <h2 className="text-xl font-bold mb-2">
                                    Q: How can I check the real-time availability of hospital beds?
                                </h2>
                                <p className="mb-4">
                                    - A: The real-time availability of hospital beds is displayed on our website. Simply navigate to the "Bed Availability" section, and you'll find up-to-date information on the availability of different bed types.
                                </p>
                            </li>
                            <li>
                                <h2 className='text-xl font-bold mb-2'>
                                    Q: Is my personal information secure when using your website?
                                </h2>
                                <p className='mb-4'>
                                    - A: Yes, we prioritize the security and privacy of your personal information. Our website employs robust security measures and follows industry best practices to protect your data.
                                </p>
                            </li>
                            <li>
                                <h2 className='text-xl font-bold mb-2'>
                                    Q: Can I edit or cancel my hospital bed booking?
                                </h2>
                                <p className='mb-4'>
                                    - A: Yes, you can manage your bookings by accessing your user profile. From there, you can edit or cancel your hospital bed booking based on the provided options.
                                </p>
                            </li>
                            <li>
                                <h2 className='text-xl font-bold mb-2'>
                                    Q: How do I leave a review for a hospital or doctor?
                                </h2>
                                <p className='mb-4'>
                                    - A: To leave a review, go to the "Reviews and Ratings" section on our website. You can share your feedback on the hospital or doctor you've interacted with to help others in making informed decisions.
                                </p>
                            </li>
                            <li>
                                <h2 className='text-xl font-bold mb-2'>
                                    Q: What payment methods are accepted for hospital bed bookings?
                                </h2>
                                <p className='mb-4'>
                                    - A: We accept various payment methods, including credit/debit cards. The specific payment options available will be presented to you during the booking process.
                                </p>
                            </li>
                            <li>
                                <h2 className='text-xl font-bold mb-2'>
                                    Q: Can I reschedule a doctor appointment if needed?
                                </h2>
                                <p className='mb-4'>
                                    - A: Yes, you can reschedule your doctor appointment by accessing your user profile and selecting the "Reschedule Appointment" option. Please make changes well in advance to ensure availability.
                                </p>
                            </li>
                            <li>
                                <h2 className='text-xl font-bold mb-2'>
                                    Q: What happens if I face technical issues while using the website?
                                </h2>
                                <p className='mb-4'>
                                    - A: If you encounter technical issues, please reach out to our customer support team through the provided contact information. We'll be happy to assist you in resolving any problems you may face.
                                </p>
                            </li>
                        </ol>

                    </div>
                </div>
            </div >
        </div >
    );
}

export default Faq;
