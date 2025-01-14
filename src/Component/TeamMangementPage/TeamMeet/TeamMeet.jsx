import React from "react";
import { TeamMemberCard } from "../TeamMemberCard";
import { teamData } from "./teamData";

export const TeamMeet = () => {
  return (
    <>
      {teamData.map((department, index) => (
        <div className="teamMemberCardMain_div" key={index}>
          <div className="container teamMemberCard_div">
            <div className="teamMemberCard_header_container">
              <h1>
                <span className="meetOurTeamHeroStyleTextDiv">
                  {department.department.split(" ")[0]}{" "}
                </span>
                {department.department.split(" ").slice(1).join(" ")}
              </h1>
            </div>
            <div className="teamMember_image_div">
              {department.members.map((member, idx) => (
                <TeamMemberCard key={idx} member={member} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

{
  /* <>
 <div className="teamMemberCardMain_div">
        <div className="container teamMemberCard_div">
          <div className="teamMemberCard_header_container">
            <h1>
              <span className="meetOurTeamHeroStyleTextDiv"> Management </span>{" "}
              Department{" "}
            </h1>
          </div>
          <div className="teamMember_image_div">
            <TeamMemberCard />
          </div>
        </div>
      </div>
      </> */
}
