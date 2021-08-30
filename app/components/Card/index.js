import React from 'react';
import PropTypes from 'prop-types';
import A from 'components/A';
import Title from './Title';
import Image from './Image';
import Description from './Description';
import ImageContainer from './ImageContainer';
import StyledContainer from './StyledContainer';

const Card = ({ title, image, description, handleClick }) => (
  <StyledContainer>
    <A onClick={() => handleClick(title.toLowerCase())}>
      <ImageContainer>
        <Image src={image} alt="Image unavailable." />
      </ImageContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </A>
  </StyledContainer>
);

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Card;
