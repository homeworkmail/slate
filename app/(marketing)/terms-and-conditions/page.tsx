import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="h-full max-w-[600px] mx-auto py-6 space-y-2">
      <h1 className="text-xl font-semibold">
        Terms and Conditions for ZenVoice
      </h1>
      <Separator />
      <div className="space-y-4 pt-4">
        <div>
          Slate ("us", "we", or "our") operates the website{" "}
          <Link href="/" className="font-medium underline italic">
            https://slate.homeworkmail.com
          </Link>{" "}
          (the "Service").
        </div>
        <div>
          By accessing or using the Service, you agree to be bound by these
          Terms. If you disagree with any part of the terms, then you may not
          access the Service.
        </div>
        <div>
          <div className="font-semibold pb-2">1. Access to the Service:</div>
          <div className="pl-8">
            <li>
              Access to ZenVoice's software is granted to the user upon a
              one-time payment, providing unlimited access to the product. This
              includes the ability to connect multiple Stripe accounts (1
              account for the 1st Tier plan, and up to 100 for the 2nd Tier
              plan) and generate unlimited invoices (up to 100,000 invoices).
            </li>
            <li>
              Users have the option to request a full refund within 7 days of
              purchase.
            </li>
          </div>
        </div>
        <div>
          <div className="font-semibold pb-2">2. User Data:</div>
          <div className="pl-8">
            <li>
              ZenVoice collects user email and payment information solely for
              the purpose of providing the Service.
            </li>
            <li>
              For more information on how we collect, use, and disclose personal
              information, please refer to our Privacy Policy.
            </li>
          </div>
        </div>
        <div>
          <div className="font-semibold pb-2">3. Non-personal Data :</div>
          <div className="pl-8">
            We may use web cookies to collect non-personal information about
            users' interactions with the Service.
          </div>
        </div>
        <div>
          <div className="font-semibold pb-2">4. Governing Law:</div>
          <div className="pl-8">
            These Terms shall be governed and construed in accordance with the
            laws of Singapore, without regard to its conflict of law provisions.
          </div>
        </div>
        <div>
          <div className="font-semibold pb-2">5. Updates to Terms :</div>
          <div className="pl-8">
            Users will be notified of any updates to these Terms via email.
          </div>
        </div>
        <div>
          For any questions or concerns regarding this Privacy Policy, please
          contact us at homeworkmailorg@gmail.com.
        </div>
        <div className="font-semibold">Thank you for using ZenVoice!</div>
      </div>
    </div>
  );
}

export default page;
