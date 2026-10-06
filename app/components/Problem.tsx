const problems = [
  {
    number: "01",
    title: "PHONE",
    question: "WHERE DO I PUT IT?",
    description:
      "Your phone needs to be close enough to access, but secure enough to stay out of the way while you're riding.",
  },
  {
    number: "02",
    title: "POWER",
    question: "WHERE DOES THE CABLE GO?",
    description:
      "A power bank keeps you moving. The cable becomes another thing to manage.",
  },
  {
    number: "03",
    title: "COINS",
    question: "WHERE DID THOSE GO?",
    description:
      "Small change ends up scattered across pockets, bags, and compartments.",
  },
  {
    number: "04",
    title: "BELT BAG",
    question: "DO I REALLY NEED THIS?",
    description:
      "The belt bag solves storage — but it also becomes another thing to reach around and manage.",
  },
];

export default function Problem() {
  return (
    <section className="problem-section" id="problem">

      {/* HEADER */}

      <div className="problem-header">

        <div>
          <p className="section-eyebrow">
            THE PROBLEM / 02
          </p>

          <h2>
            RIDING IS
            <br />
            <span>ALREADY ENOUGH.</span>
          </h2>
        </div>

        <div className="problem-header-copy">
          <p className="problem-statement-large">
            IT'S NOT JUST
            <br />
            A STORAGE PROBLEM.
          </p>

          <p className="problem-lead">
            It's a workflow problem.
            <br />
            Small interruptions add up.
          </p>
        </div>

      </div>

      {/* PROBLEM CARDS */}

      <div className="problem-grid">

        {problems.map((problem) => (
          <article
            className="problem-card"
            key={problem.number}
          >

            <div className="problem-card-top">
              <span className="problem-number">
                {problem.number}
              </span>

              <span className="problem-label">
                RIDER / EVERYDAY
              </span>
            </div>

            <div className="problem-card-content">

              <p className="problem-title">
                {problem.title}
              </p>

              <h3>
                {problem.question}
              </h3>

              <p className="problem-description">
                {problem.description}
              </p>

            </div>

            <span className="problem-arrow">
              ↗
            </span>

          </article>
        ))}

      </div>

      {/* CLOSING STATEMENT */}

      <div className="problem-closing">

        <span className="problem-closing-line" />

        <p>
          NONE OF THESE PROBLEMS
          <br />
          ARE HUGE ON THEIR OWN.
        </p>

        <p>
          BUT WHEN YOU RIDE
          <br />
          FOR HOURS, THEY ADD UP.
        </p>

      </div>

    </section>
  );
}