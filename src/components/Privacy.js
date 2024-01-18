import React, { useEffect } from 'react'

function Privacy() {
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
                            Privacy Policy
                        </h2>
                        <p className="mb-4 my-4">
                            This Privacy Policy describes how HOSPITALO collects, uses, and protects the personal information you provide on our website. By using HOSPITALO, you agree to the terms outlined in this policy.
                        </p>

                        <h2 className="text-xl font-bold mb-2">1. Information Collected:</h2>
                        <p className="mb-4">
                            We may collect personal information, including but not limited to, your name, contact information, and medical history when you register on our site, book a hospital bed, or schedule an appointment with a doctor.
                        </p>

                        <h2 className="text-xl font-bold mb-2">2. Use of Information:</h2>
                        <p className="mb-4">
                            The information collected is used to personalize user experience, improve customer service, and process transactions. We may use your information to send periodic emails regarding your bookings, appointments, and relevant updates.
                        </p>

                        <h2 className="text-xl font-bold mb-2">3. Protection of Information:</h2>
                        <p className="mb-4">
                            We implement a variety of security measures to safeguard your personal information. Your data is stored in secure databases, and access is restricted to authorized personnel only.
                        </p>

                        <h2 className="text-xl font-bold mb-2">4. Sharing of Information:</h2>
                        <p className="mb-4">
                            We do not sell, trade, or transfer your personally identifiable information to third parties without your consent. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.
                        </p>

                        <h2 className="text-xl font-bold mb-2">5. Cookies:</h2>
                        <p className="mb-4">
                            We use cookies to enhance your experience on our site. Cookies are small files transferred to your device, enabling us to recognize your browser and remember certain information.
                        </p>

                        <h2 className="text-xl font-bold mb-2">6. Third-party Links:</h2>
                        <p className="mb-4">
                            Occasionally, we may include links to third-party products or services on our website. These third-party sites have separate and independent privacy policies. We, therefore, have no responsibility or liability for the content and activities of these linked sites.
                        </p>

                        <h2 className="text-xl font-bold mb-2">7. Consent:</h2>
                        <p className="mb-4">
                            By using our website, you consent to our privacy policy.
                        </p>

                        <h2 className="text-xl font-bold mb-2">8. Changes to the Privacy Policy:</h2>
                        <p className="mb-4">
                            Any changes to our privacy policy will be posted on this page. Users are encouraged to review this page periodically for updates.
                        </p>

                        <h2 className="text-xl font-bold mb-2">9. Contact Information:</h2>
                        <p>
                            If you have any questions regarding this privacy policy, you may contact us using the information below:
                        </p>
                        <p>
                            HOSPITALO<br />
                            CHANAKAYA BOY’S HOSTEL<br />
                            <a href="mailto:support@hospitalo.com">support@hospitalo.com</a>
                        </p>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Privacy
