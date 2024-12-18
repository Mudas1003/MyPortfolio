import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  const timelineElements = [
    {
      title: "Acting General",
      subtitle: "GDG-On Campus ABESEC",
      date: "September 2024 - Present",
      description: "Organizing technical events and managing team.",
      icon: "ghg.jpg",
      iconSize: "50px",
      borderColor: "white",
      backgroundImage: "space.jpg",
    },
    {
      title: "Overall Manager",
      subtitle: "Kalakrit-ABES",
      date: "2023 - Present",
      description: "Organizing events and managing team.",
      icon: "kalakrit logo.jpg",
      iconSize: "50px",
      borderColor: "white",
      backgroundImage: "space1.avif",
    },
    {
      title: "Representative of GDG",
      subtitle: "Elixir Tech Community",
      date: "October 2023 - Present",
      description: "Organizing technical events and managing team.",
      icon: "elixer.jpg",
      iconSize: "50px",
      borderColor: "yellow",
      backgroundImage: "space2.jpeg",
    },
    {
      title: "Operations & Logistic Coordinator/Hospitality",
      subtitle: "TEDxABESEC'2024",
      date: "April 2024",
      description: "Taking care of all the logistics and managing the speakers for the event.",
      icon: "ted.jpg",
      borderColor: "green",
      iconSize: "50px",
      backgroundImage: "space4.jpg",
    },
    {
      title: "B.Tech in Computer Science Engineering with specialization in AI & ML",
      subtitle: "ABES Engineering College",
      date: "2023",
      description: "Pursuing my bachelor's degree with a focus on software development and UI design.",
      icon: "abes logo.jpeg",
      iconSize: "50px",
      borderColor: "cyan",
      backgroundImage: "space8.jpg",
    },
    {
      title: "12th",
      subtitle: "Sri Chaitanya Techno School",
      date: "2019-2021",
      description: "Passed My 12th with 90%",
      icon: "chaitanya logo.avif",
      iconSize: "50px",
      borderColor: "blue",
      backgroundImage: "space7.jpg",
    },
    {
      title: "10th",
      subtitle: "DAV Public School",
      date: "2019",
      description: "Passed My 10th with 89%",
      icon: "dav logo.png",
      iconSize: "80px",
      borderColor: "pink",
      backgroundImage: "space3.jpg",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: "url('pexels-eberhardgross-1421903.jpg')", // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "2rem 0",
        height: "2200px",
        color: "white",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "60px",
          fontSize: "50px",
          color: "white",
          marginTop:"60px",
        }}
      >
        My Achievements & Experiences
      </h1>
      <VerticalTimeline>
        {timelineElements.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={item.date}
            iconStyle={{
              background: "transparent",
              padding: "10px",
              border: `3px solid ${item.borderColor}`,
              borderRadius: "50%",
              width: "70px",
              height: "70px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            icon={
              <img
                src={item.icon}
                alt="timeline-icon"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  objectFit: "contain",
                }}
              />
            }
            contentStyle={{
              background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "8px",
              boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
              color: "white",
              width: "510px",
              height: "220px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "20px",
            }}
            contentArrowStyle={{
              borderRight: "10px solid rgba(0, 0, 0, 0.2)",
            }}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ fontSize: "25px", margin: "0 0 0.5rem" }}
            >
              {item.title}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ fontSize: "18px", margin: "0 0 0.5rem", color: "white" }}
            >
              {item.subtitle}
            </h4>
            <p style={{ fontSize: "15px", margin: "0" }}>{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
