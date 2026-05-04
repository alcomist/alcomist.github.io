import React, { useState } from 'react';
import { Gamepad2, ExternalLink, Cpu } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Links = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState('games');

  const tabs = [
    { id: 'games', label: language === 'ko' ? '게임' : 'Games', icon: <Gamepad2 size={18} /> },
    { id: 'engines', label: language === 'ko' ? '게임 엔진' : 'Game Engines', icon: <Cpu size={18} /> }
  ];

  return (
    <div className="fade-in">
      <h1 className="gradient-text" style={{ marginBottom: '24px', fontSize: '2.5rem' }}>{t('title', 'links')}</h1>
      
      {/* Tabs Panel */}
      <div style={{ display: 'flex', gap: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px', marginBottom: '24px', overflowX: 'auto' }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              backgroundColor: activeTab === tab.id ? 'var(--primary-color)' : 'rgba(255,255,255,0.05)',
              color: activeTab === tab.id ? '#fff' : 'var(--text-muted)',
              border: 'none',
              borderRadius: '24px',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap'
            }}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="tab-content" style={{ animation: 'fadeIn 0.3s ease' }}>
        {activeTab === 'games' && (
          <div className="links-grid" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="card" style={{ padding: '0', maxWidth: '600px' }}>
              <div style={{ padding: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Gamepad2 color="var(--accent-color)" />
                <h3 style={{ margin: 0 }}>{t('games_category', 'links') || '오픈소스 게임'}</h3>
              </div>
              <div className="link-list glass-panel" style={{ padding: '24px' }}>
                <a href="https://github.com/zeldaret/oot" target="_blank" rel="noopener noreferrer" className="link-item hover-translate" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', textDecoration: 'none', marginBottom: '12px', transition: 'all 0.2s ease', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ padding: '10px', background: 'rgba(59,130,246,0.1)', borderRadius: '10px' }}>
                    <ExternalLink size={24} color="var(--primary-color)" />
                  </div>
                  <div>
                    <div style={{ color: 'var(--text-main)', fontWeight: 'bold', fontSize: '1.1rem' }}>{t('zelda', 'links')}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>{t('zelda_desc', 'links')}</div>
                  </div>
                </a>
                <a href="https://github.com/HarbourMasters/Shipwright" target="_blank" rel="noopener noreferrer" className="link-item hover-translate" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', textDecoration: 'none', marginBottom: '12px', transition: 'all 0.2s ease', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ padding: '10px', background: 'rgba(59,130,246,0.1)', borderRadius: '10px' }}>
                    <ExternalLink size={24} color="var(--primary-color)" />
                  </div>
                  <div>
                    <div style={{ color: 'var(--text-main)', fontWeight: 'bold', fontSize: '1.1rem' }}>{t('soh', 'links')}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>{t('soh_desc', 'links')}</div>
                  </div>
                </a>
                <a href="https://github.com/jmechner/Prince-of-Persia-Apple-II" target="_blank" rel="noopener noreferrer" className="link-item hover-translate" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', textDecoration: 'none', marginBottom: '12px', transition: 'all 0.2s ease', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ padding: '10px', background: 'rgba(59,130,246,0.1)', borderRadius: '10px' }}>
                    <ExternalLink size={24} color="var(--primary-color)" />
                  </div>
                  <div>
                    <div style={{ color: 'var(--text-main)', fontWeight: 'bold', fontSize: '1.1rem' }}>{t('pop', 'links')}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>{t('pop_desc', 'links')}</div>
                  </div>
                </a>
                <a href="https://github.com/Antrad/Abuse_1996" target="_blank" rel="noopener noreferrer" className="link-item hover-translate" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', textDecoration: 'none', transition: 'all 0.2s ease', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ padding: '10px', background: 'rgba(59,130,246,0.1)', borderRadius: '10px' }}>
                    <ExternalLink size={24} color="var(--primary-color)" />
                  </div>
                  <div>
                    <div style={{ color: 'var(--text-main)', fontWeight: 'bold', fontSize: '1.1rem' }}>{t('abuse', 'links')}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>{t('abuse_desc', 'links')}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'engines' && (
          <div className="links-grid" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="card" style={{ padding: '0', maxWidth: '600px' }}>
              <div style={{ padding: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Cpu color="var(--accent-color)" />
                <h3 style={{ margin: 0 }}>{t('engines_category', 'links') || '게임 엔진'}</h3>
              </div>
              <div className="link-list glass-panel" style={{ padding: '24px' }}>
                <a href="https://heaps.io/" target="_blank" rel="noopener noreferrer" className="link-item hover-translate" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', textDecoration: 'none', marginBottom: '12px', transition: 'all 0.2s ease', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ padding: '10px', background: 'rgba(59,130,246,0.1)', borderRadius: '10px' }}>
                    <ExternalLink size={24} color="var(--primary-color)" />
                  </div>
                  <div>
                    <div style={{ color: 'var(--text-main)', fontWeight: 'bold', fontSize: '1.1rem' }}>Heaps.io Game Engine</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>Haxe based framework for high performance games</div>
                  </div>
                </a>
                <a href="https://defold.com/" target="_blank" rel="noopener noreferrer" className="link-item hover-translate" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', textDecoration: 'none', transition: 'all 0.2s ease', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ padding: '10px', background: 'rgba(59,130,246,0.1)', borderRadius: '10px' }}>
                    <ExternalLink size={24} color="var(--primary-color)" />
                  </div>
                  <div>
                    <div style={{ color: 'var(--text-main)', fontWeight: 'bold', fontSize: '1.1rem' }}>Defold Game Engine</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>Free and open game engine</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Links;
