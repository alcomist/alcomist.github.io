import React from 'react';
import { Smartphone, Gamepad2, Rocket, ExternalLink, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <div className="fade-in">
      <h1 className="gradient-text" style={{ marginBottom: '24px', fontSize: '2.5rem' }}>Apps & Links</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginTop: '40px' }}>
        
        {/* Android Apps */}
        <section>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <Smartphone size={28} color="var(--primary-color)" />
            <h2>Android Apps</h2>
          </div>
          <div className="link-list glass-panel">
            <div style={{ marginBottom: '16px' }}>
              <h4 style={{ color: 'var(--text-main)', marginBottom: '8px' }}>Current Apps</h4>
              <a href="https://play.google.com/store/apps/details?id=kr.co.fourier.what_time_is_it" target="_blank" rel="noopener noreferrer" className="link-item" style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', textDecoration: 'none' }}>
                <Rocket size={18} />
                <span>Kids Clock Genius (키즈 시계 박사)</span>
              </a>
            </div>
            
            <div>
              <h4 style={{ color: 'var(--text-main)', marginBottom: '8px', marginTop: '16px' }}>Future Apps</h4>
              <div className="link-item" style={{ padding: '12px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', opacity: 0.7 }}>
                <Rocket size={18} />
                <span>Upcoming App Project #1</span>
              </div>
            </div>
          </div>
        </section>

        {/* Open Source Games & Engines */}
        <section>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <Gamepad2 size={28} color="var(--secondary-color)" />
            <h2>Game Projects & Engines</h2>
          </div>
          <div className="link-list glass-panel">
            <h4 style={{ color: 'var(--text-main)', marginBottom: '8px' }}>Game Engines</h4>
            <a href="https://heaps.io/" target="_blank" rel="noopener noreferrer" className="link-item" style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
              <ExternalLink size={18} />
              <span>Heaps.io (Haxe Game Engine)</span>
            </a>
            <a href="https://defold.com/" target="_blank" rel="noopener noreferrer" className="link-item" style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
              <ExternalLink size={18} />
              <span>Defold Game Engine</span>
            </a>

            <h4 style={{ color: 'var(--text-main)', marginBottom: '8px', marginTop: '16px' }}>Open Source Projects</h4>
            <a href="https://github.com/alcomist" target="_blank" rel="noopener noreferrer" className="link-item" style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
              <Globe size={18} />
              <span>Alcomist GitHub Repositories</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Links;
