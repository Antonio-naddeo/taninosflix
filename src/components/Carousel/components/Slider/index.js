/* eslint-disable react/jsx-props-no-spreading */
import React, { useLayoutEffect } from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }
  
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 16px;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  margin-top:10px;
  margin-bottom:10px;
  padding-right:5px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

const Slider = ({ children, items }) => {
  const SliderRef = React.createRef();
  // eslint-disable-next-line max-len
  useLayoutEffect(() => { // retorna o slide para a primeira posição se houver resize, para que nao ocorra de sumir a seta e videos ficaream fora do Carousel
    function updateSize() {
      SliderRef.current.slickGoTo(0);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <Container>
      <SlickSlider
        ref={SliderRef}
        {...{
          dots: false,
          infinite: items >= 6,
          speed: 300,
          centerMode: false,
          variableWidth: true,
          adaptiveHeight: true,
          arrows: items >= 6,
          responsive: [
            {
              breakpoint: 700,
              settings: {
                infinite: items >= 2,
                arrows: items >= 2,
              },
            },
            {
              breakpoint: 1010,
              settings: {
                infinite: items >= 3,
                arrows: items >= 3,
              },
            },
            {
              breakpoint: 1320,
              settings: {
                infinite: items >= 4,
                arrows: items >= 4,
              },
            },
            {
              breakpoint: 1630,
              settings: {
                infinite: items >= 5,
                arrows: items >= 5,
              },
            },

          ],
        }}
      >
        {children}
      </SlickSlider>
    </Container>
  );
};

export default Slider;
