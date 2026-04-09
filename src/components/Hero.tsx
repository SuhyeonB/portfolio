const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-eyebrow">Backend Developer</div>
      <h1 className="hero-name">
        봉수현<span className="accent">.</span>
      </h1>
      <h2 className="hero-title">
        Bong Suhyeon<span className="cursor" />
      </h2>
      <p className="hero-desc">
        데이터베이스 실험실에서 공부하며 처음으로 DB와 웹의 세계에 빠져들었습니다. <br />
        몇 시간을 고민하던 문제가 풀리는 순간의 즐거움은, 지금도 저를 움직이는 원동력입니다.<br />
        데이터를 잘 다루고, 그 위에 단단한 서비스를 쌓는 백엔드 개발자가 되고 싶습니다.<br />
        지금도 그 목표를 향해 한 걸음씩 나아가고 있습니다.
      </p>
      <div className="hero-cta">
        <a
          href="https://github.com/SuhyeonB"
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
          GitHub
        </a>
        <a href="#projects" className="btn btn-ghost">
          프로젝트 보기 →
        </a>
      </div>
    </section>
  )
}
