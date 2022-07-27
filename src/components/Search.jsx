import React from 'react';
import MusicPlayer from './MusicPlayer';

function Search() {
  return (
    <div className="search relative h-[65rem] px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem] mt-[-15rem] z-[1] flex items-center justify-between rounded-b-[5rem]">
      {/* left side */}
      <div className="left flex-1">
        <img
          className="absolute top-[22rem] left-[-50rem]"
          src={require('./../img/backgraphics.png')}
          alt="backgraphics"
        />
        <img
          className="absolute w-[16rem] top-[26rem]"
          src={require('./../img/d1.png')}
          alt="d1"
        />
        <img
          className="absolute w-[9rem] top-[32.7rem] left-[7rem]"
          src={require('./../img/d2.png')}
          alt="d2"
        />
        <img
          className="absolute w-[9rem] top-[33rem] left-[17rem]"
          src={require('./../img/d3.png')}
          alt="d3"
        />
        <img
          className="absolute w-[17rem] top-[50rem] left-[2rem]"
          src={require('./../img/d4.png')}
          alt="d4"
        />
      </div>
      {/* right side */}
      <div className="right flex items-start flex-col justify-start flex-1 h-[100%] pt-[9rem]">
        {/* search */}
        <div className="searchbar flex justify-start w-[100%]">
          <input
            className="flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-[3rem]"
            type="text"
            placeholder="Enter the keyword or URL"
          />
          {/* search icon */}
          <div className="searchIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 h-[3rem]">
            <img
              className="w-[1.5rem]"
              src={require('./../img/search.png')}
              alt="search_icon"
            />
          </div>
        </div>
        {/* tild icon */}
        <div className="tild flex justify-start mt-7 items-center w-[100%]">
          <img
            className="w-[5rem]"
            src={require('./../img/Path 318.png')}
            alt="Path_318"
          />
        </div>
        {/* paragraph */}
        <div className="detail flex flex-col mt-5 text-4xl">
          <span>Search Music by</span>
          <span>
            <b>Name or Direct URL</b>
          </span>
          <span className="text-sm mt-3 text-[#4d586a]">
            어쩌고저쩌고나불나불어쩌고저쩌고나불나불어쩌고저쩌고나불나불
            <br />
            어쩌고저쩌고나불나불어쩌고저쩌고나불나불어쩌고저쩌고나불나불 <br />
            어쩌고저쩌고나불나불어쩌고저쩌고나불나불어쩌고저쩌고나불나불
          </span>
        </div>
        {/* music player */}
        <MusicPlayer />
      </div>
    </div>
  );
}

export default Search;
