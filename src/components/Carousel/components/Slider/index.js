/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
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
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

const Slider = ({ children, items }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: items >= 6 || (window.innerWidth <= 500 && items >= 3),
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 400,
          settings: {
            infinite: items >= 2,
          },
        },
        {
          breakpoint: 650,
          settings: {
            infinite: items >= 3,
          },
        },
        {
          breakpoint: 900,
          settings: {
            infinite: items >= 4,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            infinite: items >= 5,
          },
        },

      ],
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);
// class Slider extends Component {
//   constructor({children,items}){
//     super();
//     this.items=items;
//     this.children=children
//   }

//   render() {
//     var settings = {
//       dots: false,
//       infinite: false,
//       speed: 300,
//       centerMode: false,
//       variableWidth: true,
//       adaptiveHeight: true,
//       responsive: [
//         {
//           breakpoint: 500,
//           settings: {
//             infinite: this.items>3,
//           }
//         },
//         {
//           breakpoint: 750,
//           settings: {
//             infinite: this.items>4,
//           }
//         },
//         {
//           breakpoint: 1000,
//           settings: {
//             infinite: this.items>5,
//           }
//         },
//         {
//           breakpoint: 1250,
//           settings:{
//             infinite: this.items>6,
//           }},
//       ]
//     };
//     return (
//       <Container>
//     <SlickSlider {...settings}>
//     {this.children}
//         </SlickSlider>
//       </Container>
//     );
//   }
// }

export default Slider;
