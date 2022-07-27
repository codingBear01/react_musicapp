import React from 'react';
import CenterMenu from './CenterMenu';
import { Facebook, Twitter, YouTube, LinkedIn } from '@mui/icons-material';

function Footer() {
  const socialIconStyle = 'rounded-full border-2 border-white p-2 mr-[5rem]';

  return (
    <div className="footer flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[45rem] pt-[18rem] mt-[-10rem] relative z-[-1]">
      <CenterMenu />
      {/* social icons */}
      <div className="flex w-[100%] justify-center mt-14">
        <div className={socialIconStyle}>
          <Facebook />
        </div>
        <div className={socialIconStyle}>
          <Twitter />
        </div>
        <div className={socialIconStyle}>
          <YouTube />
        </div>
        <div className={socialIconStyle}>
          <LinkedIn />
        </div>
      </div>
      {/* detail */}
      <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem]">
        아이우에오카키쿠케코사시스세소타치츠테토나니누네노하히후헤호마미무메모
      </span>
    </div>
  );
}

export default Footer;
