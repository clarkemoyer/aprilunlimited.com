export default function Home() {
  return (
    <main className="wp-migration yoga">
      <header className="site-header">
        <a className="logo round" href="#top">
          <img
            src="https://aprilunlimited.com/wp-content/uploads/2023/12/2-a01a62fd-520c-4bfa-b6af-9be16ec31ad1-512x512-e1703469105732.jpg"
            alt="April Unlimited"
          />
        </a>
        <nav>
          <a href="#classes">Classes</a>
          <a href="#retreat">Retreats</a>
          <a href="#contact">Contact</a>
        </nav>
        <button aria-label="Open menu">☰</button>
      </header>
      <section id="top" className="hero split">
        <div className="hero-copy">
          <p className="eyebrow">Welcome to April Unlimited</p>
          <h1>April The Yoga Instructor</h1>
          <h3>We only do the most Yoga type Yoga.</h3>
          <p>
            Welcome to April Unlimited, where you’ll experience a truly unique and transformative
            yoga journey.
          </p>
          <a className="button" href="#classes">
            Take Your First Class for Free
          </a>
        </div>
        <img
          src="https://aprilunlimited.com/wp-content/uploads/2023/12/PXL_20231003_222457165-scaled.jpg"
          alt="April Unlimited yoga"
        />
      </section>
      <section id="classes" className="section">
        <h2>Our Classes</h2>
        <div className="mini-grid">
          {' '}
          <article className="mini-card">
            <h3>All Classes</h3>
            <p>
              All Classes is preserved as a visible content area from the original WordPress
              homepage.
            </p>
          </article>
          <article className="mini-card">
            <h3>Become A Member</h3>
            <p>
              Become A Member is preserved as a visible content area from the original WordPress
              homepage.
            </p>
          </article>
          <article className="mini-card">
            <h3>Take Your First Class for Free</h3>
            <p>
              Take Your First Class for Free is preserved as a visible content area from the
              original WordPress homepage.
            </p>
          </article>
          <article className="mini-card">
            <h3>Newsletter</h3>
            <p>
              Newsletter is preserved as a visible content area from the original WordPress
              homepage.
            </p>
          </article>
        </div>
      </section>
      <section id="retreat" className="feature">
        <img
          src="https://aprilunlimited.com/wp-content/uploads/2023/12/yoga-instrcutor_82.jpg"
          alt="Yoga retreat"
        />
        <div>
          <h2>Summer Yoga Retreat</h2>
          <p>
            Classes and retreats designed to help you reset, breathe, and build a steady wellness
            practice.
          </p>
          <blockquote>“Working with April Changed my Life”</blockquote>
        </div>
      </section>
      <section className="section two-col">
        <div>
          <h2>Our Equipment</h2>
          <p>
            Use our brand new Pelaton Bike+ that I got for Christmas to help with your fitness
            journy.
          </p>
        </div>
        <div className="accordion-list">
          {' '}
          <details className="accordion">
            <summary>Weekly Classes</summary>
            <p>
              Weekly Classes support for Aprilunlimited clients, migrated from the live WordPress
              content into a static Next.js experience.
            </p>
          </details>
          <details className="accordion">
            <summary>Private Classes</summary>
            <p>
              Private Classes support for Aprilunlimited clients, migrated from the live WordPress
              content into a static Next.js experience.
            </p>
          </details>
          <details className="accordion">
            <summary>Summer Yoga Retreat</summary>
            <p>
              Summer Yoga Retreat support for Aprilunlimited clients, migrated from the live
              WordPress content into a static Next.js experience.
            </p>
          </details>
          <details className="accordion">
            <summary>Our Equipment</summary>
            <p>
              Our Equipment support for Aprilunlimited clients, migrated from the live WordPress
              content into a static Next.js experience.
            </p>
          </details>
        </div>
      </section>
      <section id="contact" className="contact">
        <h2>Newsletter</h2>
        <p>Follow us for classes, retreats, and opening hours.</p>
        <a className="button" href="mailto:info@aprilunlimited.com">
          Subscribe
        </a>
      </section>
    </main>
  )
}
