import { useNavigate, useParams } from 'react-router-dom';
import { IonContent, IonPage, IonIcon } from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons';
import { animalBreeds } from '../data/breeds';
import { pets } from '../data/pets';
import './BreedPets.css';

const BreedPets = () => {
  const { animalId, breedId } = useParams<{ animalId: string; breedId: string }>();
  const navigate = useNavigate();

  const category = animalBreeds.find((c) => c.id === animalId);
  const breed = category?.breeds.find((b) => b.id === breedId);
  const breedPets = pets.filter((p) => p.breedId === breedId);

  if (!breed) {
    return (
      <IonPage>
        <IonContent fullscreen className="breed-pets-content">
          <div className="breed-pets-not-found">
            <p>Breed not found.</p>
            <button onClick={() => navigate('/dashboard')}>Back to Home</button>
          </div>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonContent fullscreen className="breed-pets-content">
        <div className="breed-pets">
          <header className="breed-pets-header">
            <button className="breed-pets-back" aria-label="Go back" onClick={() => navigate(-1)}>
              <IonIcon icon={chevronBackOutline} />
            </button>
            <h1>{breed.name}</h1>
          </header>

          {breedPets.length === 0 ? (
            <p className="breed-pets-empty">No {breed.name} pets available yet.</p>
          ) : (
            <div className="breed-pets-grid">
              {breedPets.map((pet) => (
                <div
                  className="breed-pets-card"
                  key={pet.id}
                  onClick={() => navigate(`/dashboard/pet/${pet.id}`)}
                >
                  <img src={pet.photo} alt={pet.name} />
                  <span>{pet.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default BreedPets;