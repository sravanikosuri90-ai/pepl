import React from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      {/* INTERNAL CSS */}
      <style>{`

        .footer {
          background: linear-gradient(135deg, #0f172a, #1e293b);
          color: #fff;
          padding: 60px 20px 20px;
        }

        .footer-container {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        /* LOGO / ABOUT */
        .footer-brand h2 {
          color: #6366f1;
          margin-bottom: 15px;
        }

        .footer-brand p {
          color: #cbd5f5;
          line-height: 1.6;
        }

        /* LINKS */
        .footer-links h3,
        .footer-contact h3 {
          margin-bottom: 15px;
        }

        .footer-links ul {
          list-style: none;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 10px;
        }

        .footer-links a {
          text-decoration: none;
          color: #cbd5f5;
          transition: 0.3s;
        }

        .footer-links a:hover {
          color: #6366f1;
          padding-left: 5px;
        }

        /* CONTACT */
        .footer-contact p {
          margin-bottom: 10px;
          color: #cbd5f5;
          line-height: 1.6;
        }

        /* SOCIAL ICONS */
        .footer-social {
          margin-top: 20px;
          display: flex;
          gap: 15px;
        }

        .footer-social a {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: white;
          font-size: 18px;
          text-decoration: none;
          transition: 0.3s ease;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }

        /* Brand Colors */
        .facebook { background: #1877f2; }
        .whatsapp { background: #25d366; }
        .instagram { 
          background: linear-gradient(45deg,#f9ce34,#ee2a7b,#6228d7); 
        }
        .telegram { background: #0088cc; }

        /* Hover Effect */
        .footer-social a:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 8px 20px rgba(0,0,0,0.5);
        }

        /* COPYRIGHT */
        .footer-bottom {
          text-align: center;
          margin-top: 50px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.1);
          color: #94a3b8;
          font-size: 14px;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .footer-container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .footer-social {
            justify-content: center;
          }
        }

      `}</style>

      <footer className="footer">
        <div className="footer-container">

          {/* COMPANY */}
          <div className="footer-brand">
            <h2>PEPL Real Estate</h2>
            <p>
              Delivering premium real estate developments with modern design,
              strategic locations, and world-class construction standards.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="footer-contact">
            <h3>Contact</h3>

            <p>
              📍 PEPL Real Estate <br />
              Mangalagiri, Guntur <br />
              Andhra Pradesh, India
            </p>

            <p>📞 +91 90000 00001</p>
            <p>✉ info@peplmangalagiri.com</p>

            {/* SOCIAL MEDIA ICONS */}
            <div className="footer-social">

              {/* Replace usernames/links with your real ones */}
              
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://wa.me/919000000001"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="telegram"
              >
                <FaTelegramPlane />
              </a>

            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="footer-bottom">
          © {new Date().getFullYear()} PEPL Real Estate. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
