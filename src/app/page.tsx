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
          <article className="mini-card">
            <h3>All Classes</h3>
            <p>
              Explore approachable yoga classes designed for movement, breath, balance, and steady
              progress.
            </p>
          </article>
          <article className="mini-card">
            <h3>Become A Member</h3>
            <p>
              Build a consistent practice with support, encouragement, and a welcoming class
              community.
            </p>
          </article>
          <article className="mini-card">
            <h3>Take Your First Class for Free</h3>
            <p>
              Try a first class and see whether April Unlimited is the right fit for your wellness
              goals.
            </p>
          </article>
          <article className="mini-card">
            <h3>Newsletter</h3>
            <p>
              Get class updates, retreat details, and fitness notes delivered when new opportunities
              open.
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
            Use our brand new Peloton Bike+ that I got for Christmas to help with your fitness
            journey.
          </p>
        </div>
        <div className="accordion-list">
          <details className="accordion">
            <summary>Weekly Classes</summary>
            <p>
              Regular classes for students who want consistent movement, breathwork, and practical
              yoga instruction.
            </p>
          </details>
          <details className="accordion">
            <summary>Private Classes</summary>
            <p>
              One-on-one yoga sessions shaped around your body, schedule, goals, and comfort level.
            </p>
          </details>
          <details className="accordion">
            <summary>Summer Yoga Retreat</summary>
            <p>
              A seasonal retreat experience for deeper practice, restoration, and time away from
              daily pressure.
            </p>
          </details>
          <details className="accordion">
            <summary>Our Equipment</summary>
            <p>
              Fitness equipment and practical support to round out the yoga and wellness experience.
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
