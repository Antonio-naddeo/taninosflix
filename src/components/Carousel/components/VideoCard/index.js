/* eslint-disable react/prop-types */
import React from 'react';
import { VideoCardContainer, VideoCardTitulo } from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

function VideoCard({ videoTitle, videoURL, categoryColor, ImageURL }) {
  const image = (categoryColor === '#2a7ae4')
    ? ImageURL
    : `https://img.youtube.com/vi/${getYouTubeId(ImageURL)}/hqdefault.jpg`;
  return (
    <VideoCardContainer
      url={image}
      href={videoURL}
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
      title={videoTitle}
    >
      <VideoCardTitulo>{videoTitle}</VideoCardTitulo>
    </VideoCardContainer>
  );
}

export default VideoCard;
