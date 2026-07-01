const deliverables = [
  {
    title: 'Main company profile',
    fileName: 'House Cart.dc.html',
    description: 'Core presentation file for the House Cart brand.',
  },
  {
    title: 'Arabic social post',
    fileName: 'House Cart Social Posts AR.dc.html',
    description: 'Social campaign content for Arabic audiences.',
  },
  {
    title: 'English social post',
    fileName: 'House Cart Social Posts EN.dc.html',
    description: 'Social campaign content for English audiences.',
  },
  {
    title: 'Company profile backup',
    fileName: 'backup/House Cart Company Profile v1.dc.html',
    description: 'Saved backup of the prior profile version.',
  },
]

function App() {
  return (
    <div className="app-shell">
      <header className="hero">
        <p className="eyebrow">React base</p>
        <h1>House Cart project</h1>
        <p>
          The existing static deliverables now sit inside a React app shell so they are easier to review,
          extend, and deploy.
        </p>
        <div className="hero-actions">
          <a href="/House%20Cart.dc.html" target="_blank" rel="noreferrer">
            Open main profile
          </a>
          <a href="/House%20Cart%20Social%20Posts%20EN.dc.html" target="_blank" rel="noreferrer">
            Open English social post
          </a>
        </div>
      </header>

      <main className="grid">
        <section className="panel">
          <h2>Available deliverables</h2>
          <ul className="deliverables">
            {deliverables.map((item) => (
              <li key={item.fileName}>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
                <a href={`/${item.fileName}`} target="_blank" rel="noreferrer">
                  Open file
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="panel">
          <h2>Project stack</h2>
          <p>
            This setup uses Vite and React for a lightweight development experience while preserving the
            original HTML and image assets from the workspace.
          </p>
          <div className="badge-row">
            <span className="badge">React</span>
            <span className="badge">Vite</span>
            <span className="badge">Static assets</span>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
