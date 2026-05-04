import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { User, Briefcase, Link2, Smartphone } from 'lucide-react';
import Home from './pages/Home';
import History from './pages/History';
import Apps from './pages/Apps';
import Links from './pages/Links';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { useLanguage } from './LanguageContext';

function App() {
  const location = useLocation();
  const { toggleLanguage, t } = useLanguage();

  return (
    <div className="layout">
      <nav>
        <Link to="/" className="brand gradient-text">Fourier</Link>
        <div className="nav-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            <User size={18} style={{marginRight: 6, verticalAlign: 'text-bottom'}} />
            {t('about', 'nav')}
          </Link>
          <Link to="/history" className={location.pathname === '/history' ? 'active' : ''}>
            <Briefcase size={18} style={{marginRight: 6, verticalAlign: 'text-bottom'}} />
            {t('history', 'nav')}
          </Link>
          <Link to="/apps" className={location.pathname === '/apps' ? 'active' : ''}>
            <Smartphone size={18} style={{marginRight: 6, verticalAlign: 'text-bottom'}} />
            {t('apps', 'nav')}
          </Link>
          <Link to="/links" className={location.pathname === '/links' ? 'active' : ''}>
            <Link2 size={18} style={{marginRight: 6, verticalAlign: 'text-bottom'}} />
            {t('links', 'nav')}
          </Link>
            <button 
              onClick={toggleLanguage} 
              style={{ 
                background: 'rgba(255,255,255,0.1)', 
                border: 'none', 
                color: 'var(--text-main)', 
                padding: '6px 12px', 
                borderRadius: '16px', 
                cursor: 'pointer',
                fontWeight: 'bold',
                marginLeft: '12px'
              }}
            >
              {t('lang_toggle', 'nav')}
            </button>
          </div>
      </nav>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/links" element={<Links />} />
          {/* Dynamic route for privacy policies */}
          <Route path="/app/android/:appId/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
