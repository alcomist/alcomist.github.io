import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  const { appId } = useParams();

  const policies = {
    'kids_clock_genius': {
      title: 'Privacy Policy (키즈 시계 박사)',
      content: (
        <>
          <p><strong>1. 개인정보 처리방침</strong></p>
          <p>[키즈시계박사]은(는) 이용자의 개인정보를 수집하거나 저장하지 않습니다.</p>

          <p><strong>2. 수집하는 개인정보 항목</strong></p>
          <p>본 앱은 사용자의 어떠한 개인정보도 수집하지 않습니다.</p>

          <p><strong>3. 개인정보의 수집 및 이용 목적</strong></p>
          <p>본 앱은 개인정보를 수집하거나 이용하지 않으므로, 목적 또한 존재하지 않습니다.</p>

          <p><strong>4. 개인정보의 보유 및 이용 기간</strong></p>
          <p>개인정보를 수집하지 않으므로, 보유 및 이용 기간에 해당사항이 없습니다.</p>

          <p><strong>5. 개인정보의 제3자 제공 및 처리 위탁</strong></p>
          <p>본 앱은 개인정보를 제3자에게 제공하거나 외부에 위탁하지 않습니다.</p>

          <p><strong>6. 기타</strong></p>
          <p>향후 앱 기능이 변경되어 개인정보를 수집하게 될 경우, 본 개인정보 처리방침은 이에 맞춰 업데이트될 예정입니다.</p>

          <p><strong>7. 개인정보 보호 책임자</strong></p>
          <p>푸리에 소프트웨어는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
          
          <p>정보주체는 푸리에 소프트웨어의 서비스(또는 사업)를 이용하시면서 발생한 모든 개인정보보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 개인정보보호 담당부서로 문의할 수 있습니다. 푸리에 소프트웨어는 정보주체의 문의에 대해 지체없이 답변 및 처리해 드릴 것입니다.</p>

          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '8px', marginTop: '16px' }}>
            <p style={{ margin: 0 }}><strong>개인정보 보호책임자</strong></p>
            <p style={{ margin: '4px 0' }}>성명 : 정진현</p>
            <p style={{ margin: '4px 0' }}>직위 : 대표</p>
            <p style={{ margin: '4px 0' }}>연락처 : jungjinhyun@gmail.com</p>
          </div>

          <p style={{ marginTop: '24px', fontStyle: 'italic', color: 'var(--text-muted)' }}>본 방침은 2025년 5월 17일부터 시행됩니다.</p>
        </>
      )
    }
  };

  const policy = policies[appId];

  if (!policy) {
    return (
      <div className="privacy-container glass-panel fade-in" style={{ textAlign: 'center', padding: '60px 20px' }}>
        <h2>Privacy Policy Not Found</h2>
        <p style={{ color: 'var(--text-muted)', marginTop: '16px', marginBottom: '24px' }}>The privacy policy for the app "{appId}" could not be found.</p>
        <Link to="/links" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>Return to Apps</Link>
      </div>
    );
  }

  return (
    <div className="privacy-container glass-panel fade-in">
      <Link to="/links" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '24px' }}>
        <ArrowLeft size={16} /> Back to Apps
      </Link>
      <h1 className="gradient-text">{policy.title}</h1>
      <div style={{ marginTop: '32px' }}>
        {policy.content}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
