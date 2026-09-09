import { createContext, useContext, useState, ReactNode } from 'react';

export interface Booking {
  id: string;
  type: 'pet' | 'doctor';
  category: string;
  name: string;
  subtitle: string;
  detail?: string;
  photo: string;
  date: string;
  time: string;
  status: 'Upcoming' | 'Completed' | 'Cancelled';
}

interface BookingsContextValue {
  bookings: Booking[];
  addBooking: (booking: Omit<Booking, 'id' | 'status'>) => Booking;
  cancelBooking: (id: string) => void;
}

const BookingsContext = createContext<BookingsContextValue | undefined>(undefined);

export const BookingsProvider = ({ children }: { children: ReactNode }) => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  const addBooking = (booking: Omit<Booking, 'id' | 'status'>) => {
    const newBooking: Booking = { ...booking, id: `${Date.now()}`, status: 'Upcoming' };
    setBookings((prev) => [newBooking, ...prev]);
    return newBooking;
  };

  const cancelBooking = (id: string) => {
    setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, status: 'Cancelled' } : b)));
  };

  return (
    <BookingsContext.Provider value={{ bookings, addBooking, cancelBooking }}>
      {children}
    </BookingsContext.Provider>
  );
};

export const useBookings = () => {
  const ctx = useContext(BookingsContext);
  if (!ctx) throw new Error('useBookings must be used within a BookingsProvider');
  return ctx;
};