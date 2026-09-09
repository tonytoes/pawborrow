import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IonContent, IonPage, IonIcon, IonToggle } from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons';
import './AppSettings.css';

const AppSettings = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);   // TODO: visual toggle only — not wired to an actual theme yet
  const [language, setLanguage] = useState('English');

  return (
    <IonPage>
      <IonContent fullscreen className="app-settings-content">
        <div className="app-settings">
          <header className="app-settings-header">
            <button className="app-settings-back" aria-label="Go back" onClick={() => navigate('/profile')}>
              <IonIcon icon={chevronBackOutline} />
            </button>
            <h1>App Settings</h1>
          </header>

          <div className="app-settings-row">
            <span>Dark Mode</span>
            <IonToggle checked={darkMode} onIonChange={() => setDarkMode((prev) => !prev)} />
          </div>

          <div className="app-settings-row">
            <span>Language</span>
            <select className="app-settings-select" value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option>English</option>
              <option>Bahasa Indonesia</option>
              <option>Tagalog</option>
            </select>
          </div>

          <p className="app-settings-version">PawBorrow v1.0.0</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AppSettings;