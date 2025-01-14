import React from "react";
import "../../Style/TeamPage/TeamPage.style.css";
import { TeamMeet } from "./TeamMeet/TeamMeet";

const TeamPage = () => {
  return (
    <div className="maindiv">
      {/* team page hero text part  */}
      <div className="meetOurteamHeroTextStyleDiv">
        <div className="meetOurTeamHeroGradinetDiv"></div>
        <h1>
          Meet Our <span className="meetOurTeamHeroStyleTextDiv">Team</span>
        </h1>
        <p>
          Our team of passionate and experienced professionals is dedicated to
          helping your business achieve its digital goals. We combine expertise
          in Management, Marketing, Development, Design, and Listing to deliver
          exceptional results.
        </p>
      </div>
      {/* Team Card  */}
      <TeamMeet />
    </div>
  );
};

export default TeamPage;
