import { useLocation, useNavigate } from 'react-router-dom';
import { IonContent, IonPage, IonIcon } from '@ionic/react';
import { chevronBackOutline, calendarOutline, timeOutline } from 'ionicons/icons';
import { useBookings, Booking } from '../context/BookingsContext';
import './BookingReview.css';

type DraftBooking = Omit<Booking, 'id' | 'status'>;

const BookingReview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addBooking } = useBookings();
  const draft = location.state as DraftBooking | undefined;

  if (!draft) {
    return (
      <IonPage>
        <IonContent fullscreen className="booking-review-content">
          <div className="booking-review-empty">
            <p>Nothing to review.</p>
            <button onClick={() => navigate('/dashboard')}>Back to Home</button>
          </div>
        </IonContent>
      </IonPage>
    );
  }

  const handleConfirm = () => {
    const booking = addBooking(draft);   // the booking is only created here, on explicit confirm
    navigate('/booking-confirmation', { state: booking, replace: true });
  };

  return (
    <IonPage>
      <IonContent fullscreen className="booking-review-content">
        <div className="booking-review">
          <header className="booking-review-header">
            <button className="booking-review-back" aria-label="Go back" onClick={() => navigate(-1)}>
              <IonIcon icon={chevronBackOutline} />
            </button>
            <h1>Confirm Booking</h1>
          </header>

          <div className="booking-review-card">
            <img src={draft.photo} alt={draft.name} />
            <div>
              <p className="booking-review-name">{draft.name}</p>
              <p className="booking-review-subtitle">
                {draft.category} • {draft.subtitle}
              </p>
            </div>
          </div>

          <div className="booking-review-details">
            <div className="booking-review-row">
              <span className="booking-review-row-label">
                <IonIcon icon={calendarOutline} /> Date
              </span>
              <span className="booking-review-row-value">{draft.date}</span>
            </div>
            <div className="booking-review-row">
              <span className="booking-review-row-label">
                <IonIcon icon={timeOutline} /> Time
              </span>
              <span className="booking-review-row-value">{draft.time}</span>
            </div>
            {draft.detail && (
              <div className="booking-review-row">
                <span className="booking-review-row-label">Details</span>
                <span className="booking-review-row-value">{draft.detail}</span>
              </div>
            )}
          </div>

          <p className="booking-review-note">
            Please review your booking details carefully. You can go back to change the date or time before confirming.
          </p>
        </div>

        <div className="booking-review-footer">
          <button className="booking-review-cancel" onClick={() => navigate(-1)}>
            Back
          </button>
          <button className="booking-review-confirm" onClick={handleConfirm}>
            Confirm Booking
          </button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default BookingReview;