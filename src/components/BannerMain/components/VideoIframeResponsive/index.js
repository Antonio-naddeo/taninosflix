import React from 'react';

import {
  VideoContainer, ResponsiveIframe, ImageFrame, LogoFrame,
} from './styles';

function YouTubeIframeResponsive({ youtubeID, urlNovaAba, urlImage }) {
  const imageRef = React.createRef();
  const logoRef = React.createRef();
  const videoRef = React.createRef();
  const youtubeSrc = `https://www.youtube.com/embed/${youtubeID}?`;
  function rodarVideo(e) {
    console.log('akjhdsgaakashjdgasdkhj');
    // e.preventDefault();
    imageRef.current.style.width = 0;
    imageRef.current.style.height = 0;
    logoRef.current.style.height = 0;
    logoRef.current.style.width = 0;
    // videoRef.current.src = `${youtubeSrc}?autoplay=1&mute=0`;
  }

  return (
    <VideoContainer>
      <ResponsiveIframe
        title="Titulo do Iframe"
        src={`${youtubeSrc}?autoplay=1&mute=0`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        ref={videoRef}
      />
      <a href={urlNovaAba} rel="noreferrer" target="_blank">
        <ImageFrame src={urlImage} ref={imageRef} onClick={(event) => rodarVideo(event)} />
      </a>
      <a href={urlNovaAba} rel="noreferrer" target="_blank">
        <LogoFrame src="http://pngimg.com/uploads/youtube/youtube_PNG15.png" ref={logoRef} onClick={(event) => rodarVideo(event)} />
      </a>
    </VideoContainer>
  );
}

export default YouTubeIframeResponsive;
