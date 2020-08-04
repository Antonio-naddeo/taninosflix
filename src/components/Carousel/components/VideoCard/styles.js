import styled from 'styled-components';

export const VideoCardTitulo = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    text-shadow: black 0.2em 0.2em 0.2em;
    color:#2a7ae4;
    opacity: 0;
`;

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: opacity .3s;
  transition: transform .5s;
  &:hover,
  &:focus {
    opacity: .75;
    transform: scale(1.10);
    ${VideoCardTitulo}{
      transition: opacity 0.3s;
      opacity: 1;
    }
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export const DeleteLogoContainer = styled.button`
  border: 2px solid;
  border-radius: 4px;
  color: black;
  width: 35px;
  height: 35px;
  background-image: ${({ urlImageDelete }) => `url(${urlImageDelete})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: absolute;
  display: flex;
  align-items: flex-end;
  top: 5px;
  right:5px;
  opacity: 0.75;
  transition: opacity .3s;
  transition: transform .5s;
  &:hover,
  &:focus {
    opacity: 1;
    background-color:gray
    transform: scale(1.3);
    ${VideoCardTitulo}{
      transition: opacity 0.3s;
      opacity: 1;
    }
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

// export default { VideoCardContainer, VideoCardTitulo };
