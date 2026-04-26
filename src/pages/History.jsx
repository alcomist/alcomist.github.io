import React, { useMemo } from 'react';
import { useLanguage } from '../LanguageContext';

const History = () => {
  const { t } = useLanguage();

  const historyData = [
    {
      id: 1,
      startDate: '2025-06-02',
      endDate: 'Present',
      title: '시프트원주식회사',
      description: 'Software Engineer'
    },
    {
      id: 1.25,
      startDate: '2024-09-30',
      endDate: '2025-05-31',
      title: '유플러스 기업메시징',
      description: (
        <>
          <div style={{ marginBottom: '8px' }}>
            {t('uplus_desc', 'history')} 
            <a href="https://msghub.uplus.co.kr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'none', fontWeight: 'bold', marginLeft: '6px', marginRight: '6px' }}>
              U+ 메시지허브
            </a> 
            {t('uplus_desc_2', 'history')}
          </div>
          <ul style={{ paddingLeft: '20px', margin: '12px 0' }}>
            <li>{t('uplus_b1', 'history')}</li>
            <li>{t('uplus_b2', 'history')}</li>
            <li>{t('uplus_b3', 'history')}</li>
          </ul>
          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {Object.entries({
              'Framework': [
                { name: 'Spring Boot', url: 'https://spring.io/projects/spring-boot' },
                { name: 'Spring WebFlux', url: 'https://docs.spring.io/spring-framework/reference/web/webflux.html' }
              ],
              'DB & Cache': [
                { name: 'MongoDB', url: 'https://www.mongodb.com/' },
                { name: 'MySQL', url: 'https://www.mysql.com/' },
                { name: 'Redis', url: 'https://redis.io/' }
              ],
              'Infra & DevOps': [
                { name: 'AWS', url: 'https://aws.amazon.com/' },
                { name: 'Kubernetes', url: 'https://kubernetes.io/' }
              ]
            }).map(([category, items]) => (
              <div key={category} style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--text-main)', width: '110px' }}>{category}</span>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {items.map(tech => (
                    <a 
                      key={tech.name} 
                      href={tech.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ 
                        fontSize: '0.8rem', 
                        padding: '4px 10px', 
                        background: 'rgba(59, 130, 246, 0.2)', 
                        color: 'var(--primary-color)', 
                        borderRadius: '12px', 
                        fontWeight: '500',
                        textDecoration: 'none',
                        transition: 'background 0.2s ease'
                      }}
                      onMouseOver={(e) => e.target.style.background = 'rgba(59, 130, 246, 0.3)'}
                      onMouseOut={(e) => e.target.style.background = 'rgba(59, 130, 246, 0.2)'}
                    >
                      {tech.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      ),
      isFreelance: true
    },
    {
      id: 1.5,
      startDate: '2024-03-25',
      endDate: '2024-09-24',
      title: '(주)멸치',
      description: (
        <>
          <div style={{ marginBottom: '8px' }}>{t('melchi_desc', 'history')}</div>
          <ul style={{ paddingLeft: '20px', margin: '12px 0' }}>
            <li>{t('melchi_b1', 'history')}</li>
            <li>{t('melchi_b2', 'history')}</li>
            <li>{t('melchi_b3', 'history')}</li>
            <li>{t('melchi_b4', 'history')}</li>
          </ul>
          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {Object.entries({
              'Search Engine': [
                { name: 'OpenSearch', url: 'https://opensearch.org/' },
                { name: 'Solr', url: 'https://solr.apache.org/' }
              ],
              'Language': [
                { name: 'Java', url: 'https://dev.java/' },
                { name: 'Python', url: 'https://www.python.org/' }
              ],
              'Database': [
                { name: 'Oracle', url: 'https://www.oracle.com/database/' },
                { name: 'PostgreSQL', url: 'https://www.postgresql.org/' }
              ]
            }).map(([category, items]) => (
              <div key={category} style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--text-main)', width: '110px' }}>{category}</span>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {items.map(tech => (
                    <a 
                      key={tech.name} 
                      href={tech.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ 
                        fontSize: '0.8rem', 
                        padding: '4px 10px', 
                        background: 'rgba(59, 130, 246, 0.2)', 
                        color: 'var(--primary-color)', 
                        borderRadius: '12px', 
                        fontWeight: '500',
                        textDecoration: 'none',
                        transition: 'background 0.2s ease'
                      }}
                      onMouseOver={(e) => e.target.style.background = 'rgba(59, 130, 246, 0.3)'}
                      onMouseOut={(e) => e.target.style.background = 'rgba(59, 130, 246, 0.2)'}
                    >
                      {tech.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      ),
      isFreelance: true
    },
    {
      id: 2,
      startDate: '2016-02-01',
      endDate: '2023-09-01',
      title: '(주)빌트온',
      description: 'Software Engineer'
    },
    {
      id: 2.5,
      startDate: '2014-03-01',
      endDate: '2015-09-01',
      title: 'Gamera Networks',
      description: (
        <>
          <div style={{ marginBottom: '8px' }}>
            {t('gamera_desc', 'history')} <strong>'Game Camera (Gamera)'</strong> {t('gamera_desc_2', 'history')}
          </div>
          <ul style={{ paddingLeft: '20px', margin: '12px 0' }}>
            <li>{t('gamera_b1', 'history')}</li>
            <li>{t('gamera_b2', 'history')}</li>
            <li>{t('gamera_b3', 'history')}</li>
          </ul>
          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {Object.entries({
              'Cloud & OS': [
                { name: 'AWS', url: 'https://aws.amazon.com/' },
                { name: 'Linux', url: 'https://www.linux.org/' }
              ],
              'Language': [
                { name: 'C++', url: 'https://isocpp.org/' },
                { name: 'Python', url: 'https://www.python.org/' }
              ],
              'Database': [
                { name: 'MySQL', url: 'https://www.mysql.com/' }
              ],
              'Frontend': [
                { name: 'Android', url: 'https://developer.android.com/' },
                { name: 'iOS', url: 'https://developer.apple.com/ios/' }
              ]
            }).map(([category, items]) => (
              <div key={category} style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--text-main)', width: '110px' }}>{category}</span>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {items.map(tech => (
                    <a 
                      key={tech.name} 
                      href={tech.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ 
                        fontSize: '0.8rem', 
                        padding: '4px 10px', 
                        background: 'rgba(59, 130, 246, 0.2)', 
                        color: 'var(--primary-color)', 
                        borderRadius: '12px', 
                        fontWeight: '500',
                        textDecoration: 'none',
                        transition: 'background 0.2s ease'
                      }}
                      onMouseOver={(e) => e.target.style.background = 'rgba(59, 130, 246, 0.3)'}
                      onMouseOut={(e) => e.target.style.background = 'rgba(59, 130, 246, 0.2)'}
                    >
                      {tech.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      ),
      isOverseas: true
    },
    {
      id: 3,
      startDate: '2012-12-10',
      endDate: '2014-02-15',
      title: '(주)원더피플',
      description: 'Software Engineer'
    },
    {
      id: 4,
      startDate: '2010-05-01',
      endDate: '2012-10-01',
      title: '(주)한빛소프트',
      description: 'Software Engineer'
    },
    {
      id: 5,
      startDate: '2009-11-01',
      endDate: '2010-05-01',
      title: '(주)조이임팩트',
      description: 'Software Engineer'
    },
    {
      id: 6,
      startDate: '2007-05-21',
      endDate: '2009-07-01',
      title: '(주)지에프존',
      description: 'Software Engineer'
    },
    {
      id: 7,
      startDate: '2005-11-16',
      endDate: '2007-05-18',
      title: 'SK 엠앤서비스(주)',
      description: 'Software Engineer'
    }
  ];

  const calculateDuration = (startStr, endStr) => {
    const startDate = new Date(startStr);
    const endDate = endStr === 'Present' ? new Date() : new Date(endStr);
    
    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    
    if (endDate.getDate() < startDate.getDate()) {
      months--;
    }
    
    if (months < 0) {
      years--;
      months += 12;
    }
    
    let result = '';
    if (years > 0) result += `${years}${t('years', 'history')} `;
    if (months > 0) result += `${months}${t('months', 'history')}`;
    
    return result.trim() || t('under_1_month', 'history');
  };

  const formatDateRange = (startStr, endStr) => {
    const format = (dateStr) => {
      const d = new Date(dateStr);
      return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}`;
    };
    const start = format(startStr);
    const end = endStr === 'Present' ? t('present', 'history') : format(endStr);
    return `${start} ~ ${end}`;
  };

  const getTotalDuration = () => {
    const intervals = historyData.map(item => {
      const start = new Date(item.startDate).getTime();
      const end = item.endDate === 'Present' ? new Date().getTime() : new Date(item.endDate).getTime();
      return [start, end];
    });

    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [];
    if (intervals.length === 0) return '';
    
    let current = [...intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
      if (intervals[i][0] <= current[1]) {
        current[1] = Math.max(current[1], intervals[i][1]);
      } else {
        merged.push(current);
        current = [...intervals[i]];
      }
    }
    merged.push(current);

    let totalMonths = 0;
    merged.forEach(([startTs, endTs]) => {
      const startDate = new Date(startTs);
      const endDate = new Date(endTs);
      
      let years = endDate.getFullYear() - startDate.getFullYear();
      let months = endDate.getMonth() - startDate.getMonth();
      
      if (endDate.getDate() < startDate.getDate()) {
        months--;
      }
      
      totalMonths += (years * 12) + months;
    });

    const finalYears = Math.floor(totalMonths / 12);
    const finalMonths = totalMonths % 12;

    let result = '';
    if (finalYears > 0) result += `${finalYears}${t('years', 'history')} `;
    if (finalMonths > 0) result += `${finalMonths}${t('months', 'history')}`;
    
    return result.trim() || t('under_1_month', 'history');
  };

  const totalCareer = useMemo(() => getTotalDuration(), [t]);

  return (
    <div className="fade-in">
      <h1 className="gradient-text" style={{ marginBottom: '24px', fontSize: '2.5rem', display: 'flex', alignItems: 'baseline', gap: '12px', flexWrap: 'wrap' }}>
        {t('title', 'history')}
        <span style={{ fontSize: '1.2rem', color: 'var(--text-main)', fontWeight: 'normal', background: 'rgba(255,255,255,0.1)', padding: '4px 12px', borderRadius: '20px' }}>
          {t('total', 'history')} {totalCareer}
        </span>
      </h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>
        {t('desc', 'history')}
      </p>

      <div className="timeline">
        {historyData.map((item) => (
          <div key={item.id} className="timeline-item glass-panel" style={{ padding: '24px', marginLeft: '40px' }}>
            <div className="timeline-date">
              {formatDateRange(item.startDate, item.endDate)} 
              <span style={{ color: 'var(--text-main)', fontWeight: 'normal', marginLeft: '8px' }}>
                ({calculateDuration(item.startDate, item.endDate)})
              </span>
            </div>
            <h3 className="timeline-title" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              {item.title}
              {item.isFreelance && (
                <span style={{
                  fontSize: '0.8rem',
                  padding: '4px 10px',
                  backgroundColor: 'var(--primary-color)',
                  color: '#fff',
                  borderRadius: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.5px'
                }}>
                  {t('freelance', 'history')}
                </span>
              )}
              {item.isOverseas && (
                <span style={{
                  fontSize: '0.8rem',
                  padding: '4px 10px',
                  backgroundColor: '#f59e0b',
                  color: '#fff',
                  borderRadius: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.5px',
                  boxShadow: '0 0 8px rgba(245, 158, 11, 0.4)'
                }}>
                  {t('overseas', 'history')}
                </span>
              )}
            </h3>
            <div style={{ color: 'var(--text-muted)' }}>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
