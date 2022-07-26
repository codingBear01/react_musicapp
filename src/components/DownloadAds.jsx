import React from 'react';

function DownloadAds() {
  const downloadImgStyle =
    'w-[10rem] h-[3rem] border-[2px] border-[#232a4e] rounded-[13px]';

  return (
    <div className="download">
      <div className="download_images flex">
        <img
          className={`${downloadImgStyle} mr-[2rem]`}
          src={require('./../img/App Store.png')}
          alt="app_store"
        />
        <img
          className={downloadImgStyle}
          src={require('./../img/Google Play.png')}
          alt="google_play"
        />
      </div>
    </div>
  );
}

export default DownloadAds;
