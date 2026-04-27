import React from 'react';
import { Gamepad2, ExternalLink } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Links = () => {
  const { t } = useLanguage();

  return (
    <div className="fade-in">
      <h1 className="gradient-text" style={{ marginBottom: '24px', fontSize: '2.5rem' }}>{t('title', 'links')}</h1>
      
      <div className="links-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '40px' }}>
        
        {/* Game Projects & Engines Section */}
        <div className="card" style={{ padding: '0' }}>
          <div style={{ padding: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Gamepad2 color="var(--accent-color)" />
            <h3 style={{ margin: 0 }}>{t('game_projects', 'links')}</h3>
          </div>
          <div className="link-list glass-panel">
            <div style={{ marginBottom: '16px' }}>
              <h4 style={{ color: 'var(--text-main)', marginBottom: '8px' }}>{t('game_engines', 'links')}</h4>
              <a href="https://heaps.io/" target="_blank" rel="noopener noreferrer" className="link-item" style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', textDecoration: 'none' }}>
                <ExternalLink size={18} />
                <span>Heaps.io Game Engine</span>
              </a>
              <a href="https://defold.com/" target="_blank" rel="noopener noreferrer" className="link-item" style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', textDecoration: 'none', marginTop: '8px' }}>
                <ExternalLink size={18} />
                <span>Defold Game Engine</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Links;
