import React, { createContext, useState, useContext } from 'react';

export const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ko');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ko' ? 'en' : 'ko'));
  };

  const t = (key, scope) => {
    const dict = translations[language] || translations['ko'];
    return dict[scope]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  ko: {
    nav: {
      about: '소개',
      history: '이력',
      apps: '앱',
      links: '링크',
      lang_toggle: '🇰🇷 한국어'
    },
    home: {
      hello: "안녕하세요, Alcomist 입니다",
      desc: "클린 코드와 뛰어난 사용자 경험에 집중하여 애플리케이션, 게임, 그리고 오픈소스 프로젝트를 개발합니다.",
      what_i_can_do: "무엇을 할 수 있나요",
      android_title: "안드로이드 앱 개발",
      android_desc: "성능과 실용성에 초점을 맞춘 견고하고 사용자 친화적인 안드로이드 생태계 모바일 애플리케이션을 개발합니다.",
      game_title: "게임 개발",
      game_desc: "Heaps, Defold와 같은 모던 게임 엔진을 사용하여 인터랙티브하고 매력적인 게임을 개발합니다.",
      frontend_title: "프론트엔드 개발",
      frontend_desc: "React, JavaScript 및 최신 CSS 기술을 사용하여 반응형이며 빠르고 아름다운 웹 인터페이스를 구축합니다.",
      opensource_title: "오픈소스 기여",
      opensource_desc: "다양한 오픈소스 게임 엔진과 프로젝트에 적극적으로 참여하고 기여합니다."
    },
    links: {
      title: "링크",
      apps_title: "앱",
      android_apps: "안드로이드 앱",
      current_apps: "현재 서비스 중인 앱",
      kids_clock_genius: "키즈시계박사",
      future_apps: "출시 예정 앱",
      future_app_1: "출시 예정 앱 프로젝트 #1",
      game_projects: "게임 프로젝트 & 엔진",
      game_engines: "게임 엔진",
      tabs: {
        games: "게임",
        engines: "게임 엔진"
      },
      games_category: "오픈소스 게임",
      engines_category: "게임 엔진",
      zelda: "젤다의 전설 - 시간의 오카리나",
      zelda_desc: "시간의 오카리나 디컴파일 프로젝트",
      soh: "Ship of Harkinian",
      soh_desc: "libultraship 기반으로 개발되어 60FPS, 와이드스크린 등 현대적 편의 기능을 제공하는 PC 포트 프로젝트",
      pop: "페르시아의 왕자",
      pop_desc: "Apple II 원본 소스코드",
      abuse: "Abuse",
      abuse_desc: "Abuse (1996) 오픈소스"
    },
    history: {
      title: "이력 및 경험",
      desc: "다양한 도메인과 기술 환경에서 가치를 창출해 온 전문적인 실무 경력입니다.",
      total: "총",
      months: "개월",
      years: "년",
      under_1_month: "1개월 미만",
      present: "현재",
      freelance: "프리랜서",
      overseas: "🌎 해외 스타트업",
      clients: "고객사",
      shiftone_title: "시프트원주식회사",
      uplus_title: "유플러스 기업메시징",
      melchi_title: "(주)멸치",
      bilton_title: "(주)빌트온",
      gamera_title: "Gamera Networks",
      wonder_title: "(주)원더피플",
      hanbit_title: "(주)한빛소프트",
      hanbit_former: "(구 (주)조이임팩트)",
      gfzone_title: "(주)지에프존",
      skmns_title: "SK 엠앤서비스(주)",
      shiftone_desc: "Data Governance를 위한 포탈 및 메타데이터 관리 웹 애플리케이션 구축 및 운영",
      shiftone_b1: "Azure Cloud 환경에서의 인프라 운영 및 Azure Pipeline(K8s, Docker) 구축",
      shiftone_b2: "Spring Boot 및 Python을 활용한 데이터 거버넌스 백엔드 개발 및 유지보수",
      shiftone_b3: "PostgreSQL, MongoDB, Monstache, Redis를 활용한 이기종 데이터베이스 간 실시간 메타데이터 동기화 아키텍처 구현",
      uplus_desc: "다양한 타겟(문자메시지, RCS, 카카오톡 등)으로 메시지를 발송할 수 있는",
      uplus_desc_2: "서비스 구축 및 운영",
      uplus_b1: "MSA(Microservices Architecture) 구조를 채택하여 확장성 있는 백엔드 아키텍처 설계",
      uplus_b2: "Spring Boot 및 Spring WebFlux를 활용한 Reactive(비동기/논블로킹) 기반 고성능 메시지 처리 서비스 개발",
      uplus_b3: "대규모 트래픽 환경에서 안정적인 채널 연동 및 성능 최적화 진행",
      melchi_desc: "성능 저하 해소 및 고도화를 위한 검색엔진 마이그레이션 프로젝트 리딩 및 성공적 전환 완수",
      melchi_b1: "기존 Solr 검색엔진 버전업 및 성능 최적화 작업 수행",
      melchi_b2: "Solr 기반의 기존 검색엔진을 OpenSearch로 완전 전환 (설계 및 구축)",
      melchi_b3: "Java를 활용한 Oracle 및 PostgreSQL 데이터 색인(Indexing) 파이프라인 구축",
      melchi_b4: "Python을 활용한 검색 결괏값 도출 로직 및 API 연동",
      gamera_desc: "유저의 게임 플레이 화면을 녹화(FFmpeg 등 활용)하여 서버에 업로드하고 다른 유저들과 공유하는",
      gamera_desc_2: "앱 프로젝트의 Project Manager(PM) 및 백엔드 개발 수행",
      gamera_b1: "C++ 기반 영상 업로드 및 스트리밍 백엔드 서버 시스템 직접 설계 및 개발",
      gamera_b2: "Android 및 iOS 모바일 클라이언트 애플리케이션 개발 프로젝트 리드 및 매니징 (직접 개발 제외)",
      gamera_b3: "AWS 클라우드 인프라 아키텍처 구성 및 Linux 환경 최적화",
      bilton_desc: "수집엔진에서 수집된 크롤링 데이터를 가공 아키텍처 및 파이프라인 구축 및 개발",
      bilton_b1: "데이터 정제를 위한 Elasticsearch 적재 및 Data Mart 생성 파이프라인 구축",
      bilton_b2: "데이터 정제를 위한 소규모 스크립트 엔진 개발",
      bilton_b3: "TypeScript 및 DHTMLX를 활용한 데이터 정제 툴 개발",
      bilton_b4: "On-Premise 환경(CentOS) 서버 구축 및 MySQL 데이터베이스 운영",
      hanbit_desc: "'스쿼드 플로우(Squad Flow)' 게임 서버 개발",
      hanbit_b1: "C++ 및 IOCP(I/O Completion Port)를 활용한 고성능 게임 서버 네트워크 로직 개발",
      hanbit_b2: "Windows Server 환경 구축 및 Microsoft SQL Server를 이용한 데이터베이스 설계",
      hanbit_b3: "(주)조이임팩트 입사 후, (주)한빛소프트로 자회사 흡수 합병됨에 따라 동일 프로젝트 지속 수행",
      wonder_desc: "동창 주소록 소셜 네트워킹 앱 '멤버(Member)' 서버 개발",
      wonder_b1: "C++ 및 epoll을 활용한 고성능 Linux 기반 백엔드 네트워크 로직 개발",
      wonder_b2: "On-Premise 환경(Linux) 구축 및 MySQL을 이용한 데이터베이스 설계/운영",
      wonder_b3: "출시 후 iOS 앱스토어 및 Android 구글 플레이스토어 전체 앱 순위 1위 달성",
      gfzone_desc: "캐주얼 온라인 게임 '마경기담' 서버 개발",
      gfzone_b1: "C++ 및 IOCP를 활용한 고성능 Windows 기반 게임 서버 네트워크 프레임워크 개발",
      gfzone_b2: "Microsoft SQL Server를 이용한 데이터베이스 연동 및 쿼리 최적화",
      skmns_desc: "Tmap의 전신인 'Nate Drive' 및 '안전운전도우미' 피처폰 앱 개발",
      skmns_b1: "WIPI C 기술 기반 모바일 애플리케이션 개발",
      skmns_b2: "다양한 피처폰 기종 및 WIPI C 버전별 맞춤형 빌드 및 배포 파이프라인 운영"
    }
  },
  en: {
    nav: {
      about: 'About',
      history: 'History',
      apps: 'Apps',
      links: 'Links',
      lang_toggle: '🇺🇸 ENG'
    },
    home: {
      hello: "Hello, I'm Alcomist",
      desc: "I build applications, games, and open-source projects with a focus on clean code and great user experiences.",
      what_i_can_do: "What I Can Do",
      android_title: "Android App Development",
      android_desc: "Creating robust and user-friendly mobile applications for the Android ecosystem, focusing on performance and utility.",
      game_title: "Game Development",
      game_desc: "Developing interactive and engaging games using modern game engines like Heaps and Defold.",
      frontend_title: "Frontend Development",
      frontend_desc: "Building responsive, fast, and beautiful web interfaces using React, JavaScript, and modern CSS.",
      opensource_title: "Open Source Contributions",
      opensource_desc: "Actively participating in and contributing to various open source game engines and projects."
    },
    links: {
      title: "Links",
      apps_title: "Apps",
      android_apps: "Android Apps",
      current_apps: "Current Apps",
      kids_clock_genius: "Kids Clock Genius",
      future_apps: "Future Apps",
      future_app_1: "Upcoming App Project #1",
      game_projects: "Game Projects & Engines",
      game_engines: "Game Engines",
      tabs: {
        games: "Games",
        engines: "Game Engines"
      },
      games_category: "Open Source Games",
      engines_category: "Game Engines",
      zelda: "The Legend of Zelda - Ocarina of Time",
      zelda_desc: "Ocarina of Time Decompilation Project",
      soh: "Ship of Harkinian",
      soh_desc: "An unofficial PC port built on libultraship, featuring 60FPS, widescreen, and modern enhancements.",
      pop: "Prince of Persia",
      pop_desc: "Apple II Original Source Code",
      abuse: "Abuse",
      abuse_desc: "Abuse (1996) Open Source"
    },
    history: {
      title: "History & Experience",
      desc: "A professional track record of delivering value across diverse domains and technology environments.",
      total: "Total",
      months: "mos",
      years: "yrs",
      under_1_month: "Less than 1 mo",
      present: "Present",
      freelance: "Freelance",
      overseas: "🌎 Overseas Startup",
      clients: "Clients",
      shiftone_title: "SHIFTONE Co., Ltd.",
      uplus_title: "U+ Enterprise Messaging",
      melchi_title: "Melchi",
      bilton_title: "BUILTON",
      gamera_title: "Gamera Networks",
      wonder_title: "Wonder People Co., Ltd.",
      hanbit_title: "Hanbitsoft Inc.",
      hanbit_former: "(formerly JoyImpact)",
      gfzone_title: "GFZone",
      skmns_title: "SK m&service",
      shiftone_desc: "Built and operated a data governance portal and metadata management web application.",
      shiftone_b1: "Managed infrastructure in Azure Cloud and configured Azure Pipelines (K8s, Docker).",
      shiftone_b2: "Developed and maintained the Data Governance backend using Spring Boot and Python.",
      shiftone_b3: "Implemented a real-time metadata synchronization architecture across heterogeneous databases using PostgreSQL, MongoDB, Monstache, and Redis.",
      uplus_desc: "Built and operated a message delivery service for various targets (SMS, RCS, KakaoTalk) called",
      uplus_desc_2: "",
      uplus_b1: "Designed a scalable backend architecture utilizing MSA (Microservices Architecture).",
      uplus_b2: "Developed a high-performance reactive (async/non-blocking) messaging service using Spring Boot and Spring WebFlux.",
      uplus_b3: "Optimized performance and ensured stable channel integration in high-traffic environments.",
      melchi_desc: "Led and successfully completed a search engine migration project to resolve performance degradation.",
      melchi_b1: "Performed version upgrades and performance optimizations for the legacy Solr search engine.",
      melchi_b2: "Completely migrated the Solr-based search engine to OpenSearch (Design & Implementation).",
      melchi_b3: "Built a data indexing pipeline for Oracle and PostgreSQL using Java.",
      melchi_b4: "Implemented logic to derive search results and integrated APIs using Python.",
      gamera_desc: "Acted as Project Manager (PM) and Backend Developer for",
      gamera_desc_2: "an app where users record gameplay (using FFmpeg) and share it with others.",
      gamera_b1: "Directly designed and developed the C++ based video upload and streaming backend server system.",
      gamera_b2: "Managed and led the Android and iOS mobile client application development project (excluding direct development).",
      gamera_b3: "Configured AWS cloud infrastructure architecture and optimized the Linux environment.",
      bilton_desc: "Developed a system to process crawling data collected from the collection engine.",
      bilton_b1: "Loaded data into Elasticsearch for data refinement and created a Data Mart.",
      bilton_b2: "Developed a small-scale script engine for data refinement.",
      bilton_b3: "Developed a data refinement tool using TypeScript and DHTMLX.",
      bilton_b4: "Configured an On-Premise server environment (CentOS) and operated a MySQL database.",
      hanbit_desc: "Developed the game server for 'Squad Flow'",
      hanbit_b1: "Developed high-performance game server network logic using C++ and IOCP (I/O Completion Port).",
      hanbit_b2: "Configured a Windows Server environment and designed the database using Microsoft SQL Server.",
      hanbit_b3: "Joined JoyImpact, which was later absorbed by HanbitSoft, continuing the same project through the transition.",
      wonder_desc: "Developed the server for the alumni directory social networking app 'Member'",
      wonder_b1: "Developed high-performance Linux-based backend network logic using C++ and epoll.",
      wonder_b2: "Configured an On-Premise environment (Linux) and designed/operated the database using MySQL.",
      wonder_b3: "Achieved #1 overall ranking on both iOS App Store and Android Google Play Store after launch.",
      gfzone_desc: "Developed the server for the casual online game 'Magyeong Gidam'",
      gfzone_b1: "Developed a high-performance Windows-based game server network framework using C++ and IOCP.",
      gfzone_b2: "Integrated and optimized database queries using Microsoft SQL Server.",
      skmns_desc: "Developed feature phone apps 'Nate Drive' (predecessor to Tmap) and 'Safe Driving Assistant'",
      skmns_b1: "Developed mobile applications based on WIPI C technology.",
      skmns_b2: "Managed customized builds and deployment pipelines for various feature phone models and WIPI C versions."
    }
  }
};
