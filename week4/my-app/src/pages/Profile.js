import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProfileData = {
  eight: {
    id: 777,
    name: "eight",
    description: "lucky",
  },
  hae: {
    id: 555,
    name: "hearie",
    description: "cooker",
  },
};

const Profile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const profile = ProfileData[username];
  console.log(profile);

  console.log(useParams());
  console.log(username);
  console.log(useNavigate());

  return (
    <div>
      <h3>{username} profile입니다.</h3>
      <p>{profile.description}</p>
      <div onClick={() => navigate(-1)}>back</div>
    </div>
  );
};

export default Profile;
