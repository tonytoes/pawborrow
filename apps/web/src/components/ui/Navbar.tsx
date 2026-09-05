import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NOTIFICATIONS = [
  { id: 1, name: 'Milo', action: 'booking confirmed', time: '2 hours ago' },
  { id: 2, name: 'Buddy', action: 'now available for the weekend', time: '1 day ago' },
  { id: 3, name: 'Bella', action: 'return reminder sent', time: '2 days ago' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const onHome = pathname === '/';

  const [notifOpen, setNotifOpen] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setNotifOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-mark">🐾</span> PawBorrow
        </Link>

        <nav className="navbar__links" aria-label="Primary">
          <a href="/#top" className={onHome ? 'is-active' : ''}>
            Home
          </a>
          <a href="/#browse">Browse Pets</a>
          <a href="/#how-it-works">How It Works</a>
          <Link to="/about" className={pathname === '/about' ? 'is-active' : ''}>
            About Us
          </Link>
          <a href="/#contact">Contact Us</a>
        </nav>

        <div className="navbar__actions">
          <div className="navbar__search">
            <input type="search" placeholder="Search pets, breeds..." aria-label="Search" />
            <button aria-label="Search">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.6" />
                <path d="M11 11L14.5 14.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="navbar__notif" ref={notifRef}>
            <button
              className="navbar__icon-btn"
              aria-label="Notifications"
              aria-expanded={notifOpen}
              onClick={() => setNotifOpen((prev) => !prev)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 21s-7.5-4.6-10-9.1C.4 8.3 2 4.5 5.7 4c2.1-.3 4 .8 6.3 3.1C14.3 4.8 16.2 3.7 18.3 4c3.7.5 5.3 4.3 3.7 7.9C19.5 16.4 12 21 12 21Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </button>

            {notifOpen && (
              <div className="navbar__notif-dropdown">
                <span className="navbar__notif-arrow" aria-hidden="true" />
                <p className="navbar__notif-title">Notifications</p>
                {NOTIFICATIONS.length === 0 ? (
                  <p className="navbar__notif-empty">You're all caught up.</p>
                ) : (
                  <ul>
                    {NOTIFICATIONS.map((n) => (
                      <li key={n.id}>
                        <span className="navbar__notif-avatar" aria-hidden="true" />
                        <div className="navbar__notif-body">
                          <p>
                            <strong>{n.name}</strong> {n.action}
                          </p>
                          <span className="navbar__notif-time">{n.time}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>

          <Link to="/login" className="navbar__cta">
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}