import React from 'react';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';

function Carousel({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.nome;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const categoryDescription = category.descricao;
  const { videos } = category;

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <a href={categoryExtraLink.url} target="_blank" rel="noreferrer">
            <Title style={{ backgroundColor: categoryColor || 'red' }}>
              {categoryTitle}
            </Title>
          </a>
          {categoryExtraLink
            && (
            <ExtraLink>
              {categoryDescription}
            </ExtraLink>
            )}
        </>
      )}
      <Slider items={videos.length}>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }
          console.log(video.urlImage);
          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                ImageURL={(video.urlImage != undefined) ? video.urlImage : video.url}
                categoryColor={categoryColor}
                videoId={video.id}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
