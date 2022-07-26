import React from 'react';
import DownloadAds from './DownloadAds';

function Hero() {
  return (
    <div className="wrapper flex items-center justify-between px-[5rem] w-[100%] h-[35rem] rounded-b-[5rem] bg-[#081730] relative">
      {/* left side */}
      <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">
        <span>Experience The </span>
        <span>
          <b>Best Quality Music</b>
        </span>
        <span className="text-[15px] text-[#525d6e]">
          아이우에오가기구게고사시스세소
          <br />
          타치츠테토나니누네노하히후헤호
        </span>
        {/* download ads */}
        <div>
          <span className="text-[13px]">Download now on IOS and Android</span>
          <DownloadAds />
        </div>
      </div>
      {/* right side */}
      <div className="images w-[50%] relative">
        <img
          className="absolute top-[-8rem] left-[19rem]"
          src={require('./../img/backgraphics.png')}
          alt="backgraphics"
        />
        <img
          className="absolute top-[-15rem] h-[34rem] left-[13rem]"
          src={require('./../img/p 1.png')}
          alt="p_1"
        />
        <img
          className="absolute top-[94px] left-[235px] w-[175px]"
          src={require('./../img/p 2.png')}
          alt="p_2"
        />
        <img
          className="absolute top-[12rem] left-[13rem] w-[5rem]"
          src={require('./../img/p 3.png')}
          alt="p_3"
        />
        <img
          className="absolute top-[12rem] left-[12.5rem] w-[5rem]"
          src={require('./../img/p 4.png')}
          alt="p_4"
        />
      </div>
    </div>
  );
}

export default Hero;
