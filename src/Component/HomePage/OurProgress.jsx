import React, { useEffect, useRef, useState } from "react";
import { HomePageOurPrgoresCardDiv } from "./HomePageSvg/HomePageOurPrgoresCardDiv";

export const OurProgress = () => {
  const progressSectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = progressSectionRef.current;

    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        // If the section is intersecting (in view), set isInView to true
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.unobserve(section); // Stop observing once it's in view
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (section) {
      observer.observe(section);
    }

    // Cleanup observer when component unmounts
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className="container" ref={progressSectionRef}>
      <div className="homePageSectionHeroTextstyle" data-aos="fade-down">
        <h1 className="topHeadingStyle">
          {"Our "}
          <span className="headdingGradientText">Progress</span>{" "}
        </h1>
        <p className="paraStyle text-white">
          TOJO GLOBAL connects your business directly to your target audience,
          eliminating the need to search for clients. With us, they’ll find
          their way to you
        </p>
      </div>

      <div className="homePageOurPrgoress_cardMainDiv">
        {/* Pass isInView prop to the card component */}
        <HomePageOurPrgoresCardDiv
          OurProgressNumber={"4"}
          OurProgressText={"Years of Experience"}
          isInView={isInView}
        />
        <HomePageOurPrgoresCardDiv
          OurProgressNumber={"50"}
          OurProgressText={"Satisfied Clients"}
          isInView={isInView}
        />
        <HomePageOurPrgoresCardDiv
          OurProgressNumber={"17"}
          OurProgressText={"Countries we Operate"}
          isInView={isInView}
        />
        <HomePageOurPrgoresCardDiv
          OurProgressNumber={"$200K"}
          OurProgressText={"Managed Marketing Fund"}
          isInView={isInView}
        />
        <HomePageOurPrgoresCardDiv
          OurProgressNumber={"$2.6M"}
          OurProgressText={"Clients Gain"}
          isInView={isInView}
        />
      </div>
    </section>
  );
};
