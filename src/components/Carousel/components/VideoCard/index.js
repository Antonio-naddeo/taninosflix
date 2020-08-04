/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { VideoCardContainer, VideoCardTitulo, DeleteLogoContainer } from './styles';
import videosRepository from '../../../../repositories/videos';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

function VideoCard({
  videoTitle, videoURL, categoryColor, ImageURL, videoId,
}) {
  const history = useHistory();
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
      {categoryColor != '#2a7ae4' && (
      <DeleteLogoContainer
        onClick={(event) => {
          event.preventDefault();
          console.log(`Tchau ${videoTitle}`);
          videosRepository.destroy(videoId)
            .then((resposta) => {
              console.log(`Tchau ${videoTitle}`);
              window.location.reload();
            });
        }}
        urlImageDelete="data:image/png;base64,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"
      />
      )}
      <VideoCardTitulo>{videoTitle}</VideoCardTitulo>
    </VideoCardContainer>
  );
}

export default VideoCard;
