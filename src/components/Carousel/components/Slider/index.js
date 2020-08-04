/* eslint-disable react/jsx-props-no-spreading */
import React, { useLayoutEffect } from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const SliderRef = React.createRef();

function NextArrow({ next }) {
  const Botao = styled.button`
    position: absolute;
  top: 0;
  height: 100%;
  background-color: rgba(20, 20, 20, 0.6);
  color: rgba(255, 255, 255, 0.5);
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  right: 16px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-right: 4px;
  `;

  return (
    <div className="custom-slider-controls">
      <Botao onClick={next}>
        <FaArrowAltCircleRight size={34} />
      </Botao>
    </div>
  );
}

function PrevArrow({ previous }) {
  const Botao = styled.button`
    position: absolute;
  top: 0;
  height: 100%;
  background-color: rgba(20, 20, 20, 0.6);
  color: rgba(255, 255, 255, 0.5);
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  left: 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-left: 4px;
  `;

  return (
    <div className="custom-slider-controls">
      <Botao onClick={previous}>
        <FaArrowAltCircleLeft size={34} />
      </Botao>
    </div>
  );
}

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 75px;
    height: 75px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }
  
  .slick-prev {
    left: 0;
  }
  .slick-next{
    right: 16px;
  }
`;

// const NextArrow = styled.button`
//   z-index: 50;
//   top: 0;
//   bottom: 0;
//   margin: auto;
//   width: 50px;
//   height: 50px;
//   src: url(${arrow});
//   background-size:25px;
//   background-repeat:no-repeat;
//   transform: initial;
//   right:16px;
//   &:before {
//     font-size: 30px;
//   }

// `;

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
const handleNext = () => {
  SliderRef.current.slickNext();
};

const handlePre= () => {
  SliderRef.current.slickPrev();
};

const Slider = ({ children, items }) => {
  
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
          // nextArrow: <NextArrow next={handleNext} />,
          // prevArrow: <PrevArrow previous={handlePre} />,
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
