import React, { useState } from 'react';
import { Wraper } from "./helper";
import { Button } from "./components/button";
const Page1 = (props) => {
  const [selectedButton, setSelectedButton] = useState(null);
  const handleButtonClick = (buttonParam) => {
    setSelectedButton(buttonParam);
  };

  return (
    <Wraper
      style={{
        backgroundImage: "url('/asset/BG.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
      }}
    >
      <div
        style={{
          height : "37svh"
        }}
        className='block'
      />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <img src="/asset/ckLogo.png" alt="" style={{
          height : "5svh",
          width : 5 * 1634 / 265 + "svh"
        }}/>

      <div
        style={{
          height : "1.5svh"
        }}
        className='block'
      />

        <h2>
          HOW TO DENIM
        </h2>

      </div>

      <div
        style={{
          height : "8svh"
        }}
        className='block'
      />
  
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: "22vh",
      }}>
        <Button param={"MALE"} handleButtonClick={handleButtonClick} selectedButton={selectedButton} />
        <Button param={"FEMALE"} handleButtonClick={handleButtonClick} selectedButton={selectedButton} />
        <Button param={"SURPRISE ME"} handleButtonClick={handleButtonClick} selectedButton={selectedButton} />
      </div>
      <div className='block' style={{
        height:"6svh"
      }}/>
      <div style={{
        // width:"100%",
        textAlign:"center",
        lineHeight:"1.2rem",
        letterSpacing:"0.1rem"
      }}>
        <p>
          <span style={{fontFamily:"ArialNova-Bold"}}>EXPERIENCE HOW TO DENIM WITH CK</span> <br /> Pick and learn about these iconic denim <br /> fits and allow AI to transform you into a <br /> billboard worthy star.
        </p>
      </div>
    </Wraper>
  );
}
export default Page1;


