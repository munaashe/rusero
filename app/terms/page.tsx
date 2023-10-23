import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions - SiDesigned',
  description: 'These terms and conditions outline the rules and regulations for the use of our services.',
}

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-32">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

        <p className="mb-4">
          Welcome to SiDesigned! These terms and conditions outline the rules and regulations for the use of our website
          and services.
        </p>

        <p className="mb-4">
          <strong>Acceptance of Terms</strong>
        </p>

        <p className="mb-4">
          By accessing or using our website and services, you agree to be bound by these terms and conditions. If you do
          not agree with any part of these terms, you may not access our website or use our services.
        </p>

        <p className="mb-4">
          <strong>Intellectual Property</strong>
        </p>

        <p className="mb-4">
          The content on our website, including text, graphics, logos, images, and software, is the property of
          SiDesigned and is protected by intellectual property laws. You may not use, reproduce, or distribute any
          portion of our website or its content without our prior written permission.
        </p>

        <p className="mb-4">
          <strong>Disclaimer of Liability</strong>
        </p>

        <p className="mb-4">
          Our website and services are provided on an <span className='italic text-blue-500'>as is</span> and <span className='italic text-blue-500'>as available</span> basis. SiDesigned does not guarantee
          the accuracy, completeness, or timeliness of the content on our website. We shall not be held liable for any
          direct, indirect, incidental, consequential, or punitive damages arising from your access to or use of our
          website or services.
        </p>

        <p className="mb-4">
          <strong>Indemnification</strong>
        </p>

        <p className="mb-4">
          You agree to indemnify and hold SiDesigned and its affiliates, officers, directors, employees, and agents
          harmless from any claims, liabilities, damages, losses, or expenses, including reasonable legal fees,
          arising out of your use of our website or services or your violation of these terms and conditions.
        </p>

        <p className="mb-4">
          <strong>Changes to Terms and Conditions</strong>
        </p>

        <p className="mb-4">
          SiDesigned reserves the right to update or modify these terms and conditions at any time. We encourage you to
          review this page periodically for any changes. Your continued use of our website and services after any
          modifications constitutes your acceptance of the updated terms and conditions.
        </p>

        <p className="mb-4">
          If you have any questions or concerns about our terms and conditions,  please send an {' '}
          <Link href="mailto:denis.siduna@gmail.com" className="text-blue-500 hover:text-green-700">
            email
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;