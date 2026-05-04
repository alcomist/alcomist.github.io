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
  const [theme, setTheme] = React.useState('modern');

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

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
            <select 
              value={theme}
              onChange={handleThemeChange}
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                color: 'var(--text-main)',
                padding: '6px 12px',
                borderRadius: '16px',
                cursor: 'pointer',
                fontWeight: 'bold',
                marginLeft: '12px',
                outline: 'none',
                appearance: 'none',
                textAlign: 'center'
              }}
            >
              <option value="modern" style={{ color: '#0f172a' }}>{t('theme_modern', 'nav')}</option>
              <option value="retro" style={{ color: '#282828' }}>{t('theme_retro', 'nav')}</option>
            </select>
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

      <footer style={{ 
        textAlign: 'center', 
        padding: '40px 20px', 
        marginTop: 'auto', 
        borderTop: '1px solid var(--border-color)',
        color: 'var(--text-muted)',
        fontSize: '0.85rem',
        lineHeight: '1.8',
        width: '100%'
      }}>
        <div style={{ fontWeight: 'bold', color: 'var(--text-main)', marginBottom: '8px', fontSize: '0.95rem' }}>{t('footer_company', 'nav')}</div>
        <div>{t('footer_rep', 'nav')}</div>
        <div>{t('footer_email', 'nav')}</div>
        <div style={{ marginTop: '16px', fontSize: '0.75rem', opacity: 0.7 }}>
          Copyright © {new Date().getFullYear()} {t('footer_rights', 'nav')}
        </div>
      </footer>
    </div>
  );
}

export default App;
