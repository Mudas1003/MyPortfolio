import React, { useState } from 'react';

const BackGround = () => {
    const [flipped, setFlipped] = useState(false); // State to manage flipping
    const mainImageUrl = '/MyProfile.png';
    const flippedImageUrl = '/flip.png';
    const backgroundImageUrl = '/pexels-nivdex-796206.jpg'; // Path to your background image

    const styles = {
      

        back: {
            position: 'relative',
            margin: '0',
            height: '700px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url(${backgroundImageUrl})`, // Add background image
            backgroundSize: 'cover', // Ensure the image covers the entire area
            backgroundPosition: 'center', // Center the image
            backgroundRepeat: 'no-repeat', // Prevent repeating
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            color: 'white',
            padding: '20px',
            textAlign: 'center',
            maxWidth: '1500px',
            marginLeft: '-560px',
            zIndex: 1, // Brings the content in front of the background
            marginTop: '90px',
        },
        imageContainer: {
            position: 'relative',
            width: '300px',
            height: '300px',
            perspective: '1000px', // Perspective for 3D flip effect
            marginBottom: '20px',
            cursor: 'pointer', // Indicate clickable
        },
        image: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '3px solid white',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            backfaceVisibility: 'hidden', // Hide back face of the image
            transition: 'transform 0.6s', // Smooth transition for flipping
            marginLeft: '600px',
        },
        frontImage: {
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        },
        backImage: {
            transform: flipped ? 'rotateY(0deg)' : 'rotateY(-180deg)',
        },
        heading: {
            fontSize: '22px',
            fontWeight: 'bold',
            lineHeight: '1.5',
            maxWidth: '650px', // Adjust for wrapping
            marginLeft: '570px',
        },
        highlightedText: {
            color: 'yellow',
            fontSize: '25px',
        },
        rocketEmoji: {
            marginLeft: '5px',
        },
    };

    const handleImageClick = () => {
        setFlipped(!flipped); // Toggle flipped state on click
    };

    return (
        <>
            <div style={styles.back}>
                <div style={styles.content}>
                    <div style={styles.imageContainer} onClick={handleImageClick}>
                        <img
                            src={mainImageUrl}
                            alt="Main Profile"
                            style={{ ...styles.image, ...styles.frontImage }}
                        />
                        <img
                            src={flippedImageUrl}
                            alt="Alternate Profile"
                            style={{ ...styles.image, ...styles.backImage }}
                        />
                    </div>
                    <h1 style={styles.heading}>
                        Hi! I am{" "}
                        <span style={styles.highlightedText}>
                            {flipped ? "Mudassir Imam" : "Agent ROCKET"}
                        </span>
                        <span style={styles.rocketEmoji}>🚀</span>, a passionate UI designer and frontend developer. I specialize in creating user-friendly interfaces that enhance the user experience. My work focuses on combining functionality with aesthetics, ensuring that every project I undertake not only looks great but is also easy to navigate. Besides me is my buddy mRobot, he is little dramatic so don't mind!
                    </h1>
                </div>

                <div style={{ overflow: "hidden", width: "700px", height: "1800px" }}>
                    <iframe
                        src='https://my.spline.design/robottutorialinteractiveeventscopy-77c21a4acc85c218121981f4188f3a20/'
                        style={{
                            width: '1000px',
                            height: '100%',
                            border: 'none',
                            background: 'transparent',
                            marginLeft: '-200px',
                            marginTop: '-50px'
                        }}
                        allow="autoplay"
                    ></iframe>
                </div>
            </div>
        </>
    );
}

export default BackGround;
