"use client";

import { useState } from "react";

export default function FoundingRiders() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="founding-section" id="founding-riders">
      <div className="founding-background-number">01</div>

      <div className="founding-header">
        <p className="section-eyebrow">EARLY ACCESS / 06</p>

        <h2>
          BE ONE OF THE
          <br />
          <span>FOUNDING RIDERS.</span>
        </h2>

        <p className="founding-intro">
          Rider Utility is still being developed. The first people who join
          will help shape what this jacket becomes.
        </p>
      </div>

      <div className="founding-content">
        <div className="founding-message">
          <p className="founding-label">WHY JOIN EARLY?</p>

          <div className="founding-reasons">
            <div>
              <span>01</span>
              <p>Get first access when the jacket is ready.</p>
            </div>

            <div>
              <span>02</span>
              <p>Help influence features and improvements.</p>
            </div>

            <div>
              <span>03</span>
              <p>Be part of the first group of Rider Utility users.</p>
            </div>
          </div>

          <p className="founding-note">
            No payment required.
            <br />
            No commitment.
            <br />
            Just tell us you're interested.
          </p>
        </div>

        <form
          className="founding-form"
          action="https://formsubmit.co/fusenchua2@gmail.com"
          method="POST"
          onSubmit={() => setSubmitted(true)}
        >
          {/* FormSubmit settings */}
          <input
            type="hidden"
            name="_subject"
            value="New Rider Utility Founding Rider"
          />

          <input
            type="hidden"
            name="_template"
            value="table"
          />

          <input
            type="hidden"
            name="_captcha"
            value="true"
          />

          {/* Honeypot spam protection */}
          <input
            type="text"
            name="_honey"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="form-heading">
            <span>FOUNDING RIDER / 001</span>
            <span>INTEREST FORM</span>
          </div>

          <label>
            <span>YOUR NAME</span>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </label>

          <label>
            <span>CONTACT NUMBER</span>

            <input
              type="tel"
              name="phone"
              placeholder="09XX XXX XXXX"
              required
            />
          </label>

          <label>
            <span>EMAIL ADDRESS</span>

            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </label>

          <label>
            <span>WHAT DO YOU RIDE FOR?</span>

            <select
              name="platform"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select one
              </option>

              <option value="food-delivery">
                Food delivery
              </option>

              <option value="parcel-delivery">
                Parcel delivery
              </option>

              <option value="multiple">
                Multiple platforms
              </option>

              <option value="other">
                Other
              </option>
            </select>
          </label>

          <label>
            <span>WHAT INTERESTS YOU MOST?</span>

            <select
              name="interest"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select one
              </option>

              <option value="phone">
                Phone access
              </option>

              <option value="power">
                Power / charging
              </option>

              <option value="storage">
                Storage system
              </option>

              <option value="overall">
                The overall jacket
              </option>
            </select>
          </label>

          <button type="submit">
            <span>JOIN FOUNDING RIDERS</span>
            <span>↗</span>
          </button>

          {submitted && (
            <p className="form-success">
              THANK YOU. YOU'RE ON THE LIST.
            </p>
          )}

          <p className="form-disclaimer">
            By submitting, you're only expressing interest in the Rider
            Utility project. This is not a purchase or payment.
          </p>
        </form>
      </div>

      <div className="founding-bottom">
        <span>RIDER UTILITY / 2026</span>

        <span>
          BUILT FOR THE ROAD.
          <br />
          BUILT WITH RIDERS.
        </span>
      </div>
    </section>
  );
}
