const features = [
  {
    number: "01",
    label: "PHONE",
    title: "KEEP IT CLOSE.",
    description:
      "A dedicated vertical chest pocket keeps your phone enclosed, protected, and within reach when you need it.",
  },
  {
    number: "02",
    label: "POWER",
    title: "KEEP MOVING.",
    description:
      "A dedicated power-bank area and controlled cable route are designed around the reality of charging while you're on the road.",
  },
  {
    number: "03",
    label: "COINS",
    title: "KEEP THEM SECURE.",
    description:
      "A dedicated coin pocket keeps loose change contained instead of moving around inside your larger storage.",
  },
  {
    number: "04",
    label: "ID",
    title: "ACCESS WITHOUT DIGGING.",
    description:
      "An accessible ID area puts one of the things riders reach for most within a dedicated part of the jacket.",
  },
];

export default function Solution() {
  return (
    <section className="solution-section" id="solution">
      <div className="solution-header">
        <div>
          <p className="section-eyebrow">THE SOLUTION / 03</p>

          <h2>
            THE JACKET
            <br />
            <span>DOES MORE.</span>
          </h2>
        </div>

        <div className="solution-intro">
          <p className="solution-big-text">
            ONE JACKET.
            <br />
            LESS REACHING.
          </p>

          <p className="solution-description">
            Rider Utility brings the things you already carry closer to where
            you actually need them.
          </p>
        </div>
      </div>

      <div className="solution-features">
        {features.map((feature) => (
          <article className="solution-feature" key={feature.number}>
            <div className="solution-feature-top">
              <span>{feature.number}</span>
              <span>{feature.label}</span>
            </div>

            <div className="solution-feature-content">
              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>

            <div className="solution-feature-line" />
          </article>
        ))}
      </div>

      <div className="solution-bottom">
        <div className="solution-bottom-number">R/01</div>

        <p>
          Designed around the rider's workflow,
          <br />
          not simply another jacket with pockets.
        </p>
      </div>
    </section>
  );
}