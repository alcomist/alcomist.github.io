import React from 'react';

const History = () => {
  const historyData = [
    {
      id: 1,
      date: '2025 - Present',
      title: 'Independent App & Game Developer',
      description: 'Developing independent Android applications (like Kids Clock Genius) and exploring game development with open-source engines.'
    },
    {
      id: 2,
      date: '2021 - 2024',
      title: 'Senior Software Engineer',
      description: 'Led development of various scalable web and mobile applications, optimizing performance and user experience.'
    },
    {
      id: 3,
      date: '2017 - 2021',
      title: 'Software Developer',
      description: 'Worked on backend and frontend systems, developed core features for internal tools and client-facing products.'
    },
    {
      id: 4,
      date: '2015 - 2017',
      title: 'Junior Developer',
      description: 'Started career focusing on web development, learning modern frameworks and contributing to team projects.'
    }
  ];

  return (
    <div className="fade-in">
      <h1 className="gradient-text" style={{ marginBottom: '24px', fontSize: '2.5rem' }}>History & Experience</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>
        My professional journey, from latest to earliest.
      </p>

      <div className="timeline">
        {historyData.map((item) => (
          <div key={item.id} className="timeline-item glass-panel" style={{ padding: '24px', marginLeft: '40px' }}>
            <div className="timeline-date">{item.date}</div>
            <h3 className="timeline-title">{item.title}</h3>
            <p style={{ color: 'var(--text-muted)' }}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
