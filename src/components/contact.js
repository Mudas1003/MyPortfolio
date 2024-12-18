import React from "react";

const ContactMe = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center", // Center horizontally
      alignItems: "center", // Center vertically
      textAlign: "left",
      margin: "0px",
      backgroundImage: "url('/pexels-pixabay-73873.jpg')", // Replace with your image path
      backgroundSize: "cover", // Make sure the image covers the entire component
      backgroundPosition: "center", // Center the image
      padding: "20px",
      borderRadius: "0px", // Optional: add border radius for rounded corners
      opacity: "0.8",
    },
    card: {
      backgroundImage: "url('/pexels-philippedonn-1169754.jpg')", // Add image URL here
      backgroundSize: "cover", // Ensure image covers the entire card
      backgroundPosition: "center", // Center the image inside the card
      backgroundRepeat: "no-repeat", // Avoid repeating the image
      backgroundAttachment: "fixed", // Make it stay in place when scrolling
      backgroundOpacity: "0", // Set opacity for background image
      position: "relative",
      backgroundColor: "rgba(255, 255, 255, 0.7)", // Semi-transparent white background over image
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      padding: "30px",
      maxWidth: "800px",
      height: "400px",
      width: "100%",
      overflow: "hidden",
      opacity: "1"
    },
    heading: {
      fontSize: "60px",
      marginBottom: "1px",
      color: "white",
      textAlign: "center",
      marginTop: "15px"
    },
    paragraph: {
      marginBottom: "20px",
      fontSize: "20px",
      color: "white",
      textAlign: "center",
    },
    formGroup: {
      display: "flex",
      alignItems: "center",
      marginBottom: "15px",
    },
    label: {
      width: "150px",
      fontWeight: "700",
      fontSize: "24px",
      color: "white",
    },
    input: {
      flex: "1",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "16px",
    },
    textarea: {
      flex: "1",
      height: "80px",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "16px",
      resize: "none",
    },
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: "black",
      color: "#ffffff",
      border: "none",
      borderRadius: "4px",
      fontSize: "18px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "black",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Contact Me</h2>
        <p style={styles.paragraph}>
          Have questions or want to collaborate? Feel free to reach out!
        </p>

        <form>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>
              Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="message" style={styles.label}>
              Message:
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              style={styles.textarea}
            ></textarea>
          </div>
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
            }
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
