import React, { useEffect } from 'react'

function Terms() {
    useEffect(() => {
        document.title = 'Hospitalo | About Us';
    }
        , []);
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-black md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">

                    <div className="md:w-7/12 lg:w-full text-xl">
                        <h2 className="text-2xl text-black font-bold md:text-4xl">
                            {/* Let Hospitalo Care you, Anytime, Anywhere. */}
                            Terms & Conditions
                        </h2>
                        <p className="mb-4 my-4">
                            These Terms and Conditions govern your use of   HOSPITALO and the services provided through our platform. By accessing or using our website, you agree to comply with and be bound by these Terms and Conditions.
                        </p>

                        <h2 className="text-xl font-bold mb-2">1. Acceptance of Terms: </h2>
                        <p className="mb-4">
                            By using   HOSPITALO, you agree to be bound by these Terms and Conditions, our Privacy Policy, and any additional terms and conditions that may apply to specific services.
                        </p>

                        <h2 className="text-xl font-bold mb-2">
                            2. User Registration:
                        </h2>
                        <p className="mb-4">
                            To access certain features of our website, you may be required to register and provide accurate and current information. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
                        </p>

                        <h2 className="text-xl font-bold mb-2">3. Booking Hospital Beds and Scheduling Appointments:</h2>
                        <p className="mb-4">
                            Our platform allows users to book hospital beds and schedule appointments with healthcare professionals. By using these services, you agree to provide accurate information and comply with any relevant terms set by the healthcare providers.
                        </p>

                        <h2 className="text-xl font-bold mb-2">4. User Responsibilities:</h2>
                        <p className="mb-4">
                            You agree to use   HOSPITALO responsibly and in accordance with all applicable laws. You must not engage in any activity that disrupts or interferes with the functioning of our website or services.
                        </p>

                        <h2 className="text-xl font-bold mb-2"> 5. Payment and Fees: </h2>
                        <p className="mb-4">
                            If applicable, you agree to pay any fees associated with the services provided by   HOSPITALO. Payment details will be handled securely through trusted third-party payment processors.

                        </p>

                        <h2 className="text-xl font-bold mb-2">6. User Content:</h2>
                        <p className="mb-4">
                            By submitting content to   HOSPITALO, including reviews and ratings, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, and publish your content in connection with our services.
                        </p>

                        <h2 className="text-xl font-bold mb-2">7. Termination:</h2>
                        <p className="mb-4">
                            We reserve the right to terminate or suspend your account and access to   HOSPITALO at our discretion, without notice, for any reason, including if we believe you have violated these Terms and Conditions.
                        </p>

                        <h2 className="text-xl font-bold mb-2"> 8. Limitation of Liability:</h2>
                        <p className="mb-4">
                            HOSPITALO and its affiliates, partners, and employees shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of our website or services.
                        </p>

                        <h2 className="text-xl font-bold mb-2">9. Governing Law:</h2>
                        <p>
                            These Terms and Conditions are governed by and construed in accordance with the laws of [Your Jurisdiction], and you irrevocably submit to the exclusive jurisdiction of the courts in that jurisdiction.
                        </p>
                        <h2 className="text-xl font-bold mb-2">10. Changes to Terms and Conditions:  </h2>
                        <p>
                            We reserve the right to modify or replace these Terms and Conditions at any time. Your continued use of   HOSPITALO after any changes indicates your acceptance of the updated Terms and Conditions.
                        </p>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Terms
