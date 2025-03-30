import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CogradFellowship = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="container-fluid mt-5 p-5 bg-white rounded shadow text-center" style={{ fontFamily: "Poppins, sans-serif", minHeight: "100vh", overflowX: "hidden" }}>
      <style>
        {`
          body, html { overflow-x: hidden; margin: 0; padding: 0; width: 100%; }
        `}
      </style>

      {/* Header */}
      <header className="d-flex justify-content-between align-items-center p-3 shadow-lg w-100 fixed-top" style={{ backgroundColor: "#007bff", color: "white" }}>
        <div className="px-4 py-2 rounded" style={{ backgroundColor: "#0056b3" }}>
          <h1 className="fw-bold m-0">Cograd</h1>
        </div>
        <button className="btn btn-light fw-bold px-4 py-2 rounded" style={{ backgroundColor: "#0056b3", color: "white" }}>
          Contact Us
        </button>
      </header>

      <div style={{ paddingTop: "80px" }}></div>

      {/* Key Benefits */}
      <main style={{ paddingBottom: "80px", maxWidth: "100vw", overflowX: "hidden" }}>
        <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-5">
          <motion.h2 className="h3 fw-semibold text-center" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            Key Benefits
          </motion.h2>
          <ul className="list-group mt-3">
            {[
              { emoji: "💰", title: "Financial Support", desc: "Research stipend." },
              { emoji: "🎓", title: "Expert Mentorship", desc: "Connect with industry leaders." },
              { emoji: "📈", title: "Career Growth", desc: "Training & workshops." },
              { emoji: "🌍", title: "Global Opportunities", desc: "Work on international projects." }
            ].map((benefit, index) => (
              <motion.li key={index} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} whileHover={{ scale: 1.05 }} className="list-group-item d-flex justify-content-between align-items-center border-0 shadow-sm py-3">
                <div className="d-flex align-items-center">
                  <motion.span className="me-3 fs-4" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
                    {benefit.emoji}
                  </motion.span>
                  <strong className="text-dark">{benefit.title}</strong>
                </div>
                <motion.div className="text-muted" style={{ flexGrow: 1, textAlign: "right", whiteSpace: "nowrap" }} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.3 }}>
                  <span className="fw-bold text-primary" style={{ margin: "0 10px" }}>→</span>
                  {benefit.desc}
                </motion.div>
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* How to Apply */}
        <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="mb-5">
          <div className="p-4 rounded shadow-lg" style={{ background: "linear-gradient(to bottom, #f8f9fa, #e3f2fd)" }}>
            <h2 className="h3 fw-semibold">How to Apply</h2>
            <div className="row mt-3">
              {[
                { title: "🔹 Fill out the online application", desc: "Learn more about fellowship eligibility." },
                { title: "📄 Submit CV & research proposal", desc: "Submit documents to support your application." },
                { title: "🎤 Attend an interview", desc: "Prepare for an evaluation discussion." },
                { title: "🏆 Final selection announcement", desc: "Get notified about the results." }
              ].map((step, index) => (
                <div key={index} className="col-md-6 col-lg-3 mb-3">
                  <div className="card h-100 shadow border-0 rounded" style={{ background: "linear-gradient(to bottom, #ffffff, #e3f2fd)" }}>
                    <div className="card-body">
                      <h5 className="card-title text-primary fw-semibold">{step.title}</h5>
                      <p className="card-text text-muted">{step.desc}</p>
                      <a href="#" className="btn btn-outline-primary btn-sm">Learn More →</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="mt-4 p-5 bg-primary text-white rounded shadow-lg">
          <h2 className="h3 fw-bold">Ready to Elevate Your Career?</h2>
          <p className="mt-2 lead">Join the Cograd Fellowship and gain access to mentorship, funding, and global opportunities!</p>
          <a href="https://forms.gle/iTM8HiXNdaTkwRnG7" target="_blank" rel="noopener noreferrer" className="btn btn-light fw-bold px-5 py-3 mt-3 fs-5 rounded-pill">
            Apply Now
          </a>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white text-center p-3 fixed-bottom w-100">
        <p className="mb-0">&copy; 2025 Cograd Fellowship. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default CogradFellowship;
