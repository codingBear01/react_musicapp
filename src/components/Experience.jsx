import React from 'react';
import Feature from './Feature';

function Experience() {
  return (
    <div className="experience flex flex-col items-center justify-start pt-[18rem] px-[5rem] mt-[-10rem] h-[60rem] rounded-b-[5rem] bg-[#020917] relative z-[2]">
      {/* title icon */}
      <img
        className="w-[5rem]"
        src={require('./../img/Path 318.png')}
        alt="Path_img"
      />
      {/* heading */}
      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span>An Amazing App Can Change Your Daily Life</span>
        <span>
          <b>Music Experience</b>
        </span>
      </div>
      {/* features */}
      <div className="feature flex items-center justify-around mt-[6rem] w-[100%]">
        <Feature icon="Group 2" title="For Live Music" />
        <Feature icon="music icon" title="For Daily Music" />
        <Feature icon="Group 4" title="For Artists" />
      </div>
    </div>
  );
}

export default Experience;
