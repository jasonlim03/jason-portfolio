import React from 'react';
import { Wraper } from './helper';
import { Button } from './components/button';

const Page4 = () => {
  const containerStyle = {
    height: "50vh",
    display: "flex",
    position:"relative",
    justifyContent: "center",  // Center vertically
    alignItems: "center",      // Center horizontally
  };

  return (
    <Wraper>
      <div style={{
        ...containerStyle,
        backgroundImage: "url('/asset/cover.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition:"center",
      }}>
        {/* <div style={{
          position:"absolute",
          top:"0",
          left:"0",
          width:"100%",
          height:"100%",
          backgroundColor:"rgba(0,0,0,0.5)"
        }}></div> */}
        <h3>MAKE MY COVER</h3>
        <img src="" alt="" style={{

        }}/>
      </div>

      <div style={{
        ...containerStyle,
        backgroundImage: "url('/asset/billboard.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition:"center",
      }}>
        {/* <div style={{
          position:"absolute",
          top:"0",
          left:"0",
          width:"100%",
          height:"100%",
          backgroundColor:"rgba(0,0,0,0.5)"
        }}></div> */}
        <h3>MAKE MY BILLBOARD</h3>
      </div>
    </Wraper>
  );
};

export default Page4;



