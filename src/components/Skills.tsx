const skills = [
  'Java', 'Spring Boot', 'Spring JPA', 'QueryDSL',
  'Redis', 'Redisson', 'MySQL','Docker',
  'RESTful API', 'TypeScript', 'Git / GitHub', 'OpenAI API',
]

export default function Skills() {
  return (
    <section id="skills" className="fade-in">
      <div className="section-header">
        <p className="section-label">// skills</p>
        <h2 className="section-title">기술 스택</h2>
      </div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill} className="skill-chip">
            <span className="skill-dot" />
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}
