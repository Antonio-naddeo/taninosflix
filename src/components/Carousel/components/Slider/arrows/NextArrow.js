import React from 'react';
import styled from 'styled-components';

const NextArrowStyle = styled.div`
  display: block;
    position: relative;
    &.slick-next::before {
  content: '';
  position : absolute;
  top: -50%;
  width: 3rem;
  height: 3px;
  transform: rotate(45deg);
  background-color: rgba(0,0,0,0.8);
  transition: all 0.2s;
}
&.slick-next::after {
  content: '';
  top: 50%;
  position : absolute;
  width: 3rem;
  height: 3px;
  transform: rotate(-45deg);
  background-color: rgba(0,0,0,0.8);
  transition: all 0.2s;
}
&.slick-next:hover::before {
  top: -40%;
  transform: rotate(35deg);
}
&.slick-next:hover::after {
  top: 40%;
  transform: rotate(-35deg);
}
`;

function NextArrow() {
  return (
    <NextArrowStyle />
  );
}

export default NextArrow;
