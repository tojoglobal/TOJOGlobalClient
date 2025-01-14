import React from "react";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <div className="univarsal_div">
      <Helmet>
        <title>TOJO Global - Privacy Policy </title>
        <link
          rel="canonical"
          href="https://www.tojoglobal.com/privacyPolicy/"
        />
      </Helmet>
      <div className="container">
        <div className="text-center univarsal_text_div text-white">
          <h1>Privacy Policy</h1>
        </div>
        <div>
          <p>
            Welcome to TOJO GLOBAL&#39;s social media page. We want to be clear
            about how we handle your personal data when you interact with us on
            social media.
          </p>
          <ol>
            <li className="mt-2">
              <strong>What Information We Collect</strong>
              <p>
                When you interact with our social media page, we might collect:
              </p>
              <ul>
                <li>
                  <strong>Personal Information:</strong> Your name, profile
                  picture, and contact details if you choose to share them with
                  us.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you
                  interact with our posts, such as likes, comments, and shares.
                  We might also collect data about your IP address and browser
                  type.
                </li>
              </ul>
            </li>
            <li className="mt-4">
              <strong>How We Use Your Information</strong>
              <p>We use your information to:</p>
              <ul>
                <li>
                  Improve your experience by tailoring our content to your
                  interests.
                </li>
                <li>Respond to your comments and messages.</li>
                <li>
                  Analyze how people engage with our content to make it better.
                </li>
              </ul>
            </li>
            <li className="mt-4">
              <strong>Cookies and Tracking</strong>
              <p>
                We use cookies to track how you interact with our social media
                page. Cookies are small files stored on your device. You can
                control these cookies through your browser settings.
              </p>
            </li>
            <li className="mt-4">
              <strong>Sharing Your Information</strong>
              <p>
                We do not share your personal information with others, except:
              </p>
              <ul>
                <li>When required by law.</li>
                <li>To protect our rights.</li>
              </ul>
              <p>
                We may share anonymous data with partners for marketing and
                analysis.
              </p>
            </li>
            <li className="mt-4">
              <strong>Keeping Your Data Safe</strong>
              <p>
                We work hard to keep your information safe, but we cannot
                guarantee complete security. Please be careful when sharing
                information on social media.
              </p>
            </li>
            <li className="mt-4">
              <strong>Your Rights</strong>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information.</li>
                <li>Correct or update your information.</li>
                <li>Request that we delete your information.</li>
              </ul>
              <p>If you have any concerns, please contact us.</p>
            </li>
            <li className="mt-4">
              <strong>Changes to This Policy</strong>
              <p>
                We may update this Privacy Policy from time to time. We will
                post any changes on our social media page and update the
                effective date. Please check back regularly.
              </p>
            </li>
            <li className="mt-4">
              <strong>Contact Us</strong>
              <p>
                If you have questions about this Privacy Policy, please contact
                us at:
              </p>
              <ul>
                <li>
                  <strong>Email:</strong> hello@tojoglobal.com
                </li>
                <li>
                  <strong>Phone:</strong> +8801333-411624
                </li>
              </ul>
            </li>
          </ol>
          <p>
            Thank you for engaging with TOJO GLOBAL. Your privacy is important
            to us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
