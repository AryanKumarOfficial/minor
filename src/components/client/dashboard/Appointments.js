import React, { useEffect } from 'react';
import AddAppointments from './AddAppointments';

const UsrAppointments = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    useEffect(() => {

        document.title = 'Hospitalo - Appointments';

    }, []);

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Appointments</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base hidden">Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee</p>
                    </div>
                    <div className="lg:w-2/3 w-full md:w-screen overflow-auto md:overflow-visible md:mx-auto">
                        <table className="table-auto w-full text-left whitespace-no-wrap ">
                            <thead>
                                <tr>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300 rounded-tl rounded-bl border-r-4 border-r-white">Appointment ID</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300 border-r-4 border-r-white">Department</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300 border-r-4 border-r-white">Bed Type</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300 border-r-4 border-r-white">Appointment Date</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300 border-r-4 border-r-white">Appointment Time</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300 border-r-4 border-r-white">Phone</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300 border-r-4 border-r-white">Appointment Created At</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300 border-r-4 border-r-white">Appointment Updated At</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='px-4 py-3 border-r-4 border-r-white border-b-4 border-b-white border-l-4 border-l-white'>1</td>
                                    <td className='px-4 py-3 border-r-4 border-r-white border-b-4 border-b-white'>2021-09-09</td>
                                    <td className='px-4 py-3 border-r-4 border-r-white border-b-4 border-b-white'>12:00:00</td>
                                    <td className='px-4 py-3 border-r-4 border-r-white border-b-4 border-b-white'>Active</td>
                                    <td className='px-4 py-3 border-r-4 border-r-white border-b-4 border-b-white'>Online</td>
                                    <td className='px-4 py-3 border-r-4 border-r-white border-b-4 border-b-white'>Appointment Description</td>
                                    <td className='px-4 py-3 border-r-4 border-r-white border-b-4 border-b-white'>2021-09-09 12:00:00</td>
                                    <td className='px-4 py-3 border-r-4 border-r-white border-b-4 border-b-white'>2021-09-09 12:00:00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
                        <a href='/' className="text-indigo-500 inline-fleax items-center md:mb-2 lg:mb-0 hidden">Learn More
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        <button onClick={toggleModal} className="flex justify-center items-center gap-2 mx-auto my-4 text-white font-bold bg-indigo-500 border-0 py-4 px-4 focus:outline-none hover:bg-indigo-600 rounded">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 ml-0 font-extrabold" viewBox="0 0 24 24">
                                {/* plus symbol */}
                                <path d="M12 4v16m8-8H4"></path>
                            </svg>
                            Appointment
                        </button>
                    </div>
                </div>
                {/* <AddAppointments toggleModal={toggleModal} /> */}
            </section>
            {isModalOpen && (
                <section id="add" className="my-20">
                    <AddAppointments toggleModal={toggleModal} />
                </section>
            )}
        </>
    );
};

export default UsrAppointments;
