import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#12002c] via-[#3a0ca3] to-[#7209b7] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/20">

        <h1 className="text-4xl font-bold mb-6 text-center">
          Privacy Policy
        </h1>

        <p className="text-sm text-gray-200 mb-10 text-center">
          Last Updated: {new Date().getFullYear()}
        </p>

        <section className="space-y-4 mb-8">
          <p>
            Welcome to <span className="font-semibold">SH Music</span>.
            Your privacy is important to us. This Privacy Policy explains how
            we collect, use, and protect your information when you use our platform.
          </p>

          <p>
            By using our website or services, you agree to the practices described
            in this policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Information We Collect
          </h2>

          <ul className="list-disc ml-6 space-y-2 text-gray-200">
            <li>Basic information such as name, email, or account details.</li>
            <li>Music preferences and listening activity.</li>
            <li>Device information such as browser type and system details.</li>
            <li>Usage data that helps improve the platform.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How We Use Your Information
          </h2>

          <ul className="list-disc ml-6 space-y-2 text-gray-200">
            <li>To provide and improve our music streaming service.</li>
            <li>To personalize your listening experience.</li>
            <li>To communicate important updates or notifications.</li>
            <li>To ensure security and prevent misuse of the platform.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Cookies and Tracking
          </h2>

          <p className="text-gray-200">
            Our platform may use cookies or similar technologies to enhance
            performance and understand how users interact with the service.
            You can disable cookies through your browser settings if preferred.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Data Security
          </h2>

          <p className="text-gray-200">
            We implement reasonable security measures to protect user data.
            However, no system can guarantee complete protection against
            unauthorized access.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Third-Party Services
          </h2>

          <p className="text-gray-200">
            Some features may rely on third-party services such as analytics
            or payment providers. These services may collect limited
            information as necessary to perform their functions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Your Rights
          </h2>

          <ul className="list-disc ml-6 space-y-2 text-gray-200">
            <li>You can request access to your stored data.</li>
            <li>You can request correction of inaccurate information.</li>
            <li>You may request deletion of your data where applicable.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Policy Updates
          </h2>

          <p className="text-gray-200">
            We may update this Privacy Policy from time to time to reflect
            improvements or legal requirements. Updates will be reflected
            on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Contact Us
          </h2>

          <p className="text-gray-200">
            If you have any questions regarding this Privacy Policy,
            you may contact us through the official communication
            channels provided on the website.
          </p>
        </section>

      </div>
    </div>
  );
};

export default PrivacyPolicy;