import React, { useState } from 'react';
import { Wraper } from './helper';
import { Button } from './components/button';
import { Terms, Input } from "./components";

const Page5 = () => {
  const [agreed, setAgreed] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const handleButtonClick = (buttonParam) => {
    setSelectedButton(buttonParam);
  };
  

  return (
    <Wraper>
      <div className='block' style={{
        height: "7svh"
      }} />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <img src="/asset/ckLogo.png" alt="" style={{
          height: "3svh",
          width: 3 * 1634 / 265 + "svh"
        }} />
      </div>
      <div className='block' style={{
        height: "3svh"
      }} />
      <h2 style={{
        letterSpacing: "0.1rem"
      }}>Your video is processing..</h2>
      <div className='block' style={{
        height: "2svh"
      }} />
      <div style={{
        textAlign: "center",
        padding: "0 8%",
        position: "relative"
      }}>
        <h4>We’re adding some final Ai touches to your <br /> video. Please enter your email to receive <br /> your Ai video shortly.</h4>
        <div className='block' style={{
          height: "1.5svh"
        }} />

        <div
          style={{
            width: "90%",
            margin: "auto"
          }}
        >
          <Input
            placeholder="EMAIL"
            onChange={(e) => {
              console.log(e.target.value)
            }}
          />
          <div className='block' style={{
            height: "1.5svh"
          }} />
          <Terms />
        </div>
        <div className='block' style={{
          height: "4svh"
        }} />
        <div>
          <h2 style={{ fontSize: "1.2rem" }}>While you wait,</h2>
          <h5>Here are your modal shots <br /> from the AI photoshoot</h5>
        </div>
        <div className='block' style={{
          height: "1.5svh"
        }} />
        <div className='flexContainer' style={{
          display: "flex",
          flexDirection: "row",
          // backgroundColor:"green",
          // minHeight:"40vh"
        }}>
          <div className='leftContainer' style={{
            width: "100%", 
            // backgroundColor: "red",
            height: "25vh",

          }}>
            <img src="/asset/model01.jpg" alt="" style={{
              height : "100%"
            }} />
          </div>
          <div className='rightContainer' style={{
            width: "100%", 
            // backgroundColor: "blue",
            height: "25vh",
          }}>
            <img src="/asset/model02.jpg" alt="" style={{
                height : "100%"
            }} />
          </div>
        </div>
        <div className='block' style={{
          height: "1.5svh"
        }} />
        <div className='flexContainerz' style={{
          display:"flex",
          flexDirection:"row",
        }}>
          <div className='leftContainerz' style={{
            width:"100%",
          }}>
            <img src="/asset/share_icon.png" alt="" style={{
              height:"3vh"
            }}/>
          </div>
          <div className='rightContainerz' style={{
            width:"100%",
          }}>
            <img src="/asset/share_icon.png" alt="" style={{
              height:"3vh"
            }}/>
          </div>
        </div>
        <div style={{
          marginTop:"16%",          
        }}>
          <Button param={"TRY OTHER FITS"} handleButtonClick={handleButtonClick} selectedButton={selectedButton} />
        </div>
      </div>
    </Wraper>
  );
};

export default Page5;



