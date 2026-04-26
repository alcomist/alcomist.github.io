import React from 'react';
import { Smartphone, Gamepad2, LayoutTemplate, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="fade-in">
      <section className="hero">
        <h1 className="gradient-text">{t('hello', 'home')}</h1>
        <p className="subtitle">Software Engineer & Maker</p>
        <p style={{ maxWidth: '600px', lineHeight: '1.6', color: 'var(--text-muted)' }}>
          {t('desc', 'home')}
        </p>
      </section>

      <section style={{ marginTop: '60px' }}>
        <h2 style={{ marginBottom: '24px', color: 'var(--text-main)' }}>{t('what_i_can_do', 'home')}</h2>
        <div className="card-grid">
          <div className="card glass-panel">
            <Smartphone size={32} color="var(--primary-color)" style={{ marginBottom: '16px' }} />
            <h3>{t('android_title', 'home')}</h3>
            <p>{t('android_desc', 'home')}</p>
          </div>
          <div className="card glass-panel">
            <Gamepad2 size={32} color="var(--accent-color)" style={{ marginBottom: '16px' }} />
            <h3>{t('game_title', 'home')}</h3>
            <p>{t('game_desc', 'home')}</p>
          </div>
          <div className="card glass-panel">
            <LayoutTemplate size={32} color="#10b981" style={{ marginBottom: '16px' }} />
            <h3>{t('frontend_title', 'home')}</h3>
            <p>{t('frontend_desc', 'home')}</p>
          </div>
          <div className="card glass-panel">
            <Globe size={32} color="#f59e0b" style={{ marginBottom: '16px' }} />
            <h3>{t('opensource_title', 'home')}</h3>
            <p>{t('opensource_desc', 'home')}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
