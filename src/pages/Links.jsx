import { useState } from 'react';
import { Bot, Boxes, Code2, Database, ExternalLink, Search, Server, Workflow } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Links = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('ai');

  const tabs = [
    { id: 'ai', label: t('ai_tab', 'links'), icon: <Bot size={18} /> },
    { id: 'opensource', label: t('opensource_tab', 'links'), icon: <Boxes size={18} /> }
  ];

  const aiLinks = [
    {
      title: 'LangChain',
      desc: t('langchain_desc', 'links'),
      url: 'https://www.langchain.com/',
      icon: <Workflow size={24} color="var(--primary-color)" />
    },
    {
      title: 'LangGraph',
      desc: t('langgraph_desc', 'links'),
      url: 'https://www.langchain.com/langgraph',
      icon: <Workflow size={24} color="var(--primary-color)" />
    },
    {
      title: 'LlamaIndex',
      desc: t('llamaindex_desc', 'links'),
      url: 'https://www.llamaindex.ai/',
      icon: <Database size={24} color="var(--primary-color)" />
    },
    {
      title: 'Model Context Protocol (MCP)',
      desc: t('mcp_desc', 'links'),
      url: 'https://modelcontextprotocol.io/',
      icon: <Server size={24} color="var(--primary-color)" />
    },
    {
      title: 'CrewAI',
      desc: t('crewai_desc', 'links'),
      url: 'https://www.crewai.com/',
      icon: <Bot size={24} color="var(--primary-color)" />
    },
    {
      title: 'Dify',
      desc: t('dify_desc', 'links'),
      url: 'https://dify.ai/',
      icon: <Bot size={24} color="var(--primary-color)" />
    },
    {
      title: 'n8n',
      desc: t('n8n_desc', 'links'),
      url: 'https://n8n.io/',
      icon: <Workflow size={24} color="var(--primary-color)" />
    },
    {
      title: 'Flowise',
      desc: t('flowise_desc', 'links'),
      url: 'https://flowiseai.com/',
      icon: <Workflow size={24} color="var(--primary-color)" />
    }
  ];

  const openSourceGroups = [
    {
      title: t('search_data_category', 'links'),
      icon: <Search color="var(--accent-color)" />,
      items: [
        { title: 'OpenSearch', desc: t('opensearch_desc', 'links'), url: 'https://opensearch.org/' },
        { title: 'Elasticsearch', desc: t('elasticsearch_desc', 'links'), url: 'https://www.elastic.co/elasticsearch' },
        { title: 'Apache Solr', desc: t('solr_desc', 'links'), url: 'https://solr.apache.org/' },
        { title: 'Monstache', desc: t('monstache_desc', 'links'), url: 'https://rwynn.github.io/monstache-site/' }
      ]
    },
    {
      title: t('backend_infra_category', 'links'),
      icon: <Server color="var(--accent-color)" />,
      items: [
        { title: 'Apache Kafka', desc: t('kafka_desc', 'links'), url: 'https://kafka.apache.org/' },
        { title: 'Redis', desc: t('redis_desc', 'links'), url: 'https://redis.io/' },
        { title: 'MongoDB', desc: t('mongodb_desc', 'links'), url: 'https://www.mongodb.com/' },
        { title: 'Kubernetes', desc: t('kubernetes_desc', 'links'), url: 'https://kubernetes.io/' },
        { title: 'Docker', desc: t('docker_desc', 'links'), url: 'https://www.docker.com/' }
      ]
    },
    {
      title: t('app_framework_category', 'links'),
      icon: <Code2 color="var(--accent-color)" />,
      items: [
        { title: 'React', desc: t('react_desc', 'links'), url: 'https://react.dev/' },
        { title: 'Spring Boot', desc: t('spring_boot_desc', 'links'), url: 'https://spring.io/projects/spring-boot' },
        { title: 'Spring WebFlux', desc: t('webflux_desc', 'links'), url: 'https://docs.spring.io/spring-framework/reference/web/webflux.html' },
        { title: 'FastAPI', desc: t('fastapi_desc', 'links'), url: 'https://fastapi.tiangolo.com/' },
        { title: 'Flutter', desc: t('flutter_link_desc', 'links'), url: 'https://flutter.dev/' }
      ]
    }
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
        {activeTab === 'ai' && (
          <div className="links-grid" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="section-heading" style={{ marginBottom: 0 }}>
              <h2>{t('ai_category', 'links')}</h2>
              <p>{t('ai_category_desc', 'links')}</p>
            </div>
            <div className="link-card-grid">
              {aiLinks.map((item) => (
                <a key={item.title} href={item.url} target="_blank" rel="noopener noreferrer" className="resource-card">
                  <div className="resource-icon">{item.icon}</div>
                  <div>
                    <div className="resource-title">
                      {item.title}
                      <ExternalLink size={16} />
                    </div>
                    <div className="resource-desc">{item.desc}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'opensource' && (
          <div className="links-grid" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="section-heading" style={{ marginBottom: 0 }}>
              <h2>{t('opensource_category', 'links')}</h2>
              <p>{t('opensource_category_desc', 'links')}</p>
            </div>
            {openSourceGroups.map((group) => (
              <div className="resource-group" key={group.title}>
                <div className="resource-group-heading">
                  {group.icon}
                  <h3>{group.title}</h3>
                </div>
                <div className="link-card-grid compact">
                  {group.items.map((item) => (
                    <a key={item.title} href={item.url} target="_blank" rel="noopener noreferrer" className="resource-card">
                      <div className="resource-icon"><ExternalLink size={22} color="var(--primary-color)" /></div>
                      <div>
                        <div className="resource-title">{item.title}</div>
                        <div className="resource-desc">{item.desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Links;
