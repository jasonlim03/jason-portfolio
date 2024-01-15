import React, { useState, useRef } from 'react';
import { Wraper } from './helper';
import Webcam from 'react-webcam';
import html2canvas from 'html2canvas';

const Page6 = () => {
  const [screenshot, setScreenshot] = useState(null);
  const webcamRef = useRef(null);
  const containerRef = useRef(null);
  const [isSelected, setSelected] = useState(false);
  const [selectedSkinIndex, setSelectedSkinIndex] = useState(null);
  const [skinTone, setSkinTone] = useState(0);

  const handleCapture = () => {
    if (webcamRef.current && containerRef.current) {
      html2canvas(containerRef.current).then((canvas) => {
        const imageSrc = canvas.toDataURL('image/jpeg');
        setScreenshot(imageSrc);
        console.log(imageSrc);
      });
    }
  };

  const handleCaptureButtonClick = () => {
    handleCapture(); // Capture screenshot when this function is called
    setSelected(true); // Update isSelected state
    setTimeout(() => {
      // Display the filtered screenshot after a short delay
      console.log("Filtered Image:", applyFilter());
    }, 500); // You can adjust the delay time as needed
  };

  const handleSkinButtonClick = (index) => {
    setSelectedSkinIndex(index);
    setSkinTone(index);
    // If isSelected is true, apply the filter immediately when a new skin tone is selected
    if (isSelected) {
      setTimeout(() => {
        console.log("Filtered Image:", applyFilter());
      }, 500);
    }
  };

  const skinBtnStyle = (index, bgColor) => ({
    width: "50px",
    height: "50px",
    backgroundColor: bgColor,
    border: "none",
    margin: "1%",
    transition: "transform 0.3s", // Smooth transition for scale
    transform: selectedSkinIndex === index ? "scale(1.2)" : "scale(1)",
  });

  const buttonStyle = {
    backgroundColor: isSelected ? "black" : "transparent",
    color: isSelected ? "white" : "black",
    border: "0.1rem solid black",
    height: "3.5rem",
    width: "14rem",
    transition: "background-color 0.3s, color 0.3s", // Smooth transition
  };

  const applyFilter = () => {
    if (screenshot && selectedSkinIndex !== null) {
      const img = new Image();
      img.src = screenshot;

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;

      // Apply the sepia filter
      // ctx.filter = `sepia(${skinTone * 20}%)`;
      ctx.filter = `sepia(${selectedSkinIndex * 20}%)`;
      ctx.drawImage(img, 0, 0, img.width, img.height);

      // Return the URL of the filtered image
      return canvas.toDataURL("image/jpeg");
    } else {
      return screenshot;
    }
  };

  return (
    <Wraper
      style={{
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          height: "12vh",
        }}
        className='block'
      />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <img src="/asset/calvinklein.png" alt="" style={{
          height: "3.2vh",
          width: (3.2 * 1693) / 277 + "vh",
        }}/>
        <div
          style={{
            height: "8vh",
          }}
          className='block'
        />
        <div className='textContainer' style={{
          textAlign: "center",
        }}>
          <h2 style={{ color: "black", letterSpacing: "0.1rem" }}>UPLOAD A SELFIE</h2>
          <h4 style={{ color: "black", fontFamily: "ArialNova-Bold" }}>Allow AI to transform you into a <br /> billboard-worthy CK model.</h4>
        </div>
        <div
          style={{
            height: "3vh",
          }}
          className='block'
        />
        {/* Camera Container */}
        <div
          ref={containerRef}
          style={{
            width: "25vh", // Set your preferred width
            height: "25vh", // Set your preferred height
            border: "0.6rem solid black",
            borderRadius: "6%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Webcam
            audio={false}
            height="100%"
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width="100%"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              filter: `sepia(${skinTone * 20}%)`,
            }}
          />
        </div>
        <div
          style={{
            height: "6vh",
          }}
          className='block'
        />
        <h3 style={{
          color: "black", fontSize: "1.2rem", fontWeight: "bold",
        }}>SELECT YOUR CLOSEST SKIN-TONE</h3>
        <div
          style={{
            height: "3vh",
          }}
          className='block'
        />
        <div style={{
          width: "60%",
          display: "flex",
          justifyContent: "space-between",
          margin: "auto",
        }}>
          <button
            className='skinBtn'
            style={skinBtnStyle(1, "rgb(77, 61, 14)")}
            onClick={() => handleSkinButtonClick(1)}
          ></button>
          <button
            className='skinBtn'
            style={skinBtnStyle(2, "rgb(125, 87, 17)")}
            onClick={() => handleSkinButtonClick(2)}
          ></button>
          <button
            className='skinBtn'
            style={skinBtnStyle(3, "rgb(227, 183, 145)")}
            onClick={() => handleSkinButtonClick(3)}
          ></button>
          <button
            className='skinBtn'
            style={skinBtnStyle(4, "rgb(242, 209, 167)")}
            onClick={() => handleSkinButtonClick(4)}
          ></button>
        </div>

        <div
          style={{
            height: "6vh",
          }}
          className='block'
        />
        {/* Button to trigger screenshot capture */}
        <button onClick={handleCaptureButtonClick} style={buttonStyle}>
          CREATE
        </button>
        {/* Display the stored screenshot image */}
        {screenshot && (
          <div style={{ marginTop: "20px", }}>
            <img
              src={applyFilter()}
              alt="Stored Screenshot"
              style={{ width: "50%", height: "auto", marginLeft:"25%" }}
            />
          </div>
        )}
      </div>
    </Wraper>
  );
};

export default Page6;







