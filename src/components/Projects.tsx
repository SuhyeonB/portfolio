interface Project {
  name: string
  badge: { label: string; type: 'team' | 'solo' }
  period: string
  desc: React.ReactNode
  highlights?: string[]
  stack: string[]
  githubUrl?: string
}

import type React from 'react'

const projects: Project[] = [
  {
    name: '팔자주름 (EightyAge)',
    badge: { label: '팀 (4인)', type: 'solo' },
    period: '2025.03',
    githubUrl: 'https://github.com/team8-nbc/eightyage',
    desc: (
      <>
        Spring Boot 기반 이커머스 서비스. 선착순 쿠폰 발급 시스템의{' '}
        <strong>동시성 문제</strong>를 해결하는 과정에서 Redis 단순 감산,
        낙관적/비관적 락의 한계를 직접 경험하고 Redisson 분산 락으로 최종 해결했습니다.
      </>
    ),
    highlights: [
      '선착순 쿠폰 발급 — Redis decrement() 레이스 컨디션 → Redisson 분산 락으로 해결, 동시 요청 안전 처리',
      '낙관적 락 충돌 빈번 발생, 비관적 락 데드락 위험 분석 후 Redisson 채택',
      '쿠폰 생성 / 조회 / 사용 설계 및 구현',
    ],
    stack: ['Java', 'Spring Boot', 'JPA', 'Redis', 'Redisson', 'MySQL', 'AWS'],
  },
  {
    name: 'HIP-Reader',
    badge: { label: '팀 (5인)', type: 'team' },
    period: '2025.04 – 2025.05',
    githubUrl: 'https://github.com/HIPReader/HIPReader',
    desc: (
      <>
        알라딘 API 기반 도서 커뮤니티 서비스. ERD 설계 과정에서 책 메타데이터
        구조를 직접 분석하고, <strong>중간 단계 재설계</strong>를 주도해 데이터
        정합성을 높였습니다.
      </>
    ),
    highlights: [
      '도서 한 권에 저자·역자 등 복수 역할이 필요함을 파악, ERD 재설계 주도',
      '외부 API 응답 DB 캐싱 전략 수립 — 알라딘 API 호출 최소화로 응답 속도 개선',
      '겸색 기능 및 읽은 책 통계 구현',
    ],
    stack: ['Java', 'Spring Boot', 'JPA', 'QueryDSL', 'Redis', 'AWS', 'Aladin API'],
  },
  {
    name: 'MyDailyDiary',
    badge: { label: '팀 (4인) · 장려상', type: 'team' },
    period: '2024.07 – 2024.11',
    desc: (
      <>
        이미지·영상·텍스트를 결합한 멀티모달 AI 일기 서비스. 캡스톤 프로젝트로
        장려상을 수상했습니다. 백엔드 팀원 이탈 이후 로그인 / 회원가입 핵심
        기능을 구현했습니다.
      </>
    ),
    stack: ['Java', 'Spring Boot', 'OpenAI API', '멀티모달'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="fade-in">
      <div className="section-header">
        <p className="section-label">// projects</p>
        <h2 className="section-title">프로젝트</h2>
      </div>
      <div className="projects-list">
        {projects.map((project) => {
          const card = (
            <div className="project-card">
              <div className="project-header">
                <div className="project-name">
                  {project.name}
                  <span className={`project-badge badge-${project.badge.type}`}>
                    {project.badge.label}
                  </span>
                </div>
                <span className="project-period">{project.period}</span>
              </div>
              <p className="project-desc">{project.desc}</p>
              {project.highlights && (
                <ul className="project-highlights">
                  {project.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              <div className="project-stack">
                {project.stack.map((tag) => (
                  <span key={tag} className="stack-tag">{tag}</span>
                ))}
              </div>
            </div>
          )

          return project.githubUrl ? (
            <a
              key={project.name}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              {card}
            </a>
          ) : (
            <div key={project.name}>{card}</div>
          )
        })}
      </div>
    </section>
  )
}
