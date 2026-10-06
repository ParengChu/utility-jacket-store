import Image from "next/image";

const features = [
  {
    number: "01",
    label: "PHONE ACCESS",
    text: "Dedicated vertical chest storage keeps the phone protected and accessible.",
  },
  {
    number: "02",
    label: "ID ACCESS",
    text: "A dedicated ID position reduces the need to search through larger storage.",
  },
  {
    number: "03",
    label: "COIN STORAGE",
    text: "Loose change gets its own controlled space instead of moving between pockets.",
  },
  {
    number: "04",
    label: "POWER STORAGE",
    text: "The jacket creates a dedicated place for the power bank riders already carry.",
  },
  {
    number: "05",
    label: "CABLE ROUTING",
    text: "A controlled cable path keeps charging hardware organized while moving.",
  },
  {
    number: "06",
    label: "REFLECTIVE SYSTEM",
    text: "Reflective elements are integrated into the jacket architecture for road visibility.",
  },
];

export default function Prototype() {
  return (
    <section className="prototype-section" id="prototype">
      <div className="prototype-header">
        <div>
          <p className="section-eyebrow">PROTOTYPE 01 / 04</p>

          <h2>
            THE FIRST
            <br />
            <span>PHYSICAL VERSION.</span>
          </h2>
        </div>

        <div className="prototype-intro">
          <p className="prototype-intro-label">
            THIS IS WHERE THE IDEA BECAME REAL.
          </p>

          <p>
            Prototype 01 is the first physical interpretation of Rider
            Utility — built around the actual workflow of a delivery rider,
            not around adding more pockets.
          </p>
        </div>
      </div>

      <div className="prototype-visual">
        <div className="prototype-image-wrap">
          <Image
            src="/images/jacket-prototype-01.png"
            alt="Rider Utility Jacket Prototype 01"
            width={1200}
            height={1200}
            className="prototype-image"
          />

          <div className="prototype-image-label">
            <span>RIDER UTILITY</span>
            <span>PROTOTYPE 01</span>
          </div>

          <div className="prototype-image-number">01</div>
        </div>
      </div>

      <div className="prototype-feature-header">
        <div>
          <p className="section-eyebrow">SYSTEM / 01</p>

          <h3>
            DESIGNED AROUND
            <br />
            <span>THE RIDER.</span>
          </h3>
        </div>

        <p className="prototype-feature-copy">
          Every major storage area exists because there is a real task behind
          it. The goal is not maximum storage. The goal is better access.
        </p>
      </div>

      <div className="prototype-features">
        {features.map((feature) => (
          <article className="prototype-feature" key={feature.number}>
            <div className="prototype-feature-top">
              <span>{feature.number}</span>
              <span>{feature.label}</span>
            </div>

            <div className="prototype-feature-body">
              <h4>{feature.label}</h4>
              <p>{feature.text}</p>
            </div>

            <span className="prototype-feature-mark">+</span>
          </article>
        ))}
      </div>

      <div className="prototype-statement">
        <span className="prototype-statement-line" />

        <p>
          NOT A DELIVERY UNIFORM.
          <br />
          NOT ANOTHER TACTICAL JACKET.
        </p>

        <strong>
          A RIDER UTILITY SYSTEM.
        </strong>
      </div>
    </section>
  );
}