import React, { useMemo } from 'react';

const History = () => {
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
      description: '개발/운영',
      isFreelance: true
    },
    {
      id: 1.5,
      startDate: '2024-03-25',
      endDate: '2024-09-24',
      title: '(주)멸치',
      description: (
        <>
          <div style={{ marginBottom: '8px' }}>성능 저하 해소 및 고도화를 위한 검색엔진 마이그레이션 프로젝트 리딩 및 성공적 전환 완수</div>
          <ul style={{ paddingLeft: '20px', margin: '12px 0' }}>
            <li>기존 Solr 검색엔진 버전업 및 성능 최적화 작업 수행</li>
            <li>Solr 기반의 기존 검색엔진을 OpenSearch로 완전 전환 (설계 및 구축)</li>
            <li>Java를 활용한 Oracle 및 PostgreSQL 데이터 색인(Indexing) 파이프라인 구축</li>
            <li>Python을 활용한 검색 결괏값 도출 로직 및 API 연동</li>
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
            유저의 게임 플레이 화면을 녹화(FFmpeg 등 활용)하여 서버에 업로드하고 다른 유저들과 공유하는 <strong>'Game Camera (Gamera)'</strong> 앱 프로젝트의 Project Manager(PM) 및 백엔드 개발 수행
          </div>
          <ul style={{ paddingLeft: '20px', margin: '12px 0' }}>
            <li><strong>Backend:</strong> C++ 기반 영상 업로드 및 스트리밍 백엔드 서버 시스템 직접 설계 및 개발</li>
            <li><strong>Frontend:</strong> Android 및 iOS 모바일 클라이언트 애플리케이션 개발 프로젝트 리드 및 매니징 (직접 개발 제외)</li>
            <li>AWS 클라우드 인프라 아키텍처 구성 및 Linux 환경 최적화</li>
          </ul>
          <div style={{ marginTop: '12px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {['AWS', 'Python', 'MySQL', 'Linux', 'C++', 'Android', 'iOS'].map(tech => (
              <span key={tech} style={{ fontSize: '0.8rem', padding: '4px 10px', background: 'rgba(59, 130, 246, 0.2)', color: 'var(--primary-color)', borderRadius: '12px', fontWeight: '500' }}>
                {tech}
              </span>
            ))}
          </div>
        </>
      )
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
    if (years > 0) result += `${years}년 `;
    if (months > 0) result += `${months}개월`;
    
    return result.trim() || '1개월 미만';
  };

  const formatDateRange = (startStr, endStr) => {
    const format = (dateStr) => {
      const d = new Date(dateStr);
      return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}`;
    };
    const start = format(startStr);
    const end = endStr === 'Present' ? '현재' : format(endStr);
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
    if (finalYears > 0) result += `${finalYears}년 `;
    if (finalMonths > 0) result += `${finalMonths}개월`;
    
    return result.trim() || '1개월 미만';
  };

  const totalCareer = useMemo(() => getTotalDuration(), []);

  return (
    <div className="fade-in">
      <h1 className="gradient-text" style={{ marginBottom: '24px', fontSize: '2.5rem', display: 'flex', alignItems: 'baseline', gap: '12px' }}>
        History & Experience
        <span style={{ fontSize: '1.2rem', color: 'var(--text-main)', fontWeight: 'normal', background: 'rgba(255,255,255,0.1)', padding: '4px 12px', borderRadius: '20px' }}>
          총 {totalCareer}
        </span>
      </h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>
        My professional journey, from latest to earliest.
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
            <h3 className="timeline-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
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
                  프리랜서
                </span>
              )}
            </h3>
            <p style={{ color: 'var(--text-muted)' }}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
