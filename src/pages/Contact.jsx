import React from "react";

function Contact() {
  return (
    <>
      {/* INTERNAL CSS */}
      <style>{`
        
        /* PAGE BACKGROUND */
        .contact-page {
          min-height: 100vh;
          padding: 120px 20px 80px;
          background: linear-gradient(135deg, #eef2ff, #f8fafc);
        }

        .contact-container {
          max-width: 1200px;
          margin: auto;
        }

        /* HEADER */
        .contact-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .contact-header h1 {
          font-size: 42px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 10px;
        }

        .contact-header p {
          color: #64748b;
          font-size: 16px;
        }

        /* MAIN LAYOUT */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 40px;
          align-items: center;
        }

        /* CONTACT INFO SIDE */
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        /* CARD */
        .contact-card {
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(14px);
          padding: 28px;
          border-radius: 18px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          border: 1px solid rgba(255,255,255,0.6);
        }

        .contact-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
        }

        .contact-card h3 {
          margin-bottom: 12px;
          font-size: 18px;
          color: #4f46e5;
        }

        .contact-card p {
          color: #475569;
          line-height: 1.6;
        }

        /* MAP SIDE */
        .map-wrapper {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
        }

        .map-wrapper iframe {
          width: 100%;
          height: 450px;
          border: none;
        }

        /* MAP OVERLAY LABEL */
        .map-label {
          position: absolute;
          top: 20px;
          left: 20px;
          background: white;
          padding: 12px 20px;
          border-radius: 12px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          font-weight: 600;
          color: #1e293b;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .map-wrapper iframe {
            height: 350px;
          }
        }

      `}</style>

      <section className="contact-page">
        <div className="contact-container">

          {/* HEADER */}
          <div className="contact-header">
            <h1>Contact Us</h1>
            <p>We’d love to hear from you. Reach out anytime.</p>
          </div>

          {/* MAIN CONTENT */}
          <div className="contact-grid">

            {/* LEFT SIDE INFO */}
            <div className="contact-info">

              <div className="contact-card">
                <h3>📍 Address</h3>
                <p>
                  PEPL Real Estate <br />
                  Mangalagiri, Guntur <br />
                  Andhra Pradesh, India.
                </p>
              </div>

              <div className="contact-card">
                <h3>📞 Phone</h3>
                <p>+91 90000 00001</p>
              </div>

              <div className="contact-card">
                <h3>✉ Email</h3>
                <p>info@peplmangalagiri.com</p>
              </div>

            </div>

            {/* RIGHT SIDE MAP */}
            <div className="map-wrapper">
              <div className="map-label">📍 Mangalagiri Location</div>

              <iframe
                title="location"
                src="https://www.google.com/maps?q=Mangalagiri%20Guntur&output=embed"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
