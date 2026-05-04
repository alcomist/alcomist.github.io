import React, { useState } from 'react';
import { Smartphone, Gamepad2, LayoutTemplate, Globe, Mail, Send, Database, Bot } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import FourierAnimation from '../components/FourierAnimation';

const Home = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', content: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t('request_modal_success', 'home'));
    setIsModalOpen(false);
    setFormData({ name: '', content: '' });
  };

  return (
    <div className="fade-in" style={{ position: 'relative' }}>
      <section className="hero">
        <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '16px' }}>{t('hello', 'home')}</h1>
        <p style={{ maxWidth: '800px', lineHeight: '1.8', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
          {t('desc', 'home')}
        </p>
        <FourierAnimation />
      </section>

      <section style={{ marginTop: '60px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="card glass-panel" style={{ transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}>
            <Bot size={32} color="var(--primary-color)" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>{t('agentic_ai_title', 'home')}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '16px' }}>{t('agentic_ai_desc', 'home')}</p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <a href="https://www.langchain.com/" target="_blank" rel="noopener noreferrer" className="tech-badge green">LangChain</a>
              <a href="https://www.langchain.com/langgraph" target="_blank" rel="noopener noreferrer" className="tech-badge teal">LangGraph</a>
              <a href="https://www.llamaindex.ai/" target="_blank" rel="noopener noreferrer" className="tech-badge purple">LlamaIndex</a>
              <a href="https://modelcontextprotocol.io/" target="_blank" rel="noopener noreferrer" className="tech-badge orange">MCP (Model Context Protocol)</a>
              <a href="https://www.crewai.com/" target="_blank" rel="noopener noreferrer" className="tech-badge red">CrewAI</a>
              <a href="https://n8n.io/" target="_blank" rel="noopener noreferrer" className="tech-badge orange" title="복잡한 워크플로우 자동화에 강점, 로우코드 방식">n8n</a>
              <a href="https://www.langflow.org/" target="_blank" rel="noopener noreferrer" className="tech-badge teal" title="LangChain 기반의 시각적 에이전트 빌더, 빠른 프로토타이핑에 적합">LangFlow</a>
              <a href="https://flowiseai.com/" target="_blank" rel="noopener noreferrer" className="tech-badge purple" title="LangChain 기반의 시각적 에이전트 빌더, 빠른 프로토타이핑에 적합">Flowise</a>
              <a href="https://dify.ai/" target="_blank" rel="noopener noreferrer" className="tech-badge blue" title="LLM 앱 개발 플랫폼으로, RAG(검색 증강 생성)와 에이전트 연동이 용이">Dify</a>
            </div>
          </div>
          <div className="card glass-panel" style={{ transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}>
            <Database size={32} color="var(--secondary-color)" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>{t('pipeline_title', 'home')}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '16px' }}>{t('pipeline_desc', 'home')}</p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <a href="https://opensearch.org/" target="_blank" rel="noopener noreferrer" className="tech-badge blue">OpenSearch</a>
              <a href="https://www.elastic.co/" target="_blank" rel="noopener noreferrer" className="tech-badge teal">Elasticsearch</a>
              <a href="https://solr.apache.org/" target="_blank" rel="noopener noreferrer" className="tech-badge red">Solr</a>
              <a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer" className="tech-badge purple">Kafka</a>
              <a href="http://gearman.org/" target="_blank" rel="noopener noreferrer" className="tech-badge orange">Gearman</a>
            </div>
          </div>
          <div className="card glass-panel" style={{ transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}>
            <LayoutTemplate size={32} color="#10b981" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>{t('fullstack_title', 'home')}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '16px' }}>{t('fullstack_desc', 'home')}</p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="tech-badge blue">React</a>
              <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer" className="tech-badge green">Vue</a>
              <a href="https://angular.dev/" target="_blank" rel="noopener noreferrer" className="tech-badge red">Angular</a>
              <a href="https://spring.io/projects/spring-boot" target="_blank" rel="noopener noreferrer" className="tech-badge green">Spring Boot</a>
              <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer" className="tech-badge teal">FastAPI</a>
            </div>
          </div>
          <div className="card glass-panel" style={{ transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}>
            <Smartphone size={32} color="var(--primary-color)" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>{t('android_title', 'home')}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '16px' }}>{t('android_desc', 'home')}</p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer" className="tech-badge green">Google Play Store</a>
            </div>
          </div>
          <div className="card glass-panel" style={{ transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}>
            <Gamepad2 size={32} color="var(--accent-color)" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>{t('game_title', 'home')}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.5' }}>{t('game_desc', 'home')}</p>
          </div>


        </div>
      </section>

      {/* Tech Stack Section (Moved) */}
      <section style={{ marginTop: '60px' }}>
        <h2 style={{ marginBottom: '24px', color: 'var(--text-main)', fontSize: '2rem' }}>{t('tech_stack', 'home') || 'Tech Stack'}</h2>
        <div className="glass-panel" style={{ padding: '32px', borderRadius: '24px' }}>
          
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Search & Message Brokers</h4>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <a href="https://opensearch.org/" target="_blank" rel="noopener noreferrer" className="tech-badge blue">OpenSearch</a>
              <a href="https://www.elastic.co/" target="_blank" rel="noopener noreferrer" className="tech-badge teal">Elasticsearch</a>
              <a href="https://solr.apache.org/" target="_blank" rel="noopener noreferrer" className="tech-badge red">Solr</a>
              <a href="https://redis.io/" target="_blank" rel="noopener noreferrer" className="tech-badge red">Redis</a>
              <a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer" className="tech-badge purple">Kafka</a>
              <a href="http://gearman.org/" target="_blank" rel="noopener noreferrer" className="tech-badge orange">Gearman</a>
            </div>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Databases</h4>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer" className="tech-badge blue">MySQL</a>
              <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer" className="tech-badge teal">PostgreSQL</a>
              <a href="https://www.microsoft.com/sql-server" target="_blank" rel="noopener noreferrer" className="tech-badge red">Microsoft SQL Server</a>
            </div>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Languages & Frameworks</h4>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" className="tech-badge blue">Python</a>
              <a href="https://dev.java/" target="_blank" rel="noopener noreferrer" className="tech-badge orange">Java</a>
              <a href="https://spring.io/projects/spring-boot" target="_blank" rel="noopener noreferrer" className="tech-badge green">Spring Boot</a>
              <a href="https://docs.spring.io/spring-framework/reference/web/webflux.html" target="_blank" rel="noopener noreferrer" className="tech-badge green">WebFlux</a>
              <a href="https://flutter.dev/" target="_blank" rel="noopener noreferrer" className="tech-badge teal">Flutter</a>
            </div>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Cloud & Infrastructure</h4>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <a href="https://azure.microsoft.com/" target="_blank" rel="noopener noreferrer" className="tech-badge blue">Azure Cloud</a>
              <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer" className="tech-badge orange">AWS</a>
            </div>
          </div>

          <div>
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>AI Coding Assistants</h4>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <a href="https://www.anthropic.com/claude" target="_blank" rel="noopener noreferrer" className="tech-badge orange">Claude Code</a>
              <a href="https://deepmind.google/technologies/gemini/" target="_blank" rel="noopener noreferrer" className="tech-badge purple">Antigravity</a>
              <a href="https://openai.com/blog/openai-codex" target="_blank" rel="noopener noreferrer" className="tech-badge green">Codex</a>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section style={{ marginTop: '80px', padding: '40px', background: 'var(--surface-color)', borderRadius: '24px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
        <Mail size={40} color="var(--primary-color)" style={{ marginBottom: '20px', margin: '0 auto' }} />
        <h2 style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--text-main)' }}>{t('contact_title', 'home')}</h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
          {t('contact_desc', 'home')}
        </p>
        <button 
          onClick={() => setIsModalOpen(true)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: 'var(--primary-color)',
            color: 'var(--bg-color)',
            fontWeight: 'bold',
            border: 'none',
            padding: '16px 32px',
            borderRadius: '30px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <Send size={20} />
          fourier.co.kr@gmail.com
        </button>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(5px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 1000,
          animation: 'fadeIn 0.2s ease'
        }}>
          <div style={{
            background: 'var(--bg-secondary)',
            padding: '40px',
            borderRadius: '24px',
            width: '100%',
            maxWidth: '500px',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
          }}>
            <h2 style={{ marginBottom: '24px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Mail color="var(--primary-color)" />
              {t('request_modal_title', 'home')}
            </h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)' }}>
                  {t('request_modal_name', 'home')}
                </label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  style={{
                    width: '100%', padding: '12px 16px', borderRadius: '12px',
                    background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)',
                    color: 'var(--text-main)', fontSize: '1rem', boxSizing: 'border-box'
                  }} 
                />
              </div>
              <div style={{ marginBottom: '32px' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)' }}>
                  {t('request_modal_content', 'home')}
                </label>
                <textarea 
                  required
                  rows="5"
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  style={{
                    width: '100%', padding: '12px 16px', borderRadius: '12px',
                    background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)',
                    color: 'var(--text-main)', fontSize: '1rem', resize: 'vertical', boxSizing: 'border-box'
                  }} 
                />
              </div>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end' }}>
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  style={{
                    padding: '12px 24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)',
                    background: 'transparent', color: 'var(--text-muted)', cursor: 'pointer',
                    fontWeight: 'bold', fontSize: '1rem', transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-main)'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                  {t('request_modal_cancel', 'home')}
                </button>
                <button 
                  type="submit"
                  style={{
                    padding: '12px 24px', borderRadius: '12px', border: 'none',
                    background: 'var(--primary-color)', color: 'white', cursor: 'pointer',
                    fontWeight: 'bold', fontSize: '1rem', transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.background = 'var(--accent-color)'}
                  onMouseOut={(e) => e.currentTarget.style.background = 'var(--primary-color)'}
                >
                  {t('request_modal_submit', 'home')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
