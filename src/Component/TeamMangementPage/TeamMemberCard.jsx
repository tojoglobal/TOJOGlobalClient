import React from "react";

export const TeamMemberCard = ({ member }) => {
  return (
    <div className="teamMemberCard_image_container">
      <img src={member.profileImage} alt={`${member.name}`} />
      <div className="teamMemberCard_info_container">
        <h2>{member.name}</h2>
        <p>{member.position}</p>
      </div>
    </div>
  );
};
