'use client'

import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="w-[90%] mx-auto pt-28 md:pt-32">
      <h1 className="font-medium text-4xl lg:text-6xl text-center mt-8 mb-16">
        Terms and Conditions
      </h1>

      <p className="text-sm md:text-base font-normal mb-6">
        Last Updated: October 25, 2025
      </p>

      <p className="text-sm md:text-base font-normal mb-6">
        Acceptance of These Terms of Service
      </p>

      <div className="md:space-y-6 text-sm md:text-base font-normal">
        <p>
          Apollo Inc. (&quot;Apollo,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) provides our services (described below) and related content to you through our website(s) located at <Link href="https://www.321apollo.com/" className="font-semibold hover:underline" >Apollo</Link> and through our mobile applications and related technologies (&quot;mobile apps,&quot; and collectively, such mobile apps, the site, and any and all updated or new services, content, features, functionality, and technology offered on or through the mobile apps or site, the &quot;service&quot;).
          All access and use of the service is subject to the terms and conditions contained in these Terms of Service (as amended from time to time, these &quot;Terms of Service&quot; or &quot;Terms&quot;).
          By accessing, browsing, or otherwise using the site, mobile apps, or any other aspect of the service, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
          If you do not accept the terms and conditions of these Terms of Service, you may not access, browse, or otherwise use the service.
        </p>

        <p>
          If you are entering into these Terms of Service on behalf of a company, business, or other legal entity, you represent that you have the authority to bind such entity and its affiliates to these Terms of Service, in which case the terms &quot;you&quot; or &quot;your&quot; shall refer to such entity and its affiliates.
          If you do not have such authority, or if you do not agree with these Terms of Service, you must not accept these Terms and may not use the service.
        </p>

        <p>
          We reserve the right, at our sole discretion, to change or modify portions of these Terms of Service at any time.
          If we do this, we will post the changes on this page and indicate at the top of this page the date these Terms of Service were last revised.
          You may read a current, effective copy of these Terms of Service by visiting the &quot;Terms of Service&quot; link on the site and under the &quot;Legal – Terms of Service&quot; section of our mobile app.
          We will also notify you of any material changes, either through the service user interface, a pop-up notice, email, or through other reasonable means.
          Your continued use of the service after the date any such changes become effective constitutes your acceptance of the new Terms of Service.
          You should periodically visit this page to review the current Terms of Service so you are aware of any revisions.
          If you do not agree to abide by these or any future Terms of Service, you may not access, browse, or use (or continue to access, browse, or use) the service.
        </p>
      </div>
    </div>
  );
}
