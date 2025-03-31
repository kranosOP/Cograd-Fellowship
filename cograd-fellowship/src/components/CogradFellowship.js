import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "./Header";

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
          .fixed-header { position: fixed; top: 0; width: 100%; z-index: 1000; background: white; box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); }
        `}
      </style>

      <div className="fixed-header">
        <Header />
      </div>

      <div style={{ paddingTop: "120px" }}></div> {/* Increased spacing between header and content */}

      {/* Key Benefits */}
      <main style={{ paddingBottom: "80px", maxWidth: "100vw", overflowX: "hidden" }}>
        <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-5 mt-4"> {/* Added margin-top for spacing */}
          <motion.h2 className="h3 fw-semibold text-center" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            Key Benefits
          </motion.h2>
          <div className="row align-items-center mt-3"> {/* Added margin-top for spacing */}
            <div className="col-md-6 text-start">
              <ul className="list-unstyled">
                <li>✔ Financial Support</li>
                <li>✔ Expert Mentorship</li>
                <li>✔ Career Growth</li>
                <li>✔ Global Opportunities</li>
              </ul>
            </div>
            <div className="col-md-6 text-center">
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1" title="YouTube video" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
          </div>
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