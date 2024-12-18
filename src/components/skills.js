import React, { useState } from 'react';

const VideoBackground = () => {
    const videoSource = "/856857-uhd_4096_2160_30fps.mp4"; // Path to your video

    const styles = {
        videoBackground: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1, // Ensures the video is behind all other content
            pointerEvents: 'none', // Prevents interaction with the video
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: '50px 0',
            color: 'white',
            zIndex: 1, // Keeps the container in front of the video
            position: 'relative', // Ensure the container is positioned relatively
        },
        title: {
            fontSize: '75px',
            fontWeight: '600',
            marginBottom: '30px',
            textAlign: 'center',
            fontFamily: "Noto Serif", 
        },
        cardContainer: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '100px 130px', // Horizontal and vertical spacing between cards
            justifyContent: 'center',
            alignItems: 'center',
        },
        card: {
            position: 'relative',
            width: '250px',
            height: '350px',
            perspective: '1000px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        cardInner: {
            position: 'relative',
            width: '100%',
            height: '100%',
            transition: 'transform 0.6s',
            transformStyle: 'preserve-3d',
            cursor: 'pointer',
        },
        cardFront: {
            position: 'absolute',
            width: '280px',
            height: '380px',
            backfaceVisibility: 'hidden',
            backgroundColor: '#000',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '15px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '10px',
            transparency:'30px'
        },
        circleImage: {
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            marginBottom: '10px',
            objectFit: 'cover',
            border: '4px solid black',
        },
        titleText: {
            fontSize: '24px',
            fontWeight: '500',
            textAlign: 'center',
            fontFamily: "Noto Serif", 

        },
        cardBack: {
            position: 'absolute',
            width: '280px',
            height: '380px',
            backfaceVisibility: 'hidden',
            backgroundColor: '#222',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '15px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 10.2)',
            transform: 'rotateY(180deg)',
            padding: '3px',
            textAlign: 'center',
            fontWeight: '400',
        },
    };

    const cards = [
        { id: 1, image: '/spline.jpeg', title: 'Spline', content: 'Spline is a 3D design tool that allows designers to create interactive and immersive 3D web experiences without coding. With an intuitive interface and real-time collaboration features, Spline enables users to build, animate, and embed 3D objects directly into websites, making complex 3D design accessible to all skill levels.', background: '/spline1.jpg', color: 'white' },
        { id: 2, image: '/react1.png', title: 'React.JS', content: 'React is a widely-used JavaScript library developed by Facebook for building user interfaces, especially for single-page applications. It allows developers to create reusable UI components and efficiently update the user interface with its virtual DOM. With a vibrant ecosystem, React simplifies state management and enhances performance, making it a favorite among developers.', background: '/react2.jpg', color: 'white' },
        { id: 3, image: '/js.webp', title: 'JavaScript', content: 'JavaScript is a dynamic programming language essential for web development, enabling interactive and responsive user interfaces. It works alongside HTML and CSS to create rich web applications. With a robust ecosystem of libraries and frameworks, such as React and Node.js, JavaScript continues to evolve, enhancing functionality and performance across platforms.', background: '/js2.avif', color: 'white' },
        { id: 4, image: '/figma.png', title: 'Figma', content: 'Figma is a cloud-based design tool used for UI/UX design, enabling real-time collaboration among team members. It offers features like vector graphics, prototyping, and design systems, making it ideal for creating interactive designs. Figma accessibility and versatility streamline the design process, allowing for seamless feedback and iteration.', background: '/figmabg.png', color: 'white' },
        { id: 5, image: '/html.jpg', title: 'HTML5', content: 'HTML5 is the latest version of the Hypertext Markup Language, crucial for structuring web content. It introduces new elements like `<section>`, `<article>`, and `<video>`, enhancing multimedia integration and semantic structure. HTML5 supports responsive design, improving user experience across devices, and is essential for modern web development practices.', background: '/htmlbg2.png', color: 'black' },
        { id: 6, image: '/node js.png', title: 'Node.JS', content: 'Node.js is a JavaScript runtime built on Chromes V8 engine, enabling server-side development. It allows developers to use JavaScript for backend programming, offering high performance and scalability for web applications. With its non-blocking I/O model, Node.js is ideal for building real-time applications and APIs efficiently.', background: '/nodebg.png', color: 'white' },
        { id: 7, image: '/python.webp', title: 'Python3', content: 'Python 3 is a versatile, high-level programming language known for its readability and simplicity. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming. With a rich ecosystem of libraries and frameworks, Python 3 is widely used in web development, data analysis, artificial intelligence, and scientific computing.', background: '/pythbg.jpg', color: 'white' },
        { id: 8, image: '/css.png', title: 'CSS3', content: 'CSS3 is the latest version of Cascading Style Sheets, enabling developers to create visually engaging web pages. It introduces advanced features like animations, transitions, and responsive design capabilities, enhancing user experience. With CSS3, designers can implement layouts, colors, and typography, making web applications more dynamic and appealing across various devices.', background: '/cssbg2.jpg', color: 'white' },
        { id: 9, image: '/canva.webp', title: 'Canva', content: 'Canva is a user-friendly graphic design platform that allows individuals and businesses to create stunning visuals effortlessly. With a vast library of templates, images, and design elements, users can design social media graphics, presentations, posters, and more, all without requiring advanced design skills. Its accessible and versatile for all creative needs.', background: '/canvabg2.webp', color: 'black' },
        { id: 10, image: '/excel.webp', title: 'Excel', content: 'Microsoft Excel is a powerful spreadsheet application widely used for data analysis, calculations, and visualization. With features like formulas, pivot tables, and charts, users can efficiently manage and interpret large datasets. Excel is essential for businesses, educators, and professionals, enabling informed decision-making and streamlined workflows across various industries.', background: '/excelbg2.jpg', color: 'black' },
        { id: 11, image: '/c.png', title: 'C', content: 'C is a general-purpose programming language known for its efficiency and versatility. Developed in the early 1970s, it provides low-level access to memory and system resources. Widely used for system programming, embedded systems, and application development, C serves as a foundation for many modern languages, making it crucial for aspiring programmers.', background: '/cbg2.png', color: 'white' },
        { id: 12, image: '/bootstrap.png', title: 'BootStrap', content: 'Bootstrap is a popular front-end framework for developing responsive, mobile-first web applications. Created by Twitter, it provides a collection of CSS and JavaScript components, such as grids, buttons, and modals, enabling developers to quickly design and customize user interfaces. Its flexibility and extensive documentation make it an essential tool for modern web development.', background: '/bootbg2.jpg', color: 'black' },
        { id: 13, image: '/tailwandcss.png', title: 'Tailwand CSS', content: 'Tailwind CSS is a utility-first CSS framework that allows developers to build custom designs without leaving their HTML. It provides a wide array of pre-defined classes for styling elements, enabling rapid prototyping and responsive design. Tailwind promotes a modular approach, making it easy to create maintainable, scalable user interfaces efficiently.', background: '/tailbg2.jpg', color:'black' },
        { id: 14, image: '/github.webp', title: 'Git', content: 'Git is a distributed version control system widely used for tracking changes in source code during software development. It allows multiple developers to collaborate on projects, manage code history, and revert to previous versions when necessary. Git enhances productivity and code integrity, making it essential for modern software projects.', background: '/gitbg2.png', color: 'white' },
        { id: 15, image: '/framer.png', title: 'Framer', content: 'Framer Motion is a powerful animation library for React that simplifies the process of creating smooth, interactive animations and transitions. It offers a simple API, allowing developers to animate components easily with keyframes, gestures, and layouts. Framer Motion enhances user experience, making web applications visually appealing and engaging.', background: '/fbg2.png', color: 'white' },
    ];

    const [flipped, setFlipped] = useState(Array(cards.length).fill(false));

    const handleCardClick = (index) => {
        setFlipped((prevFlipped) =>
            prevFlipped.map((state, i) => (i === index ? !state : state))
        );
    };

    return (
        <div>
            <video
                src={videoSource}
                style={styles.videoBackground}
                autoPlay
                loop
                muted
            />
            <div style={styles.container}>
                <h1 style={styles.title}>Skills</h1>
                <div style={styles.cardContainer}>
                    {cards.map((card, index) => (
                        <div key={card.id} style={styles.card} onClick={() => handleCardClick(index)}>
                            <div
                                style={{
                                    ...styles.cardInner,
                                    transform: flipped[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                                }}
                            >
                                <div
                                    style={{
                                        ...styles.cardFront,
                                        backgroundImage: `url(${card.background})`,
                                    }}
                                >
                                    <img src={card.image} alt={card.title} style={styles.circleImage} />
                                    <div style={{ ...styles.titleText, color: card.color }}>{card.title}</div>
                                </div>
                                <div style={styles.cardBack}>
                                    {card.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VideoBackground;
