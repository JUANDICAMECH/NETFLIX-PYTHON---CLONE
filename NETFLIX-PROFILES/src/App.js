import React, { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';
import './App.css';
import './ProfileCard.css';

const App = () => {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showManageProfiles, setShowManageProfiles] = useState(false);

  useEffect(() => {

    const fetchProfiles = async () => {
      try {
        const data = [
          { id: 1, name: 'Perfil 1', image: '/images/perfil1.png' },
          { id: 2, name: 'Perfil 2', image: '/images/perfil2.png' },
          { id: 2, name: 'Perfil 3', image: '/images/perfil3.png' },
          { id: 2, name: 'Perfil 4', image: '/images/perfil4.png' },
          { id: 2, name: 'Perfil 5', image: '/images/perfil5.png' },
        ];
        setProfiles(data);
      } catch (error) {
        console.error('Error fetching profiles', error);
      }
    };

    fetchProfiles();
  }, []);

  const handleSelectProfile = (profile) => {
    setSelectedProfile(profile);
  };

  const handleManageProfiles = () => {
    setShowManageProfiles(true);
  };

  const handleCloseModal = () => {
    setShowManageProfiles(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>¿Quién está viendo ahora?</h1>
      </header>
      <div className="profiles-container">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onSelectProfile={handleSelectProfile}
          />
        ))}
      </div>
      <button className="manage-profiles-button" onClick={handleManageProfiles}>
        Administrar Perfiles
      </button>
      {selectedProfile && (
        <div className="selected-profile">
          <h2>Perfil Seleccionado: {selectedProfile.name}</h2>
        </div>
      )}
      {showManageProfiles && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Administrar Perfiles</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;