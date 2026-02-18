function Projects() {
  const projects = [
    { name: "Fortune Balaji Towers", img: "https://tse3.mm.bing.net/th/id/OIP.tQf80PbXUH-ZNxmHNrhWiwHaEm?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Emerald Park", img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/dab676125057759.61116b874e5d2.jpg" },
    { name: "Indla Site", img: "https://tse3.mm.bing.net/th/id/OIP.6V6pRMYeeZ7HkggWlYvX7AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "PEPL Grand", img: "https://tse2.mm.bing.net/th/id/OIP.ouNUFoHK-N5NJb7JGaYo6wHaE6?w=1080&h=717&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Park Road Site", img: "https://mir-s3-cdn-cf.behance.net/projects/404/31e31a135142003.Y3JvcCwzMDY4LDI0MDAsNDYzLDA.jpg" },
    { name: "Skyline Residency", img: "https://tse2.mm.bing.net/th/id/OIP.T6187AoNf4BvicBA8UJMQgHaHa?w=3840&h=3840&rs=1&pid=ImgDetMain&o=7&rm=3"},
    { name: "Green Valley", img: "https://lh3.googleusercontent.com/qWaW_SqJubp3CfrAB2491wxtkN8QvRLCWefX63GoJJME8Kw85BWzxCytCJtnKt-MYUJxgqKFMceAL08nONTmRw=w3840-h3840-c-rw-v3" },
  ];

  return (
    <>
      <style>{`
        /* ===== SECTION ===== */
        .projects-section {
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          padding: 130px 40px;
          background: linear-gradient(to bottom, #f8fafc, #eef2f7);
          font-family: "Segoe UI", sans-serif;
          position: relative;
        }

        .projects-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
          background-size: 20px 20px;
          opacity: 0.3;
          pointer-events: none;
        }

        /* ===== HEADER ===== */
        .projects-header {
          text-align: center;
          margin-bottom: 110px;
        }

        .projects-title {
          font-size: 44px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 12px;
        }

        .projects-subtitle {
          color: #6b7280;
          font-size: 17px;
        }

        /* ===== TIMELINE ===== */
        .timeline {
          position: relative;
          max-width: 1200px;
          margin: auto;
        }

        .timeline::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          width: 4px;
          height: 100%;
          background: linear-gradient(to bottom, #2563eb, #9333ea);
          border-radius: 4px;
        }

        /* ===== ITEM ===== */
        .timeline-item {
          display: flex;
          align-items: center;
          margin-bottom: 120px;
          position: relative;
          opacity: 0;
          transform: translateY(50px);
          animation: fadeUp 0.8s ease forwards;
        }

        .timeline-item:nth-child(even) {
          flex-direction: row-reverse;
        }

        .timeline-item:nth-child(1) { animation-delay: 0.2s; }
        .timeline-item:nth-child(2) { animation-delay: 0.4s; }
        .timeline-item:nth-child(3) { animation-delay: 0.6s; }
        .timeline-item:nth-child(4) { animation-delay: 0.8s; }
        .timeline-item:nth-child(5) { animation-delay: 1s; }
        .timeline-item:nth-child(6) { animation-delay: 1.2s; }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ===== DOT ===== */
        .timeline-dot {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: white;
          border: 5px solid #2563eb;
          box-shadow: 0 0 0 8px rgba(37,99,235,0.15);
          z-index: 2;
        }

        /* ===== CARD (BIGGER NOW) ===== */
        .timeline-content {
          width: 48%;
          border-radius: 18px;
          overflow: hidden;
          backdrop-filter: blur(10px);
          background: rgba(255,255,255,0.85);
          border: 1px solid rgba(255,255,255,0.5);
          box-shadow: 0 25px 60px rgba(0,0,0,0.12);
          transition: 0.35s ease;
        }

        .timeline-content:hover {
          transform: translateY(-10px) scale(1.01);
          box-shadow: 0 40px 80px rgba(0,0,0,0.18);
        }

        /* ===== BIGGER IMAGE ===== */
        .timeline-content img {
          width: 100%;
          height: 340px;
          object-fit: cover;
          transition: 0.5s ease;
        }

        .timeline-content:hover img {
          transform: scale(1.06);
        }

        /* ===== TEXT ===== */
        .timeline-text {
          padding: 34px;
        }

        .timeline-text h3 {
          margin: 0 0 14px;
          font-size: 28px;
          font-weight: 600;
          color: #111827;
        }

        .timeline-text p {
          margin: 0;
          font-size: 16px;
          color: #6b7280;
          line-height: 1.8;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 900px) {
          .timeline::before {
            left: 10px;
          }

          .timeline-item {
            flex-direction: column !important;
            align-items: flex-start;
            padding-left: 40px;
          }

          .timeline-dot {
            left: 10px;
          }

          .timeline-content {
            width: 100%;
          }

          .timeline-content img {
            height: 260px;
          }
        }
      `}</style>

      <section className="projects-section">
        <div className="projects-header">
          <h1 className="projects-title">Our Projects</h1>
          <p className="projects-subtitle">
            Delivering excellence through modern infrastructure and premium design.
          </p>
        </div>

        <div className="timeline">
          {projects.map((project, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <img src={project.img} alt={project.name} />

                <div className="timeline-text">
                  <h3>{project.name}</h3>
                  <p>
                    Premium development featuring modern architecture, strategic
                    location, and world-class construction standards designed for
                    long-term value.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
