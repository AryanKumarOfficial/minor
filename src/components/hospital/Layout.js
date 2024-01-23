import React from "react";
import { ToastBar, Toaster } from "react-hot-toast";
// import './Layout.css'
import { Link } from "react-router-dom";

const Layout = ({ children }) => {


    return (
        <>
            <main
                className="flex justify-center items-center flex-col relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
                style={{
                    minHeight: 'calc(100vh - 4rem)',
                    backgroundImage: 'url(/images/bg-img.png)',
                }}
            >
                <section
                    className="flex justify-center items-center h-fit w-fit rounded flex-col backdrop-blur-[10px] shadow-xl"
                    style={{ backgroundColor: 'rgba(255, 255, 255,0.07)' }}
                >
                    {children}
                </section>

                <div className="flex justify-center absolute right-0 bottom-0 m-4">
                    <Link to="/hospital/login"
                        className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-none dark:before:bg-maroon sm:w-max
                        hover:-translate-y-5 active:scale-95 transition duration-500 ease-in-out transform  rounded-full bg-gradient-to-r from-primary to-maroon text-white font-semibold text-base"
                    >
                        <span
                            className="relative text-base font-semibold text-primary dark:text-white"
                        >
                            Hospital Login
                        </span
                        >
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
};

export default Layout;