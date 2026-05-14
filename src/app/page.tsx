export default function Home() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
(function () {
  var params = new URLSearchParams(window.location.search);
  var pMap = new Map([['1','/hello-world/']]);
  var pageMap = new Map([['2','/sample-page/'],['8','/']]);
  var target = pMap.get(params.get('p')) || pageMap.get(params.get('page_id'));
  if (target && window.location.pathname === '/') {
    window.location.replace(target);
  }
})();
          `,
        }}
      />
      <main className="wp-migration yoga">
        <header className="site-header">
          <a className="logo round" href="#top">
            <img
              src="/wp-content/uploads/2023/12/2-a01a62fd-520c-4bfa-b6af-9be16ec31ad1-512x512-e1703469105732.jpg"
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
            <h1>April The Yoga Instructor</h1>
            <p>Learn Yoga with a dedicated and certified instructor.</p>
            <a className="button" href="#classes">
              Take a Class
            </a>
            <h3>We only do the most Yoga type Yoga.</h3>
            <h3>
              Welcome to April Unlimited, where you’ll experience a truly unique and transformative
              yoga journey. Our dedicated and certified yoga instructor will guide you through
              dynamic and mindful classes, ensuring you receive the utmost support and guidance on
              your path to self-discovery.
            </h3>
          </div>
          <img
            src="/wp-content/uploads/2023/12/PXL_20231003_222457165-scaled.jpg"
            alt="April Unlimited yoga"
          />
        </section>
        <section className="section">
          <h3>Classes &amp; Retreats</h3>
          <p>
            Our yoga classes and retreats are designed to guide you on a journey of self-discovery.
            Led by our dedicated and certified yoga instructor, you’ll experience dynamic and
            mindful classes that provide the utmost support and guidance. Whether you’re joining our
            weekly classes or opting for private sessions, we offer a truly unique yoga experience.
            Become a member and gain access to exclusive benefits, including our highly anticipated
            Summer Yoga Retreat. Don’t miss out, book your spot today. Curabitur aliquet dui ac ve.
            Take your first class for free and start your yoga journey with us. Follow us on social
            media for updates and inspiration. Join us at April Unlimited, where yoga becomes an
            unlimited adventure.
          </p>
        </section>
        <section id="classes" className="section">
          <h2>Our Classes</h2>
          <div className="mini-grid">
            <article className="mini-card">
              <h4>All Classes</h4>
              <h3>Weekly Classes</h3>
              <a className="button ghost" href="#contact">
                Join To Group
              </a>
            </article>
            <article className="mini-card">
              <h3>Private Classes</h3>
              <a className="button ghost" href="#contact">
                Join To Group
              </a>
            </article>
            <article className="mini-card">
              <h2>Become A Member</h2>
              <a className="button ghost" href="#classes">
                View Classes &amp; Memberships
              </a>
            </article>
          </div>
        </section>
        <section id="retreat" className="feature">
          <img src="/wp-content/uploads/2023/12/yoga-instrcutor_82.jpg" alt="Yoga retreat" />
          <div>
            <h2>Summer Yoga Retreat</h2>
            <p>
              Embark on a transformative journey this summer with our exclusive Summer Yoga Retreat
              at April Unlimited. Immerse yourself in tailored, mindful sessions led by our
              certified yoga instructors, and experience the ultimate blend of relaxation,
              rejuvenation, and self-discovery. Escape the hustle and bustle of everyday life and
              unwind in a serene and picturesque setting, where you can connect with nature and find
              inner balance. Don’t miss out on this unlimited adventure – book your spot today and
              unlock your unlimited potential. Join us at April Unlimited, where yoga becomes an
              unlimited adventure.
            </p>
            <a className="button ghost" href="#contact">
              Book Your Spot
            </a>
            <blockquote>“Working with April Changed my Life”</blockquote>
            <a className="button ghost" href="#contact">
              Testimonials
            </a>
          </div>
        </section>
        <section className="section two-col">
          <div>
            <h2>Our Equipment</h2>
            <h3>
              Use our brand new Pelaton Bike+ that I got for Christmas to help with your fitness
              journy.
            </h3>
          </div>
          <div className="accordion-list">
            <details className="accordion">
              <summary>Weekly Classes</summary>
              <p>Weekly classes for students who want consistent practice.</p>
            </details>
            <details className="accordion">
              <summary>Private Classes</summary>
              <p>Private sessions shaped around your body, schedule, and comfort level.</p>
            </details>
            <details className="accordion">
              <summary>Summer Yoga Retreat</summary>
              <p>A seasonal retreat experience for restoration and self-discovery.</p>
            </details>
            <details className="accordion">
              <summary>Our Equipment</summary>
              <p>Fitness equipment and support to round out the yoga experience.</p>
            </details>
          </div>
        </section>
        <section className="section">
          <h2>Take Your First Class for Free</h2>
          <p>
            Ready to embark on your yoga journey? Join us at April Unlimited and take your first
            class for free! Our dedicated and certified yoga instructor will guide you through
            dynamic and mindful classes, providing the utmost support and guidance on your path to
            self-discovery. Whether you’re a beginner or experienced, our classes offer unparalleled
            support and guidance. Unlock your unlimited potential and embrace a positive journey
            towards self-discovery and inner balance. Don’t miss out, book your spot today and
            experience the incredible benefits of our yoga classes at April Unlimited. Follow us on
            social media for updates and inspiration. Join us at April Unlimited, where yoga becomes
            an unlimited adventure.
          </p>
          <a className="button" href="#contact">
            Sign Up Today
          </a>
        </section>
        <section id="contact" className="contact">
          <p>Sat-Sun: 8 AM – 2 PM</p>
          <p>An undisclosed number</p>
          <p>A Mountain Somewhere</p>
          <a href="mailto:info@aprilunlimited.com">[email protected]</a>
          <h2>Newsletter</h2>
          <h2>Success!</h2>
          <p>Email</p>
          <a className="button" href="mailto:info@aprilunlimited.com">
            Subscribe
          </a>
          <nav className="social-links" aria-label="Social links">
            <a href="#contact">Facebook</a>
            <a href="#contact">X</a>
            <a href="#contact">Instagram</a>
            <a href="#contact">RSS</a>
          </nav>
        </section>
      </main>
    </>
  )
}
