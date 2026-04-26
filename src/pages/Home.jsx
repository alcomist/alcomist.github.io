import React from 'react';
import { Code, MonitorSmartphone, Gamepad2, Blocks } from 'lucide-react';

const Home = () => {
  return (
    <div className="fade-in">
      <section className="hero">
        <h1 className="gradient-text">Hello, I'm Alcomist</h1>
        <p>I build applications, games, and open source projects with a focus on clean code and great user experiences.</p>
      </section>

      <h2 style={{ textAlign: 'center', margin: '40px 0 20px', fontFamily: 'Outfit' }}>What I Can Do</h2>
      
      <div className="card-grid">
        <div className="card glass-panel">
          <MonitorSmartphone size={40} color="var(--primary-color)" style={{ marginBottom: 16 }} />
          <h3>Android App Development</h3>
          <p style={{ color: 'var(--text-muted)', marginTop: 8 }}>
            Creating robust and user-friendly mobile applications for the Android ecosystem, focusing on performance and utility.
          </p>
        </div>

        <div className="card glass-panel">
          <Gamepad2 size={40} color="var(--secondary-color)" style={{ marginBottom: 16 }} />
          <h3>Game Development</h3>
          <p style={{ color: 'var(--text-muted)', marginTop: 8 }}>
            Developing interactive and engaging games using modern game engines like Heaps and Defold.
          </p>
        </div>

        <div className="card glass-panel">
          <Code size={40} color="var(--accent-color)" style={{ marginBottom: 16 }} />
          <h3>Frontend Development</h3>
          <p style={{ color: 'var(--text-muted)', marginTop: 8 }}>
            Building responsive, fast, and beautiful web interfaces using React, JavaScript, and modern CSS.
          </p>
        </div>

        <div className="card glass-panel">
          <Blocks size={40} color="#f59e0b" style={{ marginBottom: 16 }} />
          <h3>Open Source Contributions</h3>
          <p style={{ color: 'var(--text-muted)', marginTop: 8 }}>
            Actively participating in and contributing to various open source game engines and projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
