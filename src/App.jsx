const pitchItems = [
  {
    title: 'House Cart brand deck',
    fileName: 'House Cart.dc.html',
    description: 'A polished corporate profile to present your brand story and market position.',
  },
  {
    title: 'Arabic social campaign',
    fileName: 'House Cart Social Posts AR.dc.html',
    description: 'Culturally tuned social media content for Arabic-speaking audiences.',
  },
  {
    title: 'English social campaign',
    fileName: 'House Cart Social Posts EN.dc.html',
    description: 'Targeted social media content for English-speaking customers.',
  },
]

function App() {
  return (
    <div className="app-shell pitch-shell">
      <header className="hero pitch-hero">
        <p className="eyebrow">Client pitch</p>
        <h1>House Cart</h1>
        <p className="hero-copy">
          A compelling brand proposal designed to present House Cart as a memorable, premium shopping
          experience for audiences in both Arabic and English markets.
        </p>
        <div className="hero-actions">
          <a href="/House%20Cart.dc.html" target="_blank" rel="noreferrer">
            View brand deck
          </a>
          <a href="/House%20Cart%20Social%20Posts%20EN.dc.html" target="_blank" rel="noreferrer">
            View social samples
          </a>
        </div>
      </header>

      <main className="grid pitch-grid">
        <section className="panel pitch-panel pitch-overview">
          <h2>Executive summary</h2>
          <p>
            House Cart is positioned to deliver a modern, trust-building presentation experience across
            corporate and social channels. This proposal highlights the finished assets already in the
            project and the value they create for business development, digital marketing, and client
            engagement.
          </p>
          <div className="pitch-highlights">
            <div>
              <strong>Audience impact</strong>
              <p>Clear storytelling that connects with shoppers and decision-makers.</p>
            </div>
            <div>
              <strong>Brand consistency</strong>
              <p>Professional presentation backed by localized Arabic and English content.</p>
            </div>
            <div>
              <strong>Fast delivery</strong>
              <p>Assets are already available and ready to share with stakeholders immediately.</p>
            </div>
          </div>
        </section>

        <section className="panel pitch-panel pitch-deliverables">
          <h2>Included deliverables</h2>
          <ul className="deliverables">
            {pitchItems.map((item) => (
              <li key={item.fileName}>
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </div>
                <a href={`/${item.fileName}`} target="_blank" rel="noreferrer">
                  Open
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <section className="panel pitch-panel pitch-cta">
        <h2>Next step</h2>
        <p>
          Review the main profile and social samples, then we can refine the messaging, update the visuals,
          and prepare a final pitch package for your target audience.
        </p>
        <div className="cta-row">
          <a className="secondary" href="/House%20Cart.dc.html" target="_blank" rel="noreferrer">
            Review profile
          </a>
          <a href="/House%20Cart%20Social%20Posts%20AR.dc.html" target="_blank" rel="noreferrer">
            Review Arabic content
          </a>
        </div>
      </section>
    </div>
  )
}

export default App
