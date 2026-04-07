"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full min-h-screen bg-black text-white px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Your privacy is important to us. This Privacy Policy explains how
            AvPlat collects, uses, and safeguards your information when you use
            our platform.
          </p>
        </div>

        <Separator />

        {/* Sections */}
        <div className="space-y-8">

          {/* Section 1 */}
          <Card className="bg-neutral-900 border-neutral-800">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">1. Information We Collect</h2>
              <p className="text-gray-400 leading-relaxed">
                We collect personal information that you provide directly, such
                as your name, email address, phone number, and booking details.
                Additionally, we may collect technical data including IP address,
                browser type, and device information to improve platform
                performance and security.
              </p>
            </CardContent>
          </Card>

          {/* Section 2 */}
          <Card className="bg-neutral-900 border-neutral-800">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">2. How We Use Your Information</h2>
              <p className="text-gray-400 leading-relaxed">
                Your data is used to process bookings, provide customer support,
                personalize your experience, and improve our services. We may
                also use your information to send important updates, confirmations,
                and service-related communications.
              </p>
            </CardContent>
          </Card>

          {/* Section 3 */}
          <Card className="bg-neutral-900 border-neutral-800">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">3. Sharing of Information</h2>
              <p className="text-gray-400 leading-relaxed">
                AvPlat may share your information with trusted partners, including
                aircraft operators and payment processors, strictly for the purpose
                of delivering services. We do not sell your personal data to third
                parties.
              </p>
            </CardContent>
          </Card>

          {/* Section 4 */}
          <Card className="bg-neutral-900 border-neutral-800">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">4. Data Security</h2>
              <p className="text-gray-400 leading-relaxed">
                We implement industry-standard security measures to protect your
                information against unauthorized access, alteration, or disclosure.
                However, no method of transmission over the internet is completely
                secure, and we cannot guarantee absolute security.
              </p>
            </CardContent>
          </Card>

          {/* Section 5 */}
          <Card className="bg-neutral-900 border-neutral-800">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">5. Cookies & Tracking</h2>
              <p className="text-gray-400 leading-relaxed">
                We use cookies and similar tracking technologies to enhance user
                experience, analyze site traffic, and understand user behavior.
                You can control cookie preferences through your browser settings.
              </p>
            </CardContent>
          </Card>

          {/* Section 6 */}
          <Card className="bg-neutral-900 border-neutral-800">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">6. User Rights</h2>
              <p className="text-gray-400 leading-relaxed">
                You have the right to access, update, or delete your personal data.
                You may also request restrictions on how your data is processed.
                For any such requests, please contact our support team.
              </p>
            </CardContent>
          </Card>

          {/* Section 7 */}
          <Card className="bg-neutral-900 border-neutral-800">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">7. Data Retention</h2>
              <p className="text-gray-400 leading-relaxed">
                We retain your information only for as long as necessary to fulfill
                the purposes outlined in this policy, unless a longer retention
                period is required by law or regulatory obligations.
              </p>
            </CardContent>
          </Card>

          {/* Section 8 */}
          <Card className="bg-neutral-900 border-neutral-800">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">8. Third-Party Links</h2>
              <p className="text-gray-400 leading-relaxed">
                Our platform may contain links to third-party websites. We are not
                responsible for the privacy practices or content of those external
                sites. We encourage users to review their policies separately.
              </p>
            </CardContent>
          </Card>

          {/* Section 9 */}
          <Card className="bg-neutral-900 border-neutral-800">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">9. Policy Updates</h2>
              <p className="text-gray-400 leading-relaxed">
                AvPlat reserves the right to update this Privacy Policy at any time.
                Changes will be reflected on this page, and continued use of the
                platform indicates your acceptance of the updated terms.
              </p>
            </CardContent>
          </Card>

        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 pt-8">
          © {new Date().getFullYear()} AvPlat. All rights reserved.
        </div>

      </div>
    </div>
  );
}