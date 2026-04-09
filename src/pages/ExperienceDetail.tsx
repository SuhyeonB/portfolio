import { Link } from 'react-router-dom'

const dashboardImage = new URL('../assets/experience_dashboard.png', import.meta.url).href
const rankingImage = new URL('../assets/experience_rankingmap.png', import.meta.url).href

export default function ExperienceDetail() {
  return (
    <section id="experience-detail">
      <div className="section-header">
        <p className="section-label">// experience detail</p>
        <h2 className="section-title">스토어스토리 프론트엔드 인턴십</h2>
      </div>

      <div className="exp-card" style={{ marginBottom: '1.5rem' }}>
        <div className="exp-header">
          <div>
            <div className="exp-company">스토어스토리</div>
            <div className="exp-role">Frontend Intern</div>
          </div>
          <span className="exp-period">2025.09 – 2025.11 (2개월)</span>
        </div>
        <p className="exp-desc">
          TypeScript 기반 프론트엔드 인턴십으로, 사내 내부 대시보드와 위치 기반 순위 표시 웹 서비스를 개발했습니다.
        </p>
      </div>

      <article className="project-card">
        <div className="project-header">
          <div className="project-name">사내 대시보드 개발</div>
        </div>
        <div className="project-stack">
          {['TypeScript', 'Recharts', 'AWS', 'OpenAI', 'Bright Data'].map((tag) => (
            <span key={tag} className="stack-tag">
              {tag}
            </span>
          ))}
        </div>
        <ul className="project-highlights" style={{ marginTop: '1rem' }}>
          <li>OpenAI 및 Bright Data 사용량 시각화 대시보드 구현</li>
          <li>AWS CPU Utilization 및 RDS(CPU / Connections / FreeStorage) 지표 그래프 구현</li>
          <li>기간 및 시간 필터링 기능으로 데이터 조회 유연성 제공</li>
        </ul>
        <div className="experience-screenshot">
          <img src={dashboardImage} alt="스토어스토리 대시보드" />
        </div>
      </article>

      <article className="project-card">
        <div className="project-header">
          <div className="project-name">위치 기반 순위 표시 웹 서비스 개발</div>
        </div>
        <div className="project-stack">
          {['TypeScript', 'Naver Maps', 'API 연동', '데이터 시각화'].map((tag) => (
            <span key={tag} className="stack-tag">
              {tag}
            </span>
          ))}
        </div>
        <ul className="project-highlights" style={{ marginTop: '1rem' }}>
          <li>지도 기반 주변 가게 순위 표시 UI 구현</li>
          <li>사내 백엔드 API 연동 및 데이터 시각화 처리</li>
          <li>마커 및 순위 정보의 동적 렌더링 구현</li>
        </ul>
        <div className="experience-screenshot">
          <img src={rankingImage} alt="스토어스토리 위치 기반 순위 표시" />
        </div>
      </article>

      <div style={{ marginTop: '2rem' }}>
        <Link to="/" className="btn btn-ghost">
          Back to main
        </Link>
      </div>
    </section>
  )
}
