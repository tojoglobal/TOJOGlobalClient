import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Faq from "./Faq";
import Hero from "./Hero";
import About from "./About";
import KeyFeatures from "./KeyFeatures";
import Services from "./Services";
import { Helmet } from "react-helmet-async";
import "../../Style/Home/HomePage.style.css";
import OurValue from "./OurValue";
import { OurProgress } from "./OurProgress";
import { TrustedClient } from "./TrustedClient";
import { ClientReview } from "./ClientReview";
import { LatestBlogPost } from "./LatestBlogPost";
import LetsWork from "./LetsWork";
import ClientSlider from "./ClientSlider";

const HomePage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === "#faq") {
      const element = document.getElementById("faq");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div className="maindiv">
      <Helmet>
        <title>TOJO Global - Home </title>
      </Helmet>
      {/* Hero  section  */}
      <Hero />
      {/* About  section  */}
      <About />
      {/* Our service section   */}
      <Services />
      {/* Key Features & Our Value section   */}
      <section className="homePage_keyFeatures_ourValue_section">
        <KeyFeatures />
        <OurValue />
      </section>

      {/* Our Progress && Our TrustedClient section */}
      <section className="homePageOurPrgoress_section">
        <OurProgress />
        <TrustedClient />
      </section>

      {/* Our Progress && Our TrustedClient section */}
      <section className="homePageOurClinetReviewLatestBlog_section">
        <ClientReview />
        <LatestBlogPost />
      </section>
      {/* lets work  */}
      <LetsWork />
      {/* faq part   */}
      <Faq />
    </div>
  );
};

export default HomePage;
