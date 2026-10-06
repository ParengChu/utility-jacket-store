import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <header className="hero-nav">
        <a href="/" className="brand">
          <Image
            src="/logo/SENLOOK Geometric Logo with Pink Accent.png"
            alt="Senlook"
            width={140}
            height={40}
            priority
          />
        </a>

        <div className="hero-nav-right">
          <span className="prototype-label">PROTOTYPE 01</span>

          <a href="#founding-riders" className="nav-cta">
            JOIN FOUNDING RIDERS
          </a>
        </div>
      </header>

      <div className="hero-content">
        <div className="hero-copy">
          <p className="eyebrow">RIDER UTILITY / 01</p>

          <h1>
            THE RIDER
            <br />
            <span>UTILITY JACKET</span>
          </h1>

          <p className="hero-description">
            Designed by a delivery rider.
            <br />
            Built around the problems riders
            <br />
            deal with every day.
          </p>

          <a href="#founding-riders" className="hero-button">
            <span>JOIN FOUNDING RIDERS</span>
            <span className="arrow">↗</span>
          </a>
        </div>

        <div className="hero-product">
          <div className="product-number">01</div>

          <Image
            src="/images/jacket-front.png"
            alt="Rider Utility Jacket Prototype 01"
            width={900}
            height={1100}
            priority
            className="hero-jacket"
          />

          <div className="product-caption">
            <span>RIDER UTILITY</span>
            <span>PROTOTYPE 01</span>
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <span>BUILT FOR THE ROAD</span>

        <span className="scroll-indicator">
          SCROLL
          <span>↓</span>
        </span>

        <span>PHILIPPINES / 2026</span>
      </div>
    </section>
  );
}