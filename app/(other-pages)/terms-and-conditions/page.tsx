"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function TermsPage() {
  return (
    <div className="w-full min-h-screen bg-black text-white px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using AvPlat.
            By accessing or using our platform, you agree to be bound by these terms.
          </p>
        </div>

        <Separator />

        {/* Sections */}
        <div className="space-y-8">

          {/* Section 1 */}
          <Card className="bg-neutral-900 border-neutral-800">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">1. Introduction</h2>
              <p className="text-gray-400 leading-relaxed">
                AvPlat is a technology-driven aviation platform that enables users
                to explore, book, and manage private charter services. By accessing
                our services, you acknowledge that you have read, understood, and
                agreed to comply with these Terms and Conditions.
              </p>
            </CardContent>
          </Card>

          {/* Section 2 */}
          <Card className="bg-neutral-900 border-neutral-800">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">2. Use of Services</h2>
              <p className="text-gray-400 leading-relaxed">
                You agree to use AvPlat only for lawful purposes. You must not misuse
                the platform by attempting unauthorized access, interfering with
                operations, or engaging in fraudulent booking activities.
              </p>
            </CardContent>
          </Card>

          {/* Section 3 */}
          <Card className="bg-neutral-900 border-neutral-800">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">3. Booking & Payments</h2>
              <p className="text-gray-400 leading-relaxed">
                All bookings made through AvPlat are subject to aircraft availability
                and operator confirmation. Pricing may vary based on demand,
                availability, and operational constraints. Payments must be completed
                through authorized channels provided on the platform.
              </p>
            </CardContent>
          </Card>

          {/* Section 4 */}
          <Card className="bg-neutral-900 border-neutral-800">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">4. Cancellations & Refunds</h2>
              <p className="text-gray-400 leading-relaxed">
                Cancellation policies vary depending on the operator and flight type.
                Refund eligibility is determined based on timing, contractual terms,
                and operational commitments. AvPlat reserves the right to deduct
                applicable service charges.
              </p>
            </CardContent>
          </Card>

          {/* Section 5 */}
          <Card className="bg-neutral-900 border-neutral-800">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">5. User Responsibilities</h2>
              <p className="text-gray-400 leading-relaxed">
                Users are responsible for providing accurate information during
                booking, including passenger details and travel requirements. Any
                discrepancies may result in delays, cancellations, or additional
                charges.
              </p>
            </CardContent>
          </Card>

          {/* Section 6 */}
          <Card className="bg-neutral-900 border-neutral-800">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">6. Liability Disclaimer</h2>
              <p className="text-gray-400 leading-relaxed">
                AvPlat acts as an intermediary between users and aircraft operators.
                While we strive to ensure quality service, we are not liable for
                operational delays, cancellations, or unforeseen circumstances beyond
                our control, including weather or regulatory restrictions.
              </p>
            </CardContent>
          </Card>

          {/* Section 7 */}
          <Card className="bg-neutral-900 border-neutral-800">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">7. Privacy Policy</h2>
              <p className="text-gray-400 leading-relaxed">
                Your use of AvPlat is also governed by our Privacy Policy. We are
                committed to protecting your personal data and ensuring transparency
                in how information is collected and used.
              </p>
            </CardContent>
          </Card>

          {/* Section 8 */}
          <Card className="bg-neutral-900 border-neutral-800">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">8. Modifications</h2>
              <p className="text-gray-400 leading-relaxed">
                AvPlat reserves the right to update or modify these Terms at any
                time. Continued use of the platform after changes constitutes
                acceptance of the updated terms.
              </p>
            </CardContent>
          </Card>

          {/* Section 9 */}
          <Card className="bg-neutral-900 border-neutral-800">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">9. Governing Law</h2>
              <p className="text-gray-400 leading-relaxed">
                These Terms shall be governed by and interpreted in accordance with
                applicable laws. Any disputes arising will be subject to the
                jurisdiction of appropriate legal authorities.
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