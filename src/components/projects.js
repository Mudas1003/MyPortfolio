import React from "react";

const CardList = () => {
  // Array of card details
  const cards = [
    {
      title: "Netflix",
      description: "This is the first card.",
      backgroundImage: "url('net.jpg')",
      buttonText: "CheckOut",
      link: "https://courageous-cupcake-022d5d.netlify.app/",
      titleColor: "white",
    },
    {
      title: "Spotify",
      description: "This is the second card.",
      backgroundImage: "url('spotify1.webp')",
      buttonText: "CheckOut",
      link: "https://spotifyclonebymee.netlify.app/",
      titleColor: "white",
    },
    {
      title: "StarBucks UI Design",
      description: "This is the third card.",
      backgroundImage: "url('starbucks1.jpg')",
      buttonText: "CheckOut",
      link: "https://www.figma.com/community/file/1302515901003090175/starbucks",
      titleColor: "white",
    },
    {
      title: "Netflix UI Design",
      description: "This is the third card.",
      backgroundImage: "url('net1.png')",
      buttonText: "CheckOut",
      link: "https://www.figma.com/community/file/1308661822908728543/netflix",
      titleColor: "white",
    },
    {
      title: "Spotify UI Design",
      description: "This is the third card.",
      backgroundImage: "url('spotify2.gif')",
      buttonText: "CheckOut",
      link: "https://www.figma.com/community/file/1309876703435224432/spotify",
      titleColor: "white",
    },
    {
      title: "NewsApp",
      description: "This is the third card.",
      backgroundImage: "url('news.avif')",
      buttonText: "CheckOut",
      link: "https://www.github.com",
      titleColor: "white",
    },
    {
      title: "My Portfolio",
      description: "This is the third card.",
      backgroundImage: "url('port1.webp')",
      buttonText: "CheckOut",
      link: "https://www.github.com",
      titleColor: "black",
    },
    {
      title: "Coming Soon..",
      description: "This is the third card.",
      backgroundImage: "url('shopping.avif')",
      buttonText: "Wait a Little",
      link: "https://www.github.com",
      titleColor: "black",
    },
  ];

  return (
    <div style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="/856857-uhd_4096_2160_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Heading */}
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1
          style={{
            fontSize: "60px",
            color: "white",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)",
            marginBottom: "20px",
            marginTop: "70px"
          }}
        >
          My Projects
        </h1>
      </div>

      {/* Card Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
          padding: "30px",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              width: "580px",
              height: "300px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              backgroundImage: card.backgroundImage,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "20px",
              color: "white",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: "34px",
                fontWeight: "bold",
                color: card.titleColor,
              }}
            >
              {card.title}
            </h2>
            <button
              onClick={() => window.open(card.link, "_blank")}
              style={{
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "Red",
                color: "white",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
