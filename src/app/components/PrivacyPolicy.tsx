// components/PrivacyPolicy.tsx
import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - BloodMoney 2</title>
        <meta
          name="description"
          content="BloodMoney 2 Privacy Policy. Learn how we collect, use, and protect your data."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="text-center mb-12">
            <Link href="/" className="inline-block mb-8">
              <h1 className="text-4xl font-bold text-blue-600 hover:text-blue-400 transition-colors">
                BLOODMONEY 2
              </h1>
            </Link>
            <h2 className="text-3xl font-bold text-white mb-4">
              Privacy Policy
            </h2>
            <p className="text-gray-400 text-lg">
              Last Updated: September 20, 2025
            </p>
          </header>

          {/* Main Content */}
          <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl">
            {/* Introduction */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                1. Introduction
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Welcome to BloodMoney 2 (&quot;we,&quot; &quot;our,&quot; or
                &quot;us&quot;). We are committed to protecting your privacy and
                ensuring you have a positive experience on our website and while
                playing our games.
              </p>
              <p className="text-gray-300 leading-relaxed">
                This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website or play
                our games.
              </p>
            </section>

            {/* Information Collection */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                2. Information We Collect
              </h3>

              <h4 className="text-xl font-semibold text-white mb-3">
                2.1 Personal Information
              </h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide
                to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Email address (if you contact us for support)</li>
                <li>Username or player name</li>
                <li>Game preferences and settings</li>
                <li>Communication preferences</li>
              </ul>

              <h4 className="text-xl font-semibold text-white mb-3">
                2.2 Automatic Data Collection
              </h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                When you visit our website or play our games, we may
                automatically collect:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Game progress and achievements</li>
                <li>Game performance metrics</li>
                <li>Cookies and similar technologies</li>
              </ul>

              <h4 className="text-xl font-semibold text-white mb-3">
                2.3 Third-Party Services
              </h4>
              <p className="text-gray-300 leading-relaxed">
                We may use third-party services that collect information used to
                provide and improve our services, including analytics and
                advertising partners.
              </p>
            </section>

            {/* Use of Information */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                3. How We Use Your Information
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use the information we collect for various purposes,
                including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  Providing, maintaining, and improving our games and services
                </li>
                <li>Personalizing your gaming experience</li>
                <li>Analyzing game performance and player behavior</li>
                <li>Responding to your comments and questions</li>
                <li>Sending you technical notices and support messages</li>
                <li>Protecting against fraudulent or illegal activity</li>
              </ul>
            </section>

            {/* Cookies */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                4. Cookies and Tracking Technologies
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to track
                activity on our service and hold certain information. Cookies
                are files with a small amount of data which may include an
                anonymous unique identifier.
              </p>
              <p className="text-gray-300 leading-relaxed">
                You can instruct your browser to refuse all cookies or to
                indicate when a cookie is being sent. However, if you do not
                accept cookies, you may not be able to use some portions of our
                service.
              </p>
            </section>

            {/* Data Sharing */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                5. Data Sharing and Disclosure
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Service providers who assist in our business operations</li>
                <li>Analytics and advertising partners</li>
                <li>
                  Law enforcement or government agencies when required by law
                </li>
                <li>Third parties in connection with a business transaction</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                We do not sell your personal information to third parties.
              </p>
            </section>

            {/* Data Security */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                6. Data Security
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational measures
                to protect your personal information. However, no method of
                transmission over the Internet or electronic storage is 100%
                secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                7. Children&apos;s Privacy
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Our services are not intended for children under 13 years of
                age. We do not knowingly collect personal information from
                children under 13. If you are a parent or guardian and believe
                your child has provided us with personal information, please
                contact us.
              </p>
            </section>

            {/* Your Rights */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                8. Your Privacy Rights
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Depending on your location, you may have the following rights
                regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Access and receive a copy of your personal information</li>
                <li>Rectify or update inaccurate personal information</li>
                <li>Request deletion of your personal information</li>
                <li>
                  Restrict or object to the processing of your information
                </li>
                <li>Data portability rights</li>
              </ul>
            </section>

            {/* Changes to Policy */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                9. Changes to This Privacy Policy
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quot;Last Updated&quot; date. You
                are advised to review this Privacy Policy periodically for any
                changes.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                10. Contact Us
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <div className="bg-gray-700 rounded-lg p-4">
                <p className="text-gray-300">
                  <strong>Email:</strong> privacy@bloodmoney2.org
                </p>
                {/* <p className="text-gray-300 mt-2">
                  <strong>Website:</strong> https://bloodmoney2.org/contact
                </p> */}
              </div>
            </section>
          </div>

          {/* Footer */}
          <footer className="text-center mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-400">
              © 2025 BloodMoney 2 Org. All rights reserved.
            </p>
            <div className="mt-4 space-x-6">
              <Link
                href="/"
                className="text-blue-400 hover:text-red-300 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/terms-of-service"
                className="text-blue-400 hover:text-red-300 transition-colors"
              >
                Terms of Service
              </Link>
              {/* <Link
                href="/contact"
                className="text-blue-400 hover:text-red-300 transition-colors"
              >
                Contact
              </Link> */}
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
