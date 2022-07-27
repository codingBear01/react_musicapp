import { React, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { motion } from 'framer-motion';
import DownloadAds from './DownloadAds';

function Hero() {
  const [elIsVisible, setElIsVisible] = useState(false);

  const bg = {
    true: {
      left: '7rem',
    },
    false: {
      left: '19rem',
    },
  };

  const musicPlayer = {
    true: {
      left: '295px',
    },
    false: {
      left: '235px',
    },
  };

  const rect = {
    true: {
      left: '11rem',
    },
    false: {
      left: '13rem',
    },
  };

  const heart = {
    true: {
      left: '9rem',
    },
    false: {
      left: '12.5rem',
    },
  };

  return (
    <VisibilitySensor
      onChange={(isVisible) => setElIsVisible(isVisible)}
      minTopValue={300}
    >
      <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative z-[3]">
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
          <motion.img
            variants={bg}
            animate={`${elIsVisible}`}
            transition={{ duration: 1, type: 'ease-out' }}
            className="absolute top-[-8rem] left-[19rem]"
            src={require('./../img/backgraphics.png')}
            alt="backgraphics"
          />
          <img
            className="absolute top-[-15rem] h-[34rem] left-[13rem]"
            src={require('./../img/p 1.png')}
            alt="p_1"
          />
          <motion.img
            variants={musicPlayer}
            animate={`${elIsVisible}`}
            transition={{ duration: 1, type: 'ease-out' }}
            className="absolute top-[94px] left-[235px] w-[175px]"
            src={require('./../img/p 2.png')}
            alt="p_2"
          />
          <motion.img
            variants={rect}
            animate={`${elIsVisible}`}
            transition={{ duration: 1, type: 'ease-out' }}
            className="absolute top-[12rem] left-[13rem] w-[5rem]"
            src={require('./../img/p 3.png')}
            alt="p_3"
          />
          <motion.img
            variants={heart}
            animate={`${elIsVisible}`}
            transition={{ duration: 1, type: 'ease-out' }}
            className="absolute top-[12rem] left-[12.5rem] w-[5rem]"
            src={require('./../img/p 4.png')}
            alt="p_4"
          />
        </div>
      </div>
    </VisibilitySensor>
  );
}

export default Hero;
