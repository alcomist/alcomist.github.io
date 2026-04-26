import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Code2, User, Link as LinkIcon, Shield } from 'lucide-react';
import Home from './pages/Home';
import History from './pages/History';
import Links from './pages/Links';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  const location = useLocation();

  return (
    <>
      <nav>
        <Link to="/" className="brand gradient-text">Alcomist</Link>
        <div className="nav-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            <User size={18} style={{marginRight: 6, verticalAlign: 'text-bottom'}} />
            About
          </Link>
          <Link to="/history" className={location.pathname === '/history' ? 'active' : ''}>
            <Code2 size={18} style={{marginRight: 6, verticalAlign: 'text-bottom'}} />
            History
          </Link>
          <Link to="/links" className={location.pathname === '/links' ? 'active' : ''}>
            <LinkIcon size={18} style={{marginRight: 6, verticalAlign: 'text-bottom'}} />
            Apps & Links
          </Link>
        </div>
      </nav>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/links" element={<Links />} />
          {/* Dynamic route for privacy policies */}
          <Route path="/app/android/:appId/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
