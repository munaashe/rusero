import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - SiDesigned',
  description: 'This Privacy Policy outlines how we collect, use, and safeguard your data when you use our services.',
}

const PrivacyPolicy = () => {
  return (
    <div className=" min-h-screen p-8 pb-2">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 mt-32">Privacy Policy</h1>

        <p className="mb-4">
          At SiDesigned, we are committed to protecting your privacy and ensuring the security of your personal
          information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our
          services.
        </p>

        <p className="mb-4">
          <strong>Information We Collect</strong>
        </p>

        <p className="mb-4">
          We may collect personal information such as your name, email address, and contact details when you interact
          with our website or engage with our services. We also gather non-personal information through the use of
          cookies and similar technologies to improve our website functionality.
        </p>

        <p className="mb-4">
          <strong>How We Use Your Information</strong>
        </p>

        <p className="mb-4">
          We use the collected information to provide and improve our services, communicate with you, personalize your
          experience, and ensure the security of our systems. We may also use your information for marketing purposes
          with your consent.
        </p>

        <p className="mb-4">
          <strong>Information Sharing</strong>
        </p>

        <p className="mb-4">
          We do not sell, trade, or otherwise transfer your personal information to third parties without your consent,
          except as required by law or as necessary to provide our services. We may share your information with trusted
          partners who assist us in operating our website and delivering our services.
        </p>

        <p className="mb-4">
          <strong>Data Security</strong>
        </p>

        <p className="mb-4">
          We employ industry-standard security measures to protect your personal information from unauthorized access,
          disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic
          storage is 100% secure, and we cannot guarantee absolute security.
        </p>

        <p className="mb-4">
          <strong>Changes to This Privacy Policy</strong>
        </p>

        <p className="mb-4">
          SiDesigned reserves the right to update or modify this Privacy Policy at any time. We encourage you to review
          this page periodically for any changes. Your continued use of our services after any modifications
          constitutes your acceptance of the updated Privacy Policy.
        </p>

        <p className="mb-4">
          If you have any questions or concerns about our Privacy Policy, please send an {' '}
          <Link href="mailto:denis.siduna@gmail.com" className="text-blue-500 hover:text-green-700">
            email
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;