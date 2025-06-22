import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2025 Lion Clone Coding. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#f8f9fa",
    padding: "2rem 0",
    textAlign: "center",
    marginTop: "4rem",
    borderTop: "1px solid #dee2e6"
  },
  text: {
    margin: 0,
    color: "#6c757d",
    fontSize: "0.9rem"
  }
};

export default Footer;

