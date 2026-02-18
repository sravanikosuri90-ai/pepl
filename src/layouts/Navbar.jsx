import React from "react";

function Navbar() {
  return (
    <>
      {/* INTERNAL CSS */}
      <style>{`

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 60px;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(10px);
          z-index: 1000;
          box-sizing: border-box;
        }

        .logo {
          font-size: 28px;
          font-weight: bold;
          color: #f5e6c8;
          letter-spacing: 2px;
        }

        .nav-links {
          display: flex;
          gap: 40px;
        }

        .nav-links a {
          text-decoration: none;
          color: white;
          font-size: 16px;
          transition: 0.3s;
        }

        .nav-links a:hover {
          color: #f5e6c8;
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 0 20px;
          }

          .nav-links {
            gap: 20px;
          }
        }

      `}</style>

      <nav className="navbar">
        <div className="logo">PEPL</div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
