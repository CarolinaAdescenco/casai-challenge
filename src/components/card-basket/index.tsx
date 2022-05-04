import React from 'react';
import { CardBody, CardWrapper } from './styles';

interface CardProps {
  id: string;
  image: string;
  title: string;
}

const CardBasket: React.FC<CardProps> = ({ id, image, title }) => {
  return (
    <CardWrapper>
      <img
        src="https://www.hearingdogs.org.uk/globalassets/sponsor/gordon/sponsor-hearing-dog-puppy-gordon-1-600x377.jpg"
        alt={title}
      />
      <CardBody>
        <p>{title}</p>
        <hr />
        <button
          type="button"
          onClick={() => console.log('Remove pet from checkout: ', id, image)}
        >
          remove from basket
        </button>
      </CardBody>
    </CardWrapper>
  );
};

export default CardBasket;
