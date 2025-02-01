import React, { useEffect, useRef, useState } from "react";
import { HomePageOurPrgoresCardDiv } from "./HomePageSvg/HomePageOurPrgoresCardDiv";

export const OurProgress = () => {
  const progressSectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [clientsGain, setClientsGain] = useState(2600000);

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

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Function to update the Clients Gain value daily
  useEffect(() => {
    const storedValue = localStorage.getItem("clientsGain");
    const lastUpdated = localStorage.getItem("lastUpdated");

    const today = new Date().toISOString().split("T")[0];

    let newValue = storedValue ? parseFloat(storedValue) : 2600000;

    if (lastUpdated !== today) {
      newValue += 100000; // Increase by 100K
      localStorage.setItem("clientsGain", newValue);
      localStorage.setItem("lastUpdated", today);
    }

    setClientsGain(newValue);
  }, []);

  return (
    <section className="container" ref={progressSectionRef}>
      <div
        className="homePageSectionHeroTextstyle homepageOurProgressSection"
        data-aos="fade-down"
      >
        <h1 className="topHeadingStyle homePageOurProgresssText">
          {"Our "} <span className="headdingGradientText">Progress</span>{" "}
        </h1>
        <p className="paraStyle text-white">
          TOJO GLOBAL connects your business directly to your target audience,
          eliminating the need to search for clients. With us, they’ll find
          their way to you.
        </p>
      </div>

      <div className="homePageOurPrgoress_cardMainDiv">
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
          OurProgressNumber={`$${clientsGain}`}
          OurProgressText={"Clients Gain"}
          isInView={isInView}
        />
      </div>
    </section>
  );
};
