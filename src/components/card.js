import React from 'react';
import styled from 'styled-components';

const images = [
  "/spline.jpeg",
  "/react1.png",
  "/js.webp",
  "/figma.png",
  "/html.jpg",
  "/node js.png",
  "/python.webp",
  "/css.png",
  "/canva.webp",
  "/excel.webp",
  "/c.png",
  "/bootstrap.png",
  "/tailwandcss.png",
  "/github.webp",
  "/framer.png",
  
];

const texts = [
  "Spline",
  "React.JS",
  "JavaScript",
  "Figma",
  "HTML5",
  "Node.JS",
  "Python3",
  "CSS3",
  "Canva",
  "Microsoft Excel",
  "C Programming",
  "Bootstrap",
  "Tailwind CSS",
  "GitHub",
  "Framer",
];
 
const backtext =[
  "Spline is an innovative 3D design tool that empowers users to create stunning visuals, animations, and interactive prototypes with ease. Its intuitive interface allows both beginners and experienced designers to explore complex shapes and animations without extensive training. With features like real-time collaboration and asset libraries, Spline streamlines the design process, making it an essential tool for modern designers and developers aiming to elevate their projects.",
"React is a widely-used JavaScript library developed by Facebook for building user interfaces, especially for single-page applications. It allows developers to create reusable UI components and efficiently update the user interface with its virtual DOM. With a vibrant ecosystem, React simplifies state management and enhances performance, making it a favorite among developers.",
"JavaScript is a dynamic programming language essential for web development, enabling interactive and responsive user interfaces. It works alongside HTML and CSS to create rich web applications. With a robust ecosystem of libraries and frameworks, such as React and Node.js, JavaScript continues to evolve, enhancing functionality and performance across platforms.",
"Figma is a cloud-based design tool used for UI/UX design, enabling real-time collaboration among team members. It offers features like vector graphics, prototyping, and design systems, making it ideal for creating interactive designs. Figma's accessibility and versatility streamline the design process, allowing for seamless feedback and iteration.",
"HTML5 is the latest version of the Hypertext Markup Language, crucial for structuring web content. It introduces new elements like `<section>`, `<article>`, and `<video>`, enhancing multimedia integration and semantic structure. HTML5 supports responsive design, improving user experience across devices, and is essential for modern web development practices.",
"Node.js is a JavaScript runtime built on Chrome's V8 engine, enabling server-side development. It allows developers to use JavaScript for backend programming, offering high performance and scalability for web applications. With its non-blocking I/O model, Node.js is ideal for building real-time applications and APIs efficiently.",
"Python 3 is a versatile, high-level programming language known for its readability and simplicity. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming. With a rich ecosystem of libraries and frameworks, Python 3 is widely used in web development, data analysis, artificial intelligence, and scientific computing.",
"CSS3 is the latest version of Cascading Style Sheets, enabling developers to create visually engaging web pages. It introduces advanced features like animations, transitions, and responsive design capabilities, enhancing user experience. With CSS3, designers can implement layouts, colors, and typography, making web applications more dynamic and appealing across various devices.",
"Canva is a user-friendly graphic design platform that allows individuals and businesses to create stunning visuals effortlessly. With a vast library of templates, images, and design elements, users can design social media graphics, presentations, posters, and more, all without requiring advanced design skills. It's accessible and versatile for all creative needs.",
"Microsoft Excel is a powerful spreadsheet application widely used for data analysis, calculations, and visualization. With features like formulas, pivot tables, and charts, users can efficiently manage and interpret large datasets. Excel is essential for businesses, educators, and professionals, enabling informed decision-making and streamlined workflows across various industries.",
"C is a general-purpose programming language known for its efficiency and versatility. Developed in the early 1970s, it provides low-level access to memory and system resources. Widely used for system programming, embedded systems, and application development, C serves as a foundation for many modern languages, making it crucial for aspiring programmers.",
"Bootstrap is a popular front-end framework for developing responsive, mobile-first web applications. Created by Twitter, it provides a collection of CSS and JavaScript components, such as grids, buttons, and modals, enabling developers to quickly design and customize user interfaces. Its flexibility and extensive documentation make it an essential tool for modern web development.",
"Tailwind CSS is a utility-first CSS framework that allows developers to build custom designs without leaving their HTML. It provides a wide array of pre-defined classes for styling elements, enabling rapid prototyping and responsive design. Tailwind promotes a modular approach, making it easy to create maintainable, scalable user interfaces efficiently.",
"Git is a distributed version control system widely used for tracking changes in source code during software development. It allows multiple developers to collaborate on projects, manage code history, and revert to previous versions when necessary. Git enhances productivity and code integrity, making it essential for modern software projects.",
"Framer Motion is a powerful animation library for React that simplifies the process of creating smooth, interactive animations and transitions. It offers a simple API, allowing developers to animate components easily with keyframes, gestures, and layouts. Framer Motion enhances user experience, making web applications visually appealing and engaging.",


]

const Card = () => {
  return (
    <StyledWrapper>
      {/* Add Heading Here */}
      <Heading>My Skills and Tools</Heading>

      <GridWrapper>
        {Array.from({ length: 15 }).map((_, index) => (
          <div className="card" key={index}>
            <div className="card-inner">
              {/* Front side of the card */}
              <div className="card-front">
                <div className="image-container">
                  <img src={images[index % images.length]} alt={texts[index]} />
                </div>
                <div className="heading">{texts[index]}</div>
              </div>

              {/* Back side of the card */}
              <div className="card-back">
                <p>{backtext[index]}</p>
              </div>
            </div>
          </div>
        ))}
      </GridWrapper>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-image: url('/pexels-eberhardgross-1421903.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: auto;
`;

const Heading = styled.h1`
  font-size: 60px;
  color: white;
  margin-bottom: 60px;
  font-family: ;
  text-align: center;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 100px;


  .card {
    width: 300px;
    height: 420px;
    perspective: 1000px;
    cursor: pointer;
  }

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.8s;
  }

  .card:hover .card-inner {
    transform: rotateY(180deg);
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 320px;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    overflow: hidden;
  }

  .card-front {
    background-color: #171717;
    color: white;
    font-family: Montserrat;
    font-weight: bold;
  }

  .card-back {
    background-color: black;
    color: white;
    transform: rotateY(180deg);
    padding: 5px;
    text-align: center;
    font-size: 18px;
  }

  .image-container {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    border: 5px solid #f9f9fb;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
    margin-top: 30px;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .heading {
    margin-top: 1em;
    font-size: 22px;
  }
  
  
    .icons svg {
      width: 20px;
      height: 20px;
    }
    .card::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      inset: -3px;
      border-radius: 10px;
      background: radial-gradient(#858585, transparent, transparent);
      transform: translate(-5px, 250px);
      transition: 0.4s ease-in-out;
      z-index: -1;
    }
  .card:hover::before {
    width: 150%;
    height: 100%;
    margin-left: -4.25em;
  }
  .card::after {
    content: "";
    position: absolute;
    inset: 2px;
    border-radius: 20px;
    background: rgb(23, 23, 23, 0.7);
    transition: all 0.4s ease-in-out;
    z-index: -1;
  }

  .heading {
    z-index: 2;
    transition: 0.4s ease-in-out;
  }
  .card:hover .heading {
    letter-spacing: 0.025em;
  }

  .heading::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    opacity: 1;
    box-shadow: 220px 118px #fff, 280px 176px #fff, 40px 50px #fff,
      60px 180px #fff, 120px 130px #fff, 180px 176px #fff, 220px 290px #fff,
      520px 250px #fff, 400px 220px #fff, 50px 350px #fff, 10px 230px #fff;
    z-index: -1;
    transition: 1s ease;
    animation: 1s glowing-stars linear alternate infinite;
    animation-delay: 0s;
  }
  .icons::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    opacity: 1;
    box-shadow: 140px 20px #fff, 425px 20px #fff, 70px 120px #fff, 20px 130px #fff,
      110px 80px #fff, 280px 80px #fff, 250px 350px #fff, 280px 230px #fff,
      220px 190px #fff, 450px 100px #fff, 380px 80px #fff, 520px 50px #fff;
    z-index: -1;
    transition: 1.5s ease;
    animation: 1s glowing-stars linear alternate infinite;
    animation-delay: 0.4s;
  }
  .icons::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    opacity: 1;
    box-shadow: 490px 330px #fff, 420px 300px #fff, 320px 280px #fff,
      380px 350px #fff, 546px 170px #fff, 420px 180px #fff, 370px 150px #fff,
      200px 250px #fff, 80px 20px #fff, 190px 50px #fff, 270px 20px #fff,
      120px 230px #fff, 350px -1px #fff, 150px 369px #fff;
    z-index: -1;
    transition: 2s ease;
    animation: 1s glowing-stars linear alternate infinite;
    animation-delay: 0.8s;
  }
  .card:hover .heading::before,
  .card:hover .icons::before,
  .card:hover .icons::after {
    filter: blur(3px);
  }

  .image:active {
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }
  .image:active + .heading::before {
    box-shadow: 240px 20px #9b40fc, 240px 25px #9b40fc, 240px 30px #9b40fc,
      240px 35px #9b40fc, 240px 40px #9b40fc, 242px 45px #9b40fc,
      246px 48px #9b40fc, 251px 49px #9b40fc, 256px 48px #9b40fc,
      260px 45px #9b40fc, 262px 40px #9b40fc;
    animation: none;
    filter: blur(0);
    border-radius: 2px;
    width: 0.45em;
    height: 0.45em;
    scale: 0.65;
    transform: translateX(9em) translateY(1em);
  }
  .image:active ~ .icons::before {
    box-shadow: 262px 35px #9b40fc, 262px 30px #9b40fc, 262px 25px #9b40fc,
      262px 20px #9b40fc, 275px 20px #9b40fc, 275px 24px #9b40fc,
      275px 28px #9b40fc, 275px 32px #9b40fc, 275px 36px #9b40fc,
      275px 40px #9b40fc, 275px 44px #9b40fc, 275px 48px #9b40fc;
    animation: none;
    filter: blur(0);
    border-radius: 2px;
    width: 0.45em;
    height: 0.45em;
    scale: 0.65;
    transform: translateX(9em) translateY(1em);
  }
  .image:active ~ .icons::after {
    box-shadow: 238px 60px #9b40fc, 242px 60px #9b40fc, 246px 60px #9b40fc,
      250px 60px #9b40fc, 254px 60px #9b40fc, 258px 60px #9b40fc,
      262px 60px #9b40fc, 266px 60px #9b40fc, 270px 60px #9b40fc,
      274px 60px #9b40fc, 278px 60px #9b40fc, 282px 60px #9b40fc,
      234px 60px #9b40fc, 234px 60px #9b40fc;
    animation: none;
    filter: blur(0);
    border-radius: 2px;
    width: 0.45em;
    height: 0.45em;
    scale: 0.65;
    transform: translateX(9em) translateY(1.25em);
  }

  .heading::after {
    content: "";
    top: -8.5%;
    left: -8.5%;
    position: absolute;
    width: 7.5em;
    height: 7.5em;
    border: none;
    outline: none;
    border-radius: 50%;
    background: #f9f9fb;
    box-shadow: 0px 0px 100px rgba(193, 119, 241, 0.8),
      0px 0px 100px rgba(135, 42, 211, 0.8), inset #9b40fc 0px 0px 40px -12px;
    transition: 0.4s ease-in-out;
    z-index: -1;
  }
  .card:hover .heading::after {
    box-shadow: 0px 0px 200px rgba(193, 119, 241, 1),
      0px 0px 200px rgba(135, 42, 211, 1), inset #9b40fc 0px 0px 40px -12px;
  }

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    column-gap: 1em;
    z-index: 1;
  }

  .instagram,
  .x,
  .discord {
    position: relative;
    transition: 0.4s ease-in-out;
  }
  .instagram:after,
  .x:after,
  .discord:after {
    content: "";
    position: absolute;
    width: 0.5em;
    height: 0.5em;
    left: 0;
    background-color: white;
    box-shadow: 0px 0px 10px rgba(233, 233, 233, 0.5),
      0px 0px 10px rgba(192, 192, 192, 0.5);
    border-radius: 50%;
    z-index: -1;
    transition: 0.3s ease-in-out;
  }
  .instagram svg path,
  .x svg path,
  .discord svg path {
    stroke: #808080;
    transition: 0.4s ease-in-out;
  }
  .instagram:hover svg path {
    stroke: #cc39a4;
  }
  .x:hover svg path {
    stroke: black;
  }
  .discord:hover svg path {
    stroke: #8c9eff;
  }
  .instagram svg,
  .x svg,
  .discord svg {
    transition: 0.3s ease-in-out;
  }
  .instagram:hover svg {
    scale: 1.4;
  }
  .x:hover svg,
  .discord:hover svg {
    scale: 1.25;
  }
  .instagram:hover:after,
  .x:hover:after,
  .discord:hover:after {
    scale: 4;
    transform: translateX(0.09em) translateY(0.09em);
  }

  .instagram::before {
    content: "";
    position: absolute;
    top: -700%;
    left: 1050%;
    rotate: -45deg;
    width: 5em;
    height: 1px;
    background: linear-gradient(90deg, #ffffff, transparent);
    animation: 4s shootingStar ease-in-out infinite;
    transition: 1s ease;
    animation-delay: 1s;
  }
  .x::before {
    content: "";
    position: absolute;
    top: -1300%;
    left: 850%;
    rotate: -45deg;
    width: 5em;
    height: 1px;
    background: linear-gradient(90deg, #ffffff, transparent);
    animation: 4s shootingStar ease-in-out infinite;
    animation-delay: 3s;
  }
  .discord::before {
    content: "";
    position: absolute;
    top: -2100%;
    left: 850%;
    rotate: -45deg;
    width: 5em;
    height: 1px;
    background: linear-gradient(90deg, #ffffff, transparent);
    animation: 4s shootingStar ease-in-out infinite;
    animation-delay: 5s;
  }
  .card:hover .instagram::before,
  .card:hover .x::before,
  .card:hover .discord::before {
    filter: blur(3px);
  }
  .image:active ~ .icons .instagram::before,
  .image:active ~ .icons .x::before,
  .image:active ~ .icons .discord::before {
    animation: none;
    opacity: 0;
  }

  @keyframes shootingStar {
    0% {
      transform: translateX(0) translateY(0);
      opacity: 1;
    }
    50% {
      transform: translateX(-55em) translateY(0);
      opacity: 1;
    }
    70% {
      transform: translateX(-70em) translateY(0);
      opacity: 0;
    }
    100% {
      transform: translateX(0) translateY(0);
      opacity: 0;
    }
  }

  @keyframes move {
    0% {
      transform: translateX(0em) translateY(0em);
    }
    25% {
      transform: translateY(-1em) translateX(-1em);
      rotate: -10deg;
    }
    50% {
      transform: translateY(1em) translateX(-1em);
    }
    75% {
      transform: translateY(-1.25em) translateX(1em);
      rotate: 10deg;
    }
    100% {
      transform: translateX(0em) translateY(0em);
    }
  }

  @keyframes glowing-stars {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }`;

export default Card;
