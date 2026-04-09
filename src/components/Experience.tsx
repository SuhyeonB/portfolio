import { Link } from 'react-router-dom'

export default function Experience() {
  return (
    <section id="experience" className="fade-in">
      <div className="section-header">
        <p className="section-label">// experience</p>
        <h2 className="section-title">경험</h2>
      </div>
      <div style={{ marginBottom: '6rem' }}>
        <Link to="/experience-detail" className="exp-card-link">
          <div className="exp-card">
            <div className="exp-header">
              <div>
                <div className="exp-company">스토어스토리</div>
                <div className="exp-role">Frontend Intern (TypeScript)</div>
              </div>
              <span className="exp-period">2025.09 – 2025.10</span>
            </div>
            <p className="exp-desc">
              TypeScript 기반 프론트엔드 인턴십. <br />
              사내 대시보드 및 위치 기반 순위 표시 웹 서비스 개발. <br />
              OpenAI, Bright Data, Recharts, Naver Maps API 활용.
            </p>
          </div>
        </Link>
      </div>
    </section>
  )
}
