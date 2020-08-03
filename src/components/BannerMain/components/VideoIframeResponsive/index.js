import React from 'react';

import { VideoContainer, ResponsiveIframe, ImageFrame } from './styles';

function YouTubeIframeResponsive({ youtubeID }) {
  const imageRef = React.createRef();
  const logoRef = React.createRef();
  const videoRef = React.createRef();
  function rodarVideo(e) {
    console.log("akjhdsgaakashjdgasdkhj");
    e.preventDefault();
    imageRef.current.style.width = 0;
    imageRef.current.style.height = 0;
    logoRef.current.style.height = 0;
    logoRef.current.style.width = 0;
    //videoRef.current.api('play')
  }

  return (
    <VideoContainer>
      <ResponsiveIframe
        title="Titulo do Iframe"
        src={`https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        ref={videoRef}
      />
      <ImageFrame src="https://i.ytimg.com/vi/HGrXz6vHngI/hqdefault.jpg" ref={imageRef} onClick={(event) => rodarVideo(event)} />
      <ImageFrame src="http://pngimg.com/uploads/youtube/youtube_PNG15.png" ref={logoRef} onClick={(event) => rodarVideo(event)} />
    </VideoContainer>
  );
}

export default YouTubeIframeResponsive;
