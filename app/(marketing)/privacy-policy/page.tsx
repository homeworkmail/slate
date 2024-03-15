import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="h-full max-w-[600px] mx-auto py-6 space-y-2">
      <h1 className="text-xl font-semibold">Privacy Policy</h1>
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
          <div className="font-semibold pb-2">
            1. Information Collection and Use:
          </div>
          <div className="pl-8">
            We collect and use the following types of information for order
            processing purposes:
            <div className="pl-8">
              <li>Email address</li>
              <li>Payment information</li>
            </div>
          </div>
        </div>
        <div>
          <div className="font-semibold pb-2">2. Data Collection Methods:</div>
          <div className="pl-8">
            We may use web cookies to collect non-personal information about
            users' interactions with the Service.
          </div>
        </div>
        <div>
          <div className="font-semibold pb-2">3. Data Sharing:</div>
          <div className="pl-8">
            We do not share any user data with third parties except for
            suthentication provider you choose to login with.
          </div>
        </div>
        <div>
          <div className="font-semibold pb-2">4. Children's Privacy:</div>
          <div className="pl-8">
            We do not knowingly collect any personal information from children
            under the age of 13. If you are a parent or guardian and you are
            aware that your child has provided us with personal information,
            please contact us so that we can take necessary actions.
          </div>
        </div>
        <div>
          <div className="font-semibold pb-2">
            5. Updates to the Privacy Policy:
          </div>
          <div className="pl-8">
            Users will be notified of any updates to this Privacy Policy via
            email.
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
