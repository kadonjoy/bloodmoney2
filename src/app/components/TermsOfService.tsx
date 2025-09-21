// components/TermsOfService.tsx
import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service - BloodMoney 2</title>
        <meta
          name="description"
          content="BloodMoney 2 Terms of Service. Please read these terms carefully before using our services."
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
              Terms of Service
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
                1. Agreement to Terms
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                By accessing or using BloodMoney 2 (&quot;Game&quot;,
                &quot;Service&quot;, &quot;we&quot;, &quot;us&quot;, or
                &quot;our&quot;), you agree to be bound by these Terms of
                Service and our Privacy Policy. If you do not agree to these
                terms, please do not use our Service.
              </p>
            </section>

            {/* Eligibility */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                2. Eligibility
              </h3>
              <p className="text-gray-300 leading-relaxed">
                You must be at least 13 years of age to use our Service. By
                using BloodMoney 2, you represent and warrant that you meet this
                age requirement.
              </p>
            </section>

            {/* License */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                3. License Grant
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Subject to your compliance with these Terms, we grant you a
                limited, non-exclusive, non-transferable, non-sublicensable
                license to access and use BloodMoney 2 for your personal,
                non-commercial entertainment purposes.
              </p>
            </section>

            {/* Restrictions */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                4. Restrictions
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>
                  Modify, adapt, or hack the Game or modify another website to
                  imply it is associated with BloodMoney 2
                </li>
                <li>
                  Use cheats, exploits, automation software, bots, or any
                  unauthorized third-party software
                </li>
                <li>
                  Reverse engineer, decompile, or disassemble any portion of the
                  Game
                </li>
                <li>
                  Use the Service for any illegal purpose or in violation of any
                  laws
                </li>
                <li>Harass, abuse, or harm another person</li>
                <li>Interfere with or disrupt the Service or servers</li>
              </ul>
            </section>

            {/* Virtual Items */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                5. Virtual Items
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                BloodMoney 2 may include virtual currency, items, or other
                digital content (&quot;Virtual Items&quot;). You understand
                that:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>
                  Virtual Items have no real-world value and are not redeemable
                  for money
                </li>
                <li>
                  We may manage, regulate, control, modify, or eliminate Virtual
                  Items at any time
                </li>
                <li>You have no ownership rights in Virtual Items</li>
              </ul>
            </section>

            {/* User Content */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                6. User Content
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                You are responsible for any content you post or transmit through
                the Service. By submitting content, you grant us a worldwide,
                royalty-free license to use, modify, and display such content.
              </p>
            </section>

            {/* Termination */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                7. Termination
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may terminate or suspend your access to the Service
                immediately, without prior notice, for any reason, including if
                you breach these Terms.
              </p>
            </section>

            {/* Disclaimer */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                8. Disclaimer of Warranties
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS
                AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS
                OR IMPLIED. WE DO NOT GUARANTEE THAT THE SERVICE WILL BE
                UNINTERRUPTED, SECURE, OR ERROR-FREE.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                9. Limitation of Liability
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                TO THE FULLEST EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE
                FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                PUNITIVE DAMAGES RESULTING FROM YOUR USE OF THE SERVICE.
              </p>
            </section>

            {/* Indemnification */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                10. Indemnification
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                You agree to indemnify and hold harmless BloodMoney 2 and its
                affiliates from any claims, damages, or expenses arising from
                your use of the Service or violation of these Terms.
              </p>
            </section>

            {/* Governing Law */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                11. Governing Law
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance
                with the laws of [Your Country/State], without regard to its
                conflict of law provisions.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                12. Changes to Terms
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We reserve the right to modify these Terms at any time. We will
                provide notice of material changes by posting the updated Terms
                on our website. Your continued use of the Service constitutes
                acceptance of the revised Terms.
              </p>
            </section>

            {/* Contact Information */}
            {/* <section>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                13. Contact Information
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please
                contact us at:
              </p>
              <div className="bg-gray-700 rounded-lg p-4">
                <p className="text-gray-300">
                  <strong>Email:</strong> legal@bloodmoney2.org
                </p>
                <p className="text-gray-300 mt-2">
                  <strong>Website:</strong> https://bloodmoney2.org/contact
                </p>
              </div>
            </section> */}
          </div>

          {/* Footer */}
          <footer className="text-center mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-400">
              © 2024 BloodMoney 2. All rights reserved.
            </p>
            <div className="mt-4 space-x-6">
              <Link
                href="/"
                className="text-blue-400 hover:text-red-300 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/privacypolicy"
                className="text-blue-400 hover:text-red-300 transition-colors"
              >
                Privacy Policy
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
