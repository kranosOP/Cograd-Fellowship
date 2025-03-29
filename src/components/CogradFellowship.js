import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CogradFellowship = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="container mt-5 p-5 bg-white rounded shadow text-center" style={{ fontFamily: "Poppins, sans-serif" }}>
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-primary fw-bold mb-4 display-4"
      >
        🎓 Cograd Fellowship
      </motion.h1>

      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-5"
      >
        <h2 className="h3 fw-semibold">About the Fellowship</h2>
        <p className="text-muted lead">
          The <strong>Cograd Fellowship</strong> supports talented students with mentorship, funding, and networking opportunities.
        </p>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-5"
      >
        <h2 className="h3 fw-semibold">Key Benefits</h2>
        <ul className="list-group mt-3">
          {[  
            { emoji: "💰", title: "Financial Support", desc: "Research stipend." },
            { emoji: "🎓", title: "Expert Mentorship", desc: "Connect with industry leaders." },
            { emoji: "📈", title: "Career Growth", desc: "Training & workshops." },
            { emoji: "🌍", title: "Global Opportunities", desc: "Work on international projects." }
          ].map((benefit, index) => (
            <li key={index} className="list-group-item d-flex align-items-center border-0 shadow-sm py-3">
              <span className="me-3 fs-4">{benefit.emoji}</span>
              <div>
                <strong className="text-dark">{benefit.title}:</strong> <span className="text-muted">{benefit.desc}</span>
              </div>
            </li>
          ))}
        </ul>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-5"
      >
        <h2 className="h3 fw-semibold">How to Apply </h2>
        <div className="row mt-3">
          {[  
            { title: "🔹Fill out the online application.", desc: "Learn more about fellowship eligibility and participating fellowships." },
            { title: "📄 Submit CV & research proposal.", desc: "Submit documents to support your application" },
            { title: "🎤 Attend an interview if shortlisted.", desc: "Prepare for an evaluation discussion" },
            { title: "🏆 Final selection announcement.", desc: "Get notified about the results." }
          ].map((step, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-3">
              <div className="card h-100 shadow border-0">
                <div className="card-body">
                  <h5 className="card-title text-primary fw-semibold">{step.title}</h5>
                  <p className="card-text text-muted">{step.desc}</p>
                  <a href="#" className="btn btn-outline-primary btn-sm">Learn More →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mt-4 p-5 bg-primary text-white rounded shadow-lg"
      >
        <h2 className="h3 fw-bold">Ready to Elevate Your Career?</h2>
        <p className="mt-2 lead">Join the Cograd Fellowship and gain access to exclusive mentorship, funding, and global opportunities!</p>
        <button className="btn btn-light fw-bold px-5 py-3 mt-3 fs-5 rounded-pill">
          Apply Now
        </button>
      </motion.div>
    </div>
  );
};

export default CogradFellowship;
