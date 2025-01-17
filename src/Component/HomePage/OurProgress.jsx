import React, { useEffect, useRef, useState } from "react";
import { HomePageOurPrgoresCardDiv } from "./HomePageSvg/HomePageOurPrgoresCardDiv";

export const OurProgress = () => {
  const progressSectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = progressSectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.unobserve(section);
        }
      },
      { threshold: 0.2 }
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
      <div
        className="homePageSectionHeroTextstyle homepageOurProgressSection"
        data-aos="fade-down"
      >
        <h1 className="topHeadingStyle homePageOurProgresssText">
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
