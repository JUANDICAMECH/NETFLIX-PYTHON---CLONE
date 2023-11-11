import React from 'react';
import './ProfileCard.css';  

const ProfileCard = ({ profile, onSelectProfile }) => {
  return (
    <div className="profile-card" onClick={() => onSelectProfile(profile)}>
      <div className="profile-image-container">
        <img className="profile-image" src={profile.image} alt={profile.name} />
      </div>
      <p className="profile-name">{profile.name}</p>
    </div>
  );
};

export default ProfileCard;