// frist create a table name progrss
// CREATE TABLE progress (
//   id INT PRIMARY KEY AUTO_INCREMENT,
//   clients_gain BIGINT NOT NULL,
//   last_updated DATE NOT NULL
// );

// frist time insert value
// INSERT INTO progress (clients_gain, last_updated) VALUES (2600000, CURDATE());

// Function to check and update clientsGain daily
const updateClientsGainDaily = () => {
  const today = new Date().toISOString().split("T")[0];

  db.query("SELECT * FROM progress WHERE id = 1", (err, result) => {
    if (err) throw err;

    if (result.length > 0) {
      const lastUpdated = result[0].last_updated;
      let clientsGain = result[0].clients_gain;

      if (lastUpdated !== today) {
        clientsGain += 100000; // Increase by 100K
        db.query(
          "UPDATE progress SET clients_gain = ?, last_updated = ? WHERE id = 1",
          [clientsGain, today],
          (err) => {
            if (err) throw err;
            console.log("Clients gain updated:", clientsGain);
          }
        );
      }
    }
  });
};

// Run the update function once when the server starts
updateClientsGainDaily();

// API endpoint to fetch the updated clientsGain
app.get("/api/clients-gain", (req, res) => {
  db.query("SELECT clients_gain FROM progress WHERE id = 1", (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result[0]);
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
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

  // Fetch the latest clientsGain value from the backend
  useEffect(() => {
    const fetchClientsGain = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/clients-gain"
        );
        setClientsGain(response.data.clients_gain);
      } catch (error) {
        console.error("Error fetching clients gain:", error);
      }
    };

    fetchClientsGain();
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
