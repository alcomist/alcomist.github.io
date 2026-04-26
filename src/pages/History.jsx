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
      description: 'Software Engineer',
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
