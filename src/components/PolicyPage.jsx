import { useState } from "react";
import FooterApp from "./FooterApp";
import HeaderApp from "./HeaderApp";

const PolicyPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <HeaderApp />

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12 text-gray-800 post-content">
        <h1 className="text-4xl font-bold mb-6 text-[#820080] text-center">
          Privacy Policy
        </h1>

        <div className="space-y-6">
          <p>
            This Privacy Policy explains how IntroYou collects, uses, stores,
            and protects your personal data when you use our matchmaking
            service. We are committed to safeguarding your privacy and handling
            your data in a secure, transparent, and lawful manner.
          </p>

          {/* Section 1 */}
          <section>
            <h2 className="font-semibold text-xl text-[#820080] mb-2">
              1. Who We Are
            </h2>
            <p className="mb-2">
              IntroYou is operated and supplied by Intro International Group
              L.L.C-FZ, a company registered in Dubai, United Arab Emirates,
              with its registered address at Meydan Grandstand, 6th Floor,
              Meydan Road, Nad Al Sheba, Dubai, U.A.E. We are the primary data
              controller for all personal data collected through the IntroYou
              platform.
            </p>
            <p className="mb-2">
              Payments are processed by Triple AMT Group Ltd (Company No.
              10502502), a UK company with its registered office at 20–22
              Wenlock Road, London, England, N1 7GU, that acts solely as a
              payment collection agent on our behalf. Triple AMT may access
              certain personal identifiers (such as your email address) strictly
              for payment processing and customer support. Triple AMT is
              registered with the Information Commissioner’s Office (ICO) in the
              UK.
            </p>
            <p>
              For privacy enquiries, please contact{" "}
              <a
                href="mailto:support@intro-you.com"
                className="text-[#820080] underline"
              >
                support@intro-you.com
              </a>
              .
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-semibold text-xl text-[#820080] mb-2">
              2. Data We Collect
            </h2>
            <p className="mb-2">
              We may collect and process the following personal information:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>
                <strong>Contact details:</strong> name, email address, phone
                number
              </li>
              <li>
                <strong>Identity and demographic data:</strong> date of birth,
                gender, ethnicity, religion, sexuality, nationality
              </li>
              <li>
                <strong>Lifestyle preferences:</strong> dietary habits,
                relationship preferences, hobbies, values
              </li>
              <li>
                <strong>Location:</strong> city, country and distance
                preferences
              </li>
              <li>
                <strong>Account and usage data:</strong> profile photos, login
                history, match interactions
              </li>
              <li>
                <strong>Payment data:</strong> email address and payment
                confirmations (we do not store card details)
              </li>
              <li>
                <strong>Technical data:</strong> IP address, device and browser
                type, pages viewed, cookie identifiers
              </li>
              <li>
                <strong>Verification data:</strong> photographs, selfies and
                relevant information submitted for profile verification and
                security purposes
              </li>
            </ul>
            <p>
              We collect information primarily when you register, complete your
              profile, use our services or contact us. IntroYou is for people
              aged 18 and over only. Certain information is required to provide
              our matchmaking services. If you choose not to provide this
              information, we may be unable to provide the relevant service.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-semibold text-xl text-[#820080] mb-2">
              3. How We Use Your Data and Our Legal Basis
            </h2>
            <p className="mb-2">We use personal information to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Create and manage your IntroYou account.</li>
              <li>Assess matchmaking preferences and compatibility.</li>
              <li>Identify and facilitate suitable introductions.</li>
              <li>Manage memberships and process payments.</li>
              <li>
                Communicate regarding introductions, account updates and
                services.
              </li>
              <li>Provide customer support.</li>
              <li>
                Verify profiles, prevent fraud and maintain platform security.
              </li>
              <li>Improve our website and services.</li>
              <li>Send promotional communications where permitted by law.</li>
              <li>Meet applicable legal and regulatory obligations.</li>
            </ul>
            <p className="mb-3">
              Religion, sexual orientation and ethnicity are used only for
              matchmaking and are never shared with advertising partners. Where
              processing relies on consent, you can withdraw that consent at any
              time.
            </p>
            <p className="mb-2">
              We rely on the following lawful bases, as applicable:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Performance of a Contract:</strong> To provide
                membership services, matchmaking introductions, account
                administration and payment processing where the processing is
                necessary for these services.
              </li>
              <li>
                <strong>Legitimate Interests:</strong> To maintain platform
                security, prevent misuse, provide customer support and improve
                our services, where these interests are not overridden by
                individuals' rights.
              </li>
              <li>
                <strong>Consent:</strong> Where required for optional marketing,
                advertising technologies and other activities requiring consent.
              </li>
              <li>
                <strong>Legal Obligations:</strong> To comply with applicable
                financial, accounting, regulatory and legal requirements.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-semibold text-xl text-[#820080] mb-2">
              4. Cookies
            </h2>
            <p className="mb-2">
              Essential cookies are always on. Analytics and marketing cookies
              are set only if you choose “Accept all” on our cookie banner.
              Closing the banner counts as “Essential only”.
            </p>
            <p className="mb-3">
              IntroYou uses cookies and similar technologies to operate, protect
              and improve our website.
            </p>

            <h3 className="font-semibold text-lg text-[#820080] mt-3 mb-1">
              Essential Cookies
            </h3>
            <p className="mb-1">
              These support essential website functionality, including account
              authentication, security and remembering privacy preferences.
            </p>
            <p className="mb-3">
              We use Cloudflare for website security and protection.
            </p>

            <h3 className="font-semibold text-lg text-[#820080] mt-3 mb-1">
              Analytics Cookies
            </h3>
            <p className="mb-3">
              We use Google Analytics to understand website traffic, measure
              visitor activity and improve our services.
            </p>

            <h3 className="font-semibold text-lg text-[#820080] mt-3 mb-1">
              Marketing Cookies
            </h3>
            <p className="mb-3">
              We use Meta Pixel to measure advertising performance, track
              website conversions and improve our marketing campaigns.
            </p>

            <h3 className="font-semibold text-lg text-[#820080] mt-3 mb-1">
              How Long These Cookies Last
            </h3>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Google Analytics: up to 2 years</li>
              <li>Meta Pixel: up to 90 days</li>
              <li>Cloudflare: typically 30 minutes</li>
            </ul>

            <h3 className="font-semibold text-lg text-[#820080] mt-3 mb-1">
              Your Cookie Choices
            </h3>
            <p>
              Our cookie consent banner allows visitors to accept optional
              cookies or select essential cookies only. Essential cookies
              necessary for website functionality and security may remain active
              where permitted by law.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-semibold text-xl text-[#820080] mb-2">
              5. Who We Share Data With
            </h2>
            <p className="mb-2">We do not sell your personal information.</p>
            <p className="mb-2">
              We may share relevant personal information with:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>
                <strong>Other IntroYou Members:</strong> Selected profile
                details and photographs shared as part of potential matchmaking
                introductions.
              </li>
              <li>
                <strong>Authorised Team Members:</strong> Matchmaking, customer
                support, administrative and technical personnel.
              </li>
              <li>
                <strong>Payment Providers:</strong> Triple AMT Group Ltd and
                applicable payment processing providers.
              </li>
              <li>
                <strong>Technical Service Providers:</strong> Organisations
                providing website hosting, security, communications,
                verification and other operational services.
              </li>
              <li>
                <strong>Analytics and Advertising Providers:</strong> Including
                Google and Meta, where applicable and subject to relevant data
                protection requirements.
              </li>
              <li>
                <strong>Legal Authorities:</strong> Where disclosure is required
                by law or necessary for legal proceedings.
              </li>
            </ul>
            <p>
              We take appropriate measures to limit access to personal
              information and protect it when shared with authorised third
              parties.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-semibold text-xl text-[#820080] mb-2">
              6. International Transfers
            </h2>
            <p>
              Your personal information may be processed outside your country,
              including in the United Arab Emirates and countries where our
              authorised service providers operate. Where required,
              international transfers are subject to appropriate safeguards
              under applicable data protection laws.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="font-semibold text-xl text-[#820080] mb-2">
              7. How Long We Keep Data
            </h2>
            <p className="mb-2">
              We keep personal information only for as long as we need it to
              provide our services and to meet our legal obligations.
            </p>
            <p className="mb-2">
              <strong>Active and inactive accounts:</strong> We may retain
              account and profile information while an account remains open and
              the information is necessary to provide our matchmaking services.
              We review retention according to account activity, status and the
              purposes for which the information is held.
            </p>
            <p className="mb-2">
              <strong>Payment and legal records:</strong> We may retain these
              for up to seven years where required or justified by applicable
              law.
            </p>
            <p>
              <strong>Deleted accounts:</strong> If you request account
              deletion, we will delete your personal information unless
              continued retention is necessary and lawful.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="font-semibold text-xl text-[#820080] mb-2">
              8. Your Rights
            </h2>
            <p className="mb-2">
              <strong>
                Under UK GDPR, you have certain rights regarding your personal
                information, including the right to:
              </strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>
                Access, correct or request deletion of your personal
                information.
              </li>
              <li>
                Object to or request restrictions on certain processing
                activities.
              </li>
              <li>
                Request your information in a portable format, where applicable.
              </li>
              <li>Withdraw consent where processing relies on consent.</li>
              <li>Object to direct marketing at any time.</li>
            </ul>
            <p className="mb-2">
              These rights are subject to applicable legal conditions and
              exceptions.
            </p>
            <p className="mb-2">
              To exercise your rights or raise a privacy complaint, please
              contact{" "}
              <a
                href="mailto:support@intro-you.com"
                className="text-[#820080] underline"
              >
                support@intro-you.com
              </a>
              . We may need to verify your identity before responding to certain
              requests.
            </p>
            <p>
              You also have the right to lodge a complaint with the UK
              Information Commissioner's Office (ICO).
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="font-semibold text-xl text-[#820080] mb-2">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy as necessary, with changes
              published on our website and users notified where legally
              required.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <FooterApp />
    </div>
  );
};

export default PolicyPage;
