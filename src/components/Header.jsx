import React from 'react';
import CenterMenu from './CenterMenu';

function Header() {
  const btnStyle =
    'px-[25px] py-[7px] border-[2px] border-[#232a4e] rounded-[10px]';

  return (
    <div className="header flex justify-between items-center pt-[2.4rem] px-[5rem] bg-[#081730] text-[0.8rem]">
      {/* logo */}
      <img
        className="logo w-[42px] h-[42px]"
        src={require('../img/MuzicLogo.png')}
        alt="muzic_logo"
      />
      {/* side menu */}
      <CenterMenu />
      {/* buttons */}
      <div className="buttons">
        <button className={`${btnStyle} mr-[35px] hover:bg-[#232a4e]`}>
          Sign Up
        </button>
        <button className={`${btnStyle} bg-[#232a4e]`}>Log In</button>
      </div>
    </div>
  );
}

export default Header;
