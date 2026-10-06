export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <p className="footer-eyebrow">SENLOOK / RIDER UTILITY</p>

          <h2>
            BUILT FOR
            <br />
            <span>THE ROAD.</span>
          </h2>

          <p className="footer-description">
            A rider-focused utility system designed from real experience on
            the road.
          </p>
        </div>

        <div className="footer-nav">
          <p className="footer-eyebrow">EXPLORE</p>

          <a href="#problem">THE PROBLEM</a>
          <a href="#solution">THE SOLUTION</a>
          <a href="#prototype">PROTOTYPE 01</a>
          <a href="#built-with-riders">BUILT WITH RIDERS</a>
          <a href="#founding-riders">FOUNDING RIDERS</a>
        </div>

        <div className="footer-cta">
          <p className="footer-eyebrow">EARLY ACCESS</p>

          <p>
            Want to help shape the next version?
          </p>

          <a href="#founding-riders">
            JOIN FOUNDING RIDERS
            <span>↗</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 SENLOOK</span>

        <span>RIDER UTILITY / PROTOTYPE 01</span>

        <span>PHILIPPINES</span>
      </div>
    </footer>
  );
}