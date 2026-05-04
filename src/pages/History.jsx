import React, { useMemo } from 'react';
import { useLanguage } from '../LanguageContext';

const History = () => {
  const { t } = useLanguage();

  const historyData = [
    {
      id: 1,
      startDate: '2025-06-02',
      endDate: 'Present',
      title: (
        <a href="https://shiftone.kr/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }} className="hover-underline">
          {t('shiftone_title', 'history')}
        </a>
      ),
      clients: [
        { name: 'SK Innovation', url: 'https://www.skinnovation.com/' },
        { name: 'SK AX', url: 'https://www.skax.co.kr/' }
      ],
      description: (
        <>
          <div style={{ marginBottom: '8px' }}>
            {t('shiftone_desc', 'history')}
          </div>
          <ul style={{ paddingLeft: '20px', margin: '12px 0' }}>
            <li>{t('shiftone_b1', 'history')}</li>
            <li>{t('shiftone_b2', 'history')}</li>
            <li>{t('shiftone_b3', 'history')}</li>
          </ul>
          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {Object.entries({
              'Framework & Language': [
                { name: 'Spring Boot', url: 'https://spring.io/projects/spring-boot' },
                { name: 'Python', url: 'https://www.python.org/' }
              ],
              'Database & Sync': [
                { name: 'PostgreSQL', url: 'https://www.postgresql.org/' },
                { name: 'MongoDB', url: 'https://www.mongodb.com/' },
                { name: 'Monstache', url: 'https://rwynn.github.io/monstache-site/' },
                { name: 'Redis', url: 'https://redis.io/' }
              ],
              'Cloud & DevOps': [
                { name: 'Azure Cloud', url: 'https://azure.microsoft.com/' },
                { name: 'Linux', url: 'https://www.linux.org/' },
                { name: 'Azure Pipelines', url: 'https://azure.microsoft.com/en-us/products/devops/pipelines' },
                { name: 'Kubernetes', url: 'https://kubernetes.io/' },
                { name: 'Docker', url: 'https://www.docker.com/' }
              ]
            }).map(([category, items]) => (
              <div key={category} style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--text-main)', width: '130px' }}>{category}</span>
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
      )
    },
    {
      id: 1.25,
      startDate: '2024-09-30',
      endDate: '2025-05-31',
      title: t('uplus_title', 'history'),
      clients: [
        { name: 'LG U+', url: 'https://www.lguplus.com/' },
        { name: 'mediaLog', url: 'https://www.medialog.co.kr/' }
      ],
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
      title: t('melchi_title', 'history'),
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
      title: t('bilton_title', 'history'),
      description: (
        <>
          <div style={{ marginBottom: '8px' }}>
            {t('bilton_desc', 'history')}
          </div>
          <ul style={{ paddingLeft: '20px', margin: '12px 0' }}>
            <li>{t('bilton_b1', 'history')}</li>
            <li>{t('bilton_b2', 'history')}</li>
            <li>{t('bilton_b3', 'history')}</li>
            <li>{t('bilton_b4', 'history')}</li>
            <li>{t('bilton_b5', 'history')}</li>
          </ul>
          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {Object.entries({
              'Language & Tools': [
                { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
                { name: 'DHTMLX', url: 'https://dhtmlx.com/ko/' }
              ],
              'Data & Search': [
                { name: 'Elasticsearch', url: 'https://www.elastic.co/' },
                { name: 'MySQL', url: 'https://www.mysql.com/' }
              ],
              'Infrastructure': [
                { name: 'CentOS (On-Premise)', url: 'https://www.centos.org/' }
              ]
            }).map(([category, items]) => (
              <div key={category} style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--text-main)', width: '120px' }}>{category}</span>
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
      )
    },
    {
      id: 2.5,
      startDate: '2014-03-01',
      endDate: '2015-09-01',
      title: t('gamera_title', 'history'),
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
      title: (
        <a href="https://www.wonderpeople.co.kr/#home" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }} className="hover-underline">
          {t('wonder_title', 'history')}
        </a>
      ),
      description: (
        <>
          <div style={{ marginBottom: '8px' }}>
            {t('wonder_desc', 'history')}
            <a href="https://www.newspost.kr/news/articleView.html?idxno=18215" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'none', fontWeight: 'bold', marginLeft: '6px' }}>
              (앱 관련 기사)
            </a>
          </div>
          <ul style={{ paddingLeft: '20px', margin: '12px 0' }}>
            <li>{t('wonder_b1', 'history')}</li>
            <li>{t('wonder_b2', 'history')}</li>
            <li>
              <div style={{ marginBottom: '8px' }}>{t('wonder_b3', 'history')}</div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '12px', overflowX: 'auto', paddingBottom: '8px' }}>
                <img src="/member_ios_rank.png" alt="iOS App Store 1위" style={{ height: '300px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }} />
                <img src="/member_aos_rank.png" alt="Google Play Store 1위" style={{ height: '300px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }} />
              </div>
            </li>
          </ul>
          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {Object.entries({
              'Language & API': [
                { name: 'C++', url: 'https://isocpp.org/' },
                { name: 'epoll', url: 'https://man7.org/linux/man-pages/man7/epoll.7.html' }
              ],
              'Database': [
                { name: 'MySQL', url: 'https://www.mysql.com/' }
              ],
              'Infrastructure': [
                { name: 'Linux (On-Premise)', url: 'https://www.linux.org/' }
              ]
            }).map(([category, items]) => (
              <div key={category} style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--text-main)', width: '130px' }}>{category}</span>
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
      )
    },
    {
      id: 4,
      startDate: '2009-11-01',
      endDate: '2012-10-01',
      title: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <a href="https://www.hanbitsoft.co.kr/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }} className="hover-underline">
            {t('hanbit_title', 'history')}
          </a>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{t('hanbit_former', 'history')}</span>
        </div>
      ),
      description: (
        <>
          <div style={{ marginBottom: '8px' }}>
            {t('hanbit_desc', 'history')}
            <a href="https://www.inven.co.kr/webzine/news/?news=45911" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'none', fontWeight: 'bold', marginLeft: '6px' }}>
              (게임소개)
            </a>
          </div>
          <ul style={{ paddingLeft: '20px', margin: '12px 0' }}>
            <li>{t('hanbit_b1', 'history')}</li>
            <li>{t('hanbit_b2', 'history')}</li>
            <li>{t('hanbit_b3', 'history')}</li>
          </ul>
          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {Object.entries({
              'Language & API': [
                { name: 'C++', url: 'https://isocpp.org/' },
                { name: 'IOCP', url: 'https://learn.microsoft.com/en-us/windows/win32/fileio/i-o-completion-ports' }
              ],
              'Database': [
                { name: 'Microsoft SQL Server', url: 'https://www.microsoft.com/sql-server' }
              ],
              'Infrastructure': [
                { name: 'Windows Server', url: 'https://www.microsoft.com/windows-server' }
              ]
            }).map(([category, items]) => (
              <div key={category} style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--text-main)', width: '130px' }}>{category}</span>
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
      )
    },
    {
      id: 6,
      startDate: '2007-05-21',
      endDate: '2009-07-01',
      title: t('gfzone_title', 'history'),
      description: (
        <>
          <div style={{ marginBottom: '8px' }}>
            {t('gfzone_desc', 'history')}
            <a href="https://www.gamemeca.com/view.php?gid=122083" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'none', fontWeight: 'bold', marginLeft: '6px' }}>
              (게임소개)
            </a>
          </div>
          <ul style={{ paddingLeft: '20px', margin: '12px 0' }}>
            <li>{t('gfzone_b1', 'history')}</li>
            <li>{t('gfzone_b2', 'history')}</li>
          </ul>
          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {Object.entries({
              'Language & API': [
                { name: 'C++', url: 'https://isocpp.org/' },
                { name: 'IOCP', url: 'https://learn.microsoft.com/en-us/windows/win32/fileio/i-o-completion-ports' }
              ],
              'Database': [
                { name: 'Microsoft SQL Server', url: 'https://www.microsoft.com/sql-server' }
              ],
              'Infrastructure': [
                { name: 'Windows Server', url: 'https://www.microsoft.com/windows-server' }
              ]
            }).map(([category, items]) => (
              <div key={category} style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--text-main)', width: '130px' }}>{category}</span>
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
      )
    },
    {
      id: 7,
      startDate: '2005-11-16',
      endDate: '2007-05-18',
      title: (
        <a href="https://www.skmnservice.com/pc_new/html/main.skmns" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }} className="hover-underline">
          {t('skmns_title', 'history')}
        </a>
      ),
      clients: [
        { name: 'SK Telecom', url: 'https://www.sktelecom.com/' }
      ],
      description: (
        <>
          <div style={{ marginBottom: '8px' }}>
            {t('skmns_desc', 'history')}
          </div>
          <ul style={{ paddingLeft: '20px', margin: '12px 0' }}>
            <li>{t('skmns_b1', 'history')}</li>
            <li>{t('skmns_b2', 'history')}</li>
          </ul>
          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {Object.entries({
              'Language & Platform': [
                { name: 'C', url: 'https://en.wikipedia.org/wiki/C_(programming_language)' },
                { name: 'WIPI', url: 'https://ko.wikipedia.org/wiki/%EC%9C%84%ED%94%BC' }
              ],
              'Build & Deploy': [
                { name: 'Feature Phone', url: 'https://en.wikipedia.org/wiki/Feature_phone' }
              ]
            }).map(([category, items]) => (
              <div key={category} style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--text-main)', width: '150px' }}>{category}</span>
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
      )
    }
  ];

  const calculateDuration = (startStr, endStr) => {
    const startDate = new Date(startStr);
    const endDate = endStr === 'Present' ? new Date() : new Date(endStr);
    
    // 종료일을 포함하여 계산하기 위해 1일을 더함 (예: 24일까지면 25일 0시로 처리하여 꽉 찬 개월수 계산)
    endDate.setDate(endDate.getDate() + 1);
    
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
      const endObj = item.endDate === 'Present' ? new Date() : new Date(item.endDate);
      
      // 종료일을 포함하여 계산하기 위해 1일을 더함
      endObj.setDate(endObj.getDate() + 1);
      
      return [start, endObj.getTime()];
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
            <h3 className="timeline-title" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', width: '100%' }}>
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
              {item.clients && (
                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-muted)', flexWrap: 'wrap' }}>
                  <span style={{ fontWeight: '500' }}>{t('clients', 'history')}:</span>
                  {item.clients.map((client, idx) => (
                    <React.Fragment key={client.name}>
                      <a href={client.url} target="_blank" rel="noopener noreferrer" className="hover-underline" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: '500' }}>
                        {client.name}
                      </a>
                      {idx < item.clients.length - 1 && <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>|</span>}
                    </React.Fragment>
                  ))}
                </div>
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
