export default function Education() {
  return (
    <section id="education" className="fade-in edu-section">
      <div className="section-header">
        <p className="section-label">// education</p>
        <h2 className="section-title">학력</h2>
      </div>
      <div className="edu-card">
        <div>
          <div className="edu-header-row">
            <div className="edu-school">대진대학교</div>
            <span className="edu-period">2020 – 2025 (졸업)</span>
          </div>
          <div className="edu-major edu-major--highlight">컴퓨터공학과</div>
          <div className="edu-details">
            <span>학점: 4.05 / 4.5</span>
            <span>데이터베이스랩실 (학부 연구생)</span>
          </div>
          <div className="edu-courses">
            주요 이수과목: 데이터베이스 | 운영체제 | 분산·객체시스템설계 | 컴퓨터네트워크및보안 | 인공지능
          </div>
        </div>
      </div>
    </section>
  )
}
