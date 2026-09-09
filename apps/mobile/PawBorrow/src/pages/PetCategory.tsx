import { useNavigate, useParams } from 'react-router-dom' 
import { IonContent, IonPage, IonIcon } from '@ionic/react';
import { chevronBackOutline, searchOutline } from 'ionicons/icons';
import './PetCategory.css';

import catPhoto from '../assets/images/utils/placeholder.png';
import dogPhoto from '../assets/images/utils/placeholder.png';            //Temporary placeholder
import rabbitPhoto from '../assets/images/utils/placeholder.png';
import guineaPigPhoto from '../assets/images/utils/placeholder.png';

const petTypes = [
  { id: 'cat', label: 'Cats', photo: catPhoto },
  { id: 'dog', label: 'Dogs', photo: dogPhoto },
  { id: 'rabbit', label: 'Rabbits', photo: rabbitPhoto },
  { id: 'guinea-pig', label: 'Guinea Pigs', photo: guineaPigPhoto }
]

const PetCategory: React.FC = () => {
  const navigate = useNavigate();
  return (
    <IonPage>
        <IonContent fullscreen className="category-content">
                <div className="category">
                  <header className="category-header">
                    <button className="category-back" aria-label="Go back" onClick={() => navigate('/shop')}>
                      <IonIcon icon={chevronBackOutline} />
                    </button>
                    <h1>Pets</h1>
                  </header>
        
                  <div className="category-search">
                    <input type="text" placeholder="Search" />
                    <button className="category-search-btn" aria-label="Search">
                      <IonIcon icon={searchOutline} />
                    </button>
                  </div>
        
                  <div className="category-section-header">
                    <h2>Our Pets</h2>
                  </div>
        
                  <div className="category-grid">
                    {petTypes.map((cat) => (
                      <div className="category-card" key={cat.id} onClick={() => navigate(`/breed-selection/${cat.id}`)}>
                        <img src={cat.photo} alt={cat.label} />
                        <span>{cat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </IonContent>
    </IonPage>
  );
};

export default PetCategory;
