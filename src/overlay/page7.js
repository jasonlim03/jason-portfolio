import React, { useState } from 'react';
import { Wraper } from './helper';

const Page7 = () => {
  const [skinTone, setSkinTone] = useState(0); // 0 represents the default skin tone

  const handleSkinToneChange = (tone) => {
    setSkinTone(tone);
  };

  const applyFilter = () => {
    const filterValue = `sepia(${skinTone * 20}%)`; // Adjust the multiplier based on your preference
    return {
      filter: filterValue,
    };
  };

  return (
    <Wraper>
      <div>
        <img
          src="/asset/model01.jpg"
          alt="Filtered Image"
          style={applyFilter()}
        />
        <div>
          <button onClick={() => handleSkinToneChange(0)}>Default</button>
          <button onClick={() => handleSkinToneChange(1)}>Light</button>
          <button onClick={() => handleSkinToneChange(2)}>Medium</button>
          <button onClick={() => handleSkinToneChange(3)}>Dark</button>
        </div>
      </div>
    </Wraper>
  );
};

export default Page7;
