import { useState, useEffect } from "react";
import heroVideo from "../assets/hero-video.mp4";

function Home() {
  const [accepted, setAccepted] = useState(false);
  const [checked, setChecked] = useState(false);

  /* CHECK TERMS (runs every refresh) */
  useEffect(() => {
    const termsAccepted = sessionStorage.getItem("termsAccepted");
    if (termsAccepted === "true") setAccepted(true);
  }, []);

  /* ACCEPT TERMS */
  const handleAccept = () => {
    sessionStorage.setItem("termsAccepted", "true");
    setAccepted(true);
    setChecked(false);
  };

  return (
    <div>
      {/* TERMS MODAL */}
      {!accepted && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <h2 style={styles.title}>TERMS OF USE</h2>

            <div style={styles.scrollBox}>
              <p>This website belongs to Pithalla Estates Private Ltd.</p>
              <p>By accessing this website, you agree to the Terms.</p>
            </div>

            <div style={styles.checkboxContainer}>
              <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <label style={{ marginLeft: 10 }}>
                I have read and agree
              </label>
            </div>

            <button
              disabled={!checked}
              onClick={handleAccept}
              style={{
                ...styles.button,
                backgroundColor: checked ? "#0A1F44" : "gray",
              }}
            >
              ENTER SITE
            </button>
          </div>
        </div>
      )}

      {/* HERO VIDEO */}
      <section style={styles.heroSection}>
        <div style={styles.hero}>
          <video autoPlay loop muted playsInline style={styles.video}>
            <source src={heroVideo} type="video/mp4" />
          </video>

          <div style={styles.darkOverlay}></div>

          <div style={styles.content}>
            <h1 style={styles.heading}>PEPL</h1>
            <p style={styles.tagline}>Building Trust. Creating Value.</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={styles.whySection}>
        <h2 style={styles.sectionTitle}>Why Choose Us</h2>

        <div style={styles.features}>
          <div style={styles.featureCard}>
            <div style={styles.icon}>🏗️</div>
            <h3>Quality Construction</h3>
            <p>World class materials and modern engineering.</p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.icon}>📍</div>
            <h3>Prime Locations</h3>
            <p>Strategically located high value properties.</p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.icon}>💰</div>
            <h3>Affordable Pricing</h3>
            <p>Luxury living spaces at competitive prices.</p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.icon}>⭐</div>
            <h3>Trusted Brand</h3>
            <p>Years of experience and customer satisfaction.</p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section style={styles.projectSection}>
        <h2 style={styles.sectionTitle}>Our Projects</h2>

        <div style={styles.projectGrid}>
          <div
            style={{
              ...styles.projectCard,
              backgroundImage:
                "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00')",
            }}
          >
            <div style={styles.cardOverlay}>Luxury Apartments</div>
          </div>

          <div
            style={{
              ...styles.projectCard,
              backgroundImage:
                "url('https://zolostays.com/blog/wp-content/uploads/2019/09/Rainbow-vistas.jpg')",
            }}
          >
            <div style={styles.cardOverlay}>Gated Communities</div>
          </div>

          <div
            style={{
              ...styles.projectCard,
              backgroundImage:
                "url('https://i.pinimg.com/originals/63/34/62/6334628b2a6d24d3eebce43eb728e368.jpg')",
            }}
          >
            <div style={styles.cardOverlay}>Commercial Spaces</div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* STYLES */
const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },

  modal: {
    background: "#fff",
    width: 600,
    padding: 40,
    borderRadius: 10,
    textAlign: "center",
  },

  title: { color: "#c00000" },

  scrollBox: { margin: "20px 0" },

  checkboxContainer: { marginBottom: 20 },

  button: {
    padding: "12px 25px",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },

  heroSection: { height: "100vh", marginTop: 80 },

  hero: { position: "relative", height: "100%" },

  video: { width: "100%", height: "100%", objectFit: "cover" },

  darkOverlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.2)",
  },

  content: {
    position: "absolute",
    inset: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#f5e6c8",
  },

  heading: { fontSize: 90 },
  tagline: { fontSize: 28 },

  sectionTitle: {
    textAlign: "center",
    fontSize: 36,
    color: "#0A1F44",
    marginBottom: 40,
  },

  whySection: { padding: "80px 20px", background: "#f8fafc" },

  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: 30,
    maxWidth: 1200,
    margin: "auto",
  },

  featureCard: {
    background: "#fff",
    padding: 30,
    borderRadius: 12,
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },

  icon: { fontSize: 40, marginBottom: 15 },

  projectSection: { padding: "80px 20px" },

  projectGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
    gap: 30,
    maxWidth: 1200,
    margin: "auto",
  },

  projectCard: {
    height: 250,
    borderRadius: 16,
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "hidden",
  },

  cardOverlay: {
    height: "100%",
    background: "rgba(0,0,0,0.1)",
    display: "flex",
    alignItems: "flex-end",
    padding: 20,
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
};

export default Home;
