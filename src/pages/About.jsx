import ownerImage from "../assets/owner.png";

function About() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>

        {/* ===== TOP SECTION ===== */}
        <div style={styles.topSection}>

          <div style={styles.headingWrapper}>
            <div style={styles.goldLine}></div>
            <h1 style={styles.heading}>About Us</h1>
          </div>

          <div style={styles.contentWrapper}>
            <p style={styles.text}>
              At PEPL, we believe real estate is more than construction —
              it is about shaping lifestyles and building lasting trust.
              With a strong foundation rooted in integrity and excellence,
              we create thoughtfully designed residential and commercial
              spaces that elevate everyday living.
            </p>

            <p style={styles.text}>
              Our commitment goes beyond delivering projects. We focus on
              transparency, superior craftsmanship, and long-term value,
              ensuring every development reflects our passion for perfection
              and customer satisfaction.
            </p>
          </div>

        </div>

        {/* ===== FOUNDER SECTION ===== */}
        <div style={styles.founderSection}>

          <div style={styles.imageWrapper}>
            <img
              src={ownerImage}
              alt="Founder"
              style={styles.image}
            />
          </div>

          <div style={styles.founderContent}>
            <div style={styles.goldLine}></div>

            <h2 style={styles.founderTitle}>
              Founder’s Vision
            </h2>

            <p style={styles.founderText}>
              “Our vision is to redefine modern living by combining
              innovation, sustainability, and uncompromising quality.
              Every PEPL project stands as a testament to trust,
              responsibility, and the promise of delivering value
              for generations.”
            </p>

            <p style={styles.founderName}>
              — Managing Director, PEPL
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "160px 80px",
    backgroundColor: "#f3efe9",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },

  /* ===== TOP SECTION ===== */

  topSection: {
    display: "grid",
    gridTemplateColumns: "1fr 1.4fr",
    gap: "110px",
    alignItems: "start",
    marginBottom: "200px",
  },

  headingWrapper: {
    maxWidth: "320px",
  },

  goldLine: {
    width: "70px",
    height: "2px",
    background: "linear-gradient(90deg, #d4af37, #b9932f)",
    marginBottom: "30px",
  },

  heading: {
    fontSize: "68px",
    fontWeight: "bold",
    fontFamily: "'Playfair Display', serif",
    color: "#2c1f14",
    lineHeight: "1.15",
    letterSpacing: "1px",
  },

  contentWrapper: {
    maxWidth: "640px",
  },

  text: {
    fontSize: "18px",
    fontFamily: "'Poppins', sans-serif",
    lineHeight: "2",
    color: "#4a4036",
    marginBottom: "35px",
    fontWeight: "bold",   // removed bold
    fontStyle: "normal", // removed italic
  },

  /* ===== FOUNDER SECTION ===== */

  founderSection: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    gap: "140px",
    alignItems: "center",
  },

  imageWrapper: {
    display: "flex",
    justifyContent: "flex-start",
  },

  image: {
    width: "100%",
    maxWidth: "480px",
    borderRadius: "18px",
    boxShadow: "0 40px 80px rgba(0,0,0,0.18)",
  },

  founderContent: {
    maxWidth: "520px",
  },

  founderTitle: {
    fontSize: "40px",
    fontFamily: "'Playfair Display', serif",
    marginBottom: "30px",
    color: "#2c1f14",
    fontWeight: "bold",
  },

  founderText: {
    fontSize: "18px",
    fontFamily: "'Poppins', sans-serif",
    lineHeight: "2.1",
    color: "#5a4f44",
    marginBottom: "35px",
    fontStyle: "italic",
    fontWeight: "bold",
  },

  founderName: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "22px",
    color: "#b9932f",
    letterSpacing: "1px",
    fontWeight: "bold",
  },
};


export default About;
