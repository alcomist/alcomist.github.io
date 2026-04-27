import React from 'react';
import { Smartphone, Rocket } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Apps = () => {
  const { t } = useLanguage();

  return (
    <div className="fade-in">
      <h1 className="gradient-text" style={{ marginBottom: '24px', fontSize: '2.5rem' }}>{t('apps_title', 'links')}</h1>
      
      <div className="links-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '40px' }}>
        
        {/* Android Apps Section */}
        <div className="card" style={{ padding: '0' }}>
          <div style={{ padding: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Smartphone color="var(--primary-color)" />
            <h3 style={{ margin: 0 }}>{t('android_apps', 'links')}</h3>
          </div>
          <div className="link-list glass-panel">
            <div style={{ marginBottom: '16px' }}>
              <h4 style={{ color: 'var(--text-main)', marginBottom: '8px' }}>{t('current_apps', 'links')}</h4>
              <a href="https://play.google.com/store/apps/details?id=kr.co.fourier.what_time_is_it" target="_blank" rel="noopener noreferrer" className="link-item" style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', textDecoration: 'none' }}>
                <Rocket size={18} />
                <span>{t('kids_clock_genius', 'links')}</span>
              </a>
            </div>
            
            <div>
              <h4 style={{ color: 'var(--text-main)', marginBottom: '8px' }}>{t('future_apps', 'links')}</h4>
              <div className="link-item disabled" style={{ padding: '12px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', opacity: 0.5 }}>
                <Rocket size={18} />
                <span>{t('future_app_1', 'links')} (TBD)</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Apps;
